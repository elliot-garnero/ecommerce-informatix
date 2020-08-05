<?php

namespace App\Controller\Api;

use App\Utils\ApiUtils;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Users;
use App\Repository\UsersRepository;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Exception;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * Class UserController
 * @package App\Controller\Api
 * @Route("/api/user")
 */
class UserController extends AbstractController
{

    /**
     * @Route("/token", name="api_user_token", methods={"GET"})
     * @param ApiUtils $apiUtils
     * @return JsonResponse
     * @throws Exception
     */
    public function getToken(ApiUtils $apiUtils)
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        // Generate CSRF Token
        if (empty($_SESSION['token'])) {
            $_SESSION['token'] = bin2hex(random_bytes(32));
        }
        $token = $_SESSION['token'];

        $apiUtils->successResponse('',$token);
        return new JsonResponse($apiUtils->getResponse(), Response::HTTP_ACCEPTED,['Content-type'=>'application/json']);
    }

    /**
     * @Route("/info", name="api_user_info", methods={"GET"})
     * @param ApiUtils $apiUtils
     * @param UsersRepository $userRepository
     * @return JsonResponse
     */
    public function personalInfo(ApiUtils $apiUtils, UsersRepository $userRepository)
    {

        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        $info = $userRepository->findOneBy(["username"=>$this->getUser()->getUsername()]);

        if (empty($info)){
            $apiUtils->errorResponse("Erreur",[]);

            return new JsonResponse($apiUtils->getResponse(), Response::HTTP_NOT_FOUND);
        }
        else{
            $apiUtils->successResponse("OK",$info);
            return new JsonResponse($apiUtils->getResponse(), Response::HTTP_OK);
        }

    }

    /**
     * @Route("/register", name="api_user_register", methods={"POST"})
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @param ApiUtils $apiUtils
     * @param ValidatorInterface $validator
     * @return Response
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, ApiUtils $apiUtils,
                             ValidatorInterface $validator): Response
    {

        $user = new Users();

        // Get request data
        $apiUtils->getContent($request);

        // Sanitize data
        $apiUtils->setData($apiUtils->sanitizeData($apiUtils->getData()));
        $data = $apiUtils->getData();

        try {
            $date = new \DateTime();
            $user->setUsername($data["username"]);
            $user->setRoles(['ROLE_USER']);
            $user->setPassword($data['password']);
            $user->setEmail($data["email"]);
            $user->setLastname($data["lastname"]);
            $user->setFirstname($data["firstname"]);
            $user->setCountries($data["countries"]);
            $user->setCity($data["city"]);
            $user->setAddress($data["address"]);
            $user->setCp($data["cp"]);
            $user->setDeleted('0');
            $user->setCreatedAt($date);

            // hash of the password we do it here because of validateData
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $data['password']
                )
            );

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

        }catch (Exception $e){
            $apiUtils->errorResponse( "No user for insert");
            return new JsonResponse($apiUtils->getResponse(),Response::HTTP_BAD_REQUEST,['Content-type'=>'application/json']);
        }

        $token = new UsernamePasswordToken(
            $user,
            null,
            'main',
            $user->getRoles()
        );
        $this->get('security.token_storage')->setToken($token);
        $this->get('session')->set('_security_main', serialize($token));

        $apiUtils->successResponse("Erreur",$user);
        return new JsonResponse($apiUtils->getResponse(), Response::HTTP_CREATED, ['Content-type' => 'application/json']);
    }

    /**
     * @Route("/login", name="api_user_login", methods={"POST"})
     * @param AuthenticationUtils $authenticationUtils
     * @param ApiUtils $apiUtils
     * @return Response
     */
    public function login(AuthenticationUtils $authenticationUtils, ApiUtils $apiUtils)
    {

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();


        $apiUtils->successResponse("");
        return new JsonResponse($apiUtils->getResponse(), Response::HTTP_OK);
    }

    /**
     * @Route("/logout", name="api_user_logout", methods={"GET"})
     * @throws Exception
     */
    public function logout()
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        // controller can be blank: it will never be executed!
        throw new Exception('Don\'t forget to activate logout in security.yaml');
    }

    /**
     * @Route("/authenticated", name="api_user_authenticated", methods={"GET"})
     * @param UsersRepository $userRepository
     * @return JsonResponse
     */
    public function isAuthenticated(UsersRepository $userRepository) : JsonResponse
    {
        dd($this->getUser());
        if (!$this->getUser()){
            $response = [
                "success"=>false,
                "message"=>"Erreur",
            ];
            return new JsonResponse($response,Response::HTTP_OK);
        } else {$user = $userRepository->findOneBy(['username'=>$this->getUser()->getUsername()]);
            
            $response = [
                "success"=>true,
                "message"=>"Erreur session",
                "errors"=> [],
                "results"=>['id'=>$user->getId()]
            ];
            if (in_array('ROLE_ADMIN', $user->getRoles()))
                $response["is_admin"] = true;
            else
            {
                $response["is_admin"] = false;
            }

            return new JsonResponse($response,Response::HTTP_OK);
        }
    }
}
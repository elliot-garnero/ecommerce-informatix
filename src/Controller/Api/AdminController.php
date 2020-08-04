<?php


namespace App\Controller\Api;


use App\Utils\ApiUtils;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Admin;
use App\Repository\AdminRepository;
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
 * Class AdminController
 * @package App\Controller\Api
 * @Route("/api/admin")
 */
class AdminController extends AbstractController
{

    /**
     * @Route("/token", name="api_admin_token", methods={"GET"})
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
     * @Route("/info", name="api_admin_info", methods={"GET"})
     * @param ApiUtils $apiUtils
     * @param AdminRepository $userRepository
     * @return JsonResponse
     */
    public function personalInfo(ApiUtils $apiUtils, AdminRepository $userRepository)
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
     * @Route("/login", name="api_admin_login", methods={"POST"})
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
     * @Route("/logout", name="api_admin_logout", methods={"GET"})
     * @throws Exception
     */
    public function logout()
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        // controller can be blank: it will never be executed!
        throw new Exception('Don\'t forget to activate logout in security.yaml');
    }

    /**
     * @Route("/authenticated", name="api_admin_authenticated", methods={"GET"})
     * @param AdminRepository $userRepository
     * @return JsonResponse
     */
    public function isAuthenticated(AdminRepository $userRepository) : JsonResponse
    {
        if (!$this->getUser()){
            $response = [
                "success"=>false,
                "message"=>"Erreur",
            ];
            return new JsonResponse($response,Response::HTTP_OK);
        } else {
            $user = $userRepository->findOneBy(['username'=>$this->getUser()->getUsername()]);
            $response = [
                "success"=>true,
                "message"=>"Erreur session",
                "errors"=> [],
                "results"=>['id'=>$user->getId()]
            ];
            if (in_array('ROLE_ADMIN', $user->getRoles()))
                $response["is_admin"] = true;

            return new JsonResponse($response,Response::HTTP_OK);
            
        }
    }
}
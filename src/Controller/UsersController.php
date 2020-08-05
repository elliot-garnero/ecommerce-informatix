<?php

namespace App\Controller;

use App\Entity\Users;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\Encoder\JsonEncode;

class UsersController extends AbstractController
{
     /**
     * @Route("/api/admin/listUsers", name="list_users")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showUsers(UserRepository $repository): Response
    {
        $users = $repository->findAll();
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($users, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/api/user/{id}", name="show_user")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showOne($id , UserRepository $repository): Response
    {
        $key = $repository->find($id);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($key, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/api/update/{id}", name="change_firstname")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function updateData( $id , UserRepository $repository, Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        $userPass = new Users();
        $repoPass = $this->getDoctrine()->getRepository(Users::class);
        $entityManager = $this->getDoctrine()->getManager();
        $data = $request->getContent();
        $newData = json_decode($data, true);
        $userPass = $repoPass->find($id);
        $user = $repository->find($id);
        foreach($newData as $key => $val){
            if($newData[$key] !== ''){
            switch ($key) {
                case 'username':
                    $user->setUsername($newData[$key]);
                    break;
                case 'firstname':
                    $user->setFirstname($newData[$key]);
                    break;
                case 'lastname':
                    $user->setLastname($newData[$key]);
                    break;
                case 'address':
                    $user->setAddress($newData[$key]);
                    break;
                case 'cp':
                    $user->setCp($newData[$key]);
                    break;
                case 'city':
                    $user->setCity($newData[$key]);
                    break;
                case 'countries':
                    $user->setCountries($newData[$key]);
                    break;
                case 'email':
                    $user->setEmail($newData[$key]);
                    break;
                case 'password':
                    // $user->setPassword($newData[$key]);
                    $userPass->setPassword(
                        $passwordEncoder->encodePassword(
                            $userPass,
                            $newData[$key]
                        )
                    );
                    break;
                case 'setActive':
                    $user->setPassword($newData[$key]);
                    break;
            }
        }
    }
        $entityManager->persist($user);
        $entityManager->flush();
        $entityManager->persist($userPass);
        $entityManager->flush();
        return new Response('information mise à jour :'. $user->getId() . ' '.$user->getLastname().' '.$user->getFirstname());

    }

    /**
     * @Route("/api/addDiscount/{id}", name="addDiscount")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function addDiscount( $id,UserRepository $repository, Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $data = $request->getContent();
        $newData = json_decode($data, true);
        $user = $repository->find($id);
        if($newData['discount'] !== ''){
            $user->setDiscount($newData['discount']);
        }
        $entityManager->persist($user);
        $entityManager->flush();
        return new Response('Remise accordée à l\'id '. $user->getId() . ' '.$user->getLastname().' '.$user->getFirstname());
    }

}
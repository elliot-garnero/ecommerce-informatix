<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UsersRepository;
use Symfony\Component\HttpFoundation\Request;

class UsersController extends AbstractController
{
    /**
     * @Route("/api/user", name="user")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showUsers(UsersRepository $repository): Response
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
    public function showOne($id , UsersRepository $repository): Response
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
    public function updateData( $id , UsersRepository $repository, Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $data = $request->getContent();
        $newData = json_decode($data, true);
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
                    $user->setPassword($newData[$key]);
                    break;
            }
        }
    }
        $entityManager->persist($user);
        $entityManager->flush();
        return $this->redirectToRoute('user', [
            // 'id' => $user->getIdUser()
        ]);
    }
}

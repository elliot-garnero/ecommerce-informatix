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
        $user = $repository->find($id);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($user, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/api/update/{field}/{id}", name="change_firstname")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function updateData($field, $id , UsersRepository $repository, Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $newData = $request->request->get($field);
        $user = $repository->find($id);
        switch ($field) {
            case 'firstname':
                $user->setFirstname($newData);
                break;
            case 'lastname':
                $user->setLastname($newData);
                break;
            case 'address':
                $user->setAddress($newData);
                break;
            case 'cp':
                $user->setCp($newData);
                break;
            case 'city':
                $user->setCity($newData);
                break;
            case 'countries':
                $user->setCountries($newData);
                break;
            case 'email':
                $user->setEmail($newData);
                break;
            case 'password':
                $user->setPassword($newData);
                break;
        }
        $entityManager->flush();
        return $this->redirectToRoute('user', [
            // 'id' => $user->getIdUser()
        ]);
    }
}

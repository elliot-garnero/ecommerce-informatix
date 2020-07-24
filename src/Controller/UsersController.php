<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UsersRepository;

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
}

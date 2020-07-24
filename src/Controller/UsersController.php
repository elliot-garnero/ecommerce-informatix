<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class UsersController extends AbstractController
{
    /**
     * @Route("/api/user", name="user")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showUsers(): Response
    {
        
        $repository = $this->getDoctrine()->getRepository(Users::class);
        $users = $repository->findAll();
        
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($users, 'json');
        return new Response($serializedEntity);
    }
}

<?php

namespace App\Controller;
use App\Entity\Admin;
use App\Repository\AdminRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Security;

class AdminController extends AbstractController
{
    /**
     * @Route("/api/admin/login", name="admin_login")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function login(Request $request , AdminRepository $admin ) : Response
    {
        $data = $request->getContent();
        $data = json_decode($data, true);
        $username = $data['username'];
        $password = $data['password'];
        $result = $admin->findBy(['username'=> $username]);
        if(!$result){
            return new Response('Ouste !! '. "<br><a href=\"/admin\">Back</a>");
        }
        else{

            return new Response("Vous etes connecté en tant qu admin :<br><a href=\"/deliveryList\">Back</a>");
        };
    }
}

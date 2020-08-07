<?php

namespace App\Controller;

use App\Entity\Admin;
use App\Repository\AdminRepository;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;



class AdminController extends AbstractController
{
    /**
     * @Route("/api/admin/login", name="admin_login")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function login(AdminRepository $adminRepo) : Response
    {
        $result = $adminRepo->findBy(["username" => $_POST["username"]]);
        if(!$result){
            return new Response("Vous n'avez pas les droits d'accès ! <br><a href=\"/admin\">Back</a>");
        }
        else{
            return new Response("Vous etes connecté en tant qu admin ! <br><a href=\"/catalogAdmin\">Back</a>");
        };
    }
}

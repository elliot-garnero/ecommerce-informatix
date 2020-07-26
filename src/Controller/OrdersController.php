<?php

namespace App\Controller;

use App\Entity\Orders;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\OrdersRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;

class OrdersController extends AbstractController
{
    /**
     * @Route("/api/command/{idUser}", name="show_orders")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showOne($idUser , OrdersRepository $repository): Response
    {
        $orders = $repository->findBy(['idUser' => $idUser]);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($orders, 'json');
        return new Response($serializedEntity);
    }

 
}

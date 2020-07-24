<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PayementsRepository;
use Symfony\Component\HttpFoundation\Response;

class PayementsController extends AbstractController
{
    /**
     * @Route("/api/pay/{idPay}", name="show_pay")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showOne($idPay , PayementsRepository $repository): Response
    {
        $pay = $repository->find($idPay);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($pay, 'json');
        return new Response($serializedEntity);
    }
}

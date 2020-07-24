<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\DeliveryAddressRepository;
use Symfony\Component\HttpFoundation\Response;

class DeliveryAddressController extends AbstractController
{
    /**
     * @Route("/api/address/{id}", name="show_address")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showAdresses($id , DeliveryAddressRepository $repository): Response
    {
        $addresses = $repository->findBy(['idUser' =>$id]);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($addresses, 'json');
        return new Response($serializedEntity);
    }
}

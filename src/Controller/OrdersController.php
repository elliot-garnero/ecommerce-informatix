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

    /**
     * @Route("/api/orderList", name="orderList")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function orderList(OrdersRepository $repository): Response
    {
        $orders = $repository->findAllDesc();
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($orders, 'json');
        return new Response($serializedEntity);
    }


    /**
     * @Route("/api/deliveryListOrderBy", name="orderListSort")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function orderListBy(OrdersRepository $repository, Request $request): Response
    {
        $data = $request->getContent();
        $sort = json_decode($data, true);
        //dd($sort["status"]);
        $orders = $repository->OrderListBy($sort["status"]);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($orders, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/api/editDeliveryStatus", name="editDeliveryStatus")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function editDeliveryStatus(OrdersRepository $repository): Response
    {
        $idOrder = $_POST["idOrder"];
        $entityManager = $this->getDoctrine()->getManager();
        $order = $repository->find($_POST["idOrder"]);
        $order->setOrdStatus($_POST['ordStatus']);
        
        $entityManager->persist($order);
        $entityManager->flush();

        return new Response('Saved modif product with id '. $order->getIdOrder() . "<br><a href=\"/deliveryList\">Back</a>");
    }

 
}

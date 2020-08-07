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
     * @var Security
     */
    private $security;

    public function __construct(Security $security)
    {
       $this->security = $security;
    }

    /**
     * @Route("/api/command", name="show_orders")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showOne( OrdersRepository $repository): Response
    {
        $user = $this->getUser()->getId();
        dd($user);
        $orders = $repository->findBy(['idUser' =>$user]);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($orders, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/api/detailCommand/{idCommand}", name="detailCommand")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function detailCommand($idCommand , OrdersRepository $repository): Response
    {
        $orders = $repository->findBy(['idOrder' => $idCommand]);
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

    /**
     * @Route("/api/getUserID", name="getUserID")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function getUserID(OrdersRepository $repository): Response
    {
        $user = $this->getUser()->getId();

        return new Response($user);
    }

 
}

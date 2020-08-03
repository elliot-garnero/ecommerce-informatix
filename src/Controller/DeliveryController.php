<?php

namespace App\Controller;

use App\Entity\Orders;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints\DateTimeInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DeliveryController extends AbstractController
{
    /**
     * @Route("/api/order", name="order")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function registerOrder(): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        
        $userID = 1;                    // CHANGE USER ID WITH SESSION
        $lastname = $_POST['lastName'];
        $firstname = $_POST['firstName'];
        $email = $_POST['email'];

        $address = $_POST['address'];
        $address2 = $_POST['address2'];
        $country = $_POST['country'];
        $zip = $_POST['zip'];
        $fullAddress = $address . " " . $address2 . " " . $country . " " . $zip;

        $total = $_POST['total'];
        $deliveryMode = $_POST['delivery'];
        $status = "registered";
        $packaging = $_POST['packaging'];
        
        $date = new \DateTime();
        $order = new Orders();
        $order->setIdUser($userID);
        $order->setOrdLastname($lastname);
        $order->setOrdFirstname($firstname);
        $order->setOrdEmail($email);
        $order->setOrdAddress($fullAddress);
        $order->setOrdTotal($total);
        $order->setOrdMode($deliveryMode);
        $order->setOrdStatus($status);
        $order->setOrdDate($date);
        $order->setPackaging($packaging);



        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($order);
        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Saved new order with id '. $order->getIdOrder() . "<br><a href=\"/\">Back</a>");
    }

     /**
     * @Route("/api/tracking/{id}", name="tracking")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function tracking($id): Response
    {
        $trackingNumber = $id;

        $repository = $this->getDoctrine()->getRepository(Orders::class);
        $order = $repository->find($trackingNumber);

        if($order == null){
            throw $this->createNotFoundException('There is no order with this number');
        }

        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($order, 'json');

        return new Response($serializedEntity);
    }

}

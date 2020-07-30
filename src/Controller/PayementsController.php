<?php

namespace App\Controller;

use App\Entity\Payements;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PayementsRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;

class PayementsController extends AbstractController
{
    /**
     * @Route("/api/pay/{idPay}", name="show_pay")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showOne($idPay , PayementsRepository $repository): Response
    {
        $pay = $repository->findAll($idPay);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($pay, 'json');
        return new Response($serializedEntity);
    }

        /**
     * @Route("/api/addCb/{id}", name="add_cb")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function addCb($id , Request $request): Response
    {
        $data = $request->getContent();
        $data = json_decode($data, true);
        $payFirstname = $data['firstname'];
        $payLastname = $data['lastname'];
        $payCb = $data['payCb'];
        $payCvv = $data['payCvv'];
        $payExpiration = $data['payExpiration'];
        $payEmail = 'nav@gmail.com';
        // if ($data['checked'] == true){
        //     $default = 1;
        //     // passer tous les active de cet id a 0
        // }
        // else{
        //     $default = 0;
        // }
        $default = $data['checked']== true ? 1 : 0;
        $em = $this->getDoctrine()->getManager();
        $new_cb = new Payements();
        $new_cb->setPayFirstname($payFirstname);
        $new_cb->setPayLastname($payLastname);
        $new_cb->setIdUser($id);
        $new_cb->setPayCb($payCb);
        $new_cb->setPayCvv($payCvv);
        $new_cb->setPayExpiration(\DateTime::createFromFormat('Y-m-d',$payExpiration));
        $new_cb->setPayEmail($payEmail);
        $new_cb->setActive($default);
        $em->persist($new_cb);
        $em->flush();

        return new Response('Saved new cb with id '.$new_cb->getIdPay());
    }
}

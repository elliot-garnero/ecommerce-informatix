<?php

namespace App\Controller;

use App\Entity\Payements;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PayementsRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\JsonResponse;

class PayementsController extends AbstractController
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
     * @Route("/api/payments", name="show_payments")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showOne( PayementsRepository $repository): Response
    {
        $user = $this->getUser()->getId();
        $pay = $repository->findBy(['idUser' => $user]);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($pay, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/api/admin/pay/{idUser}", name="show_pay")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showAdminPay($idUser , PayementsRepository $repository): Response
    {
        $pay = $repository->findBy(['idUser' => $idUser]);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($pay, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/api/admin/blockCb/{idPay}", name="block_pay")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function blockPay($idPay , PayementsRepository $repository): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $blocked = $entityManager->getRepository(Payements::class)->find($idPay);
        $blocked->SetActive(2);
        $entityManager->persist($blocked);
        $entityManager->flush();
        return new JsonResponse(['message' =>'Action enregistrée !!!']);

    }

    /**
     * @Route("/api/admin/deBlockCb/{idPay}", name="deBlock_pay")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function deBlockPay($idPay): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $deBlocked = $entityManager->getRepository(Payements::class)->find($idPay);
        $deBlocked->SetActive(0);
        $entityManager->persist($deBlocked);
        $entityManager->flush();
        return new JsonResponse(['message' =>'Action enregistrée !!!']);

    }

        /**
     * @Route("/api/addCb/{id}", name="add_cb")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function addCb($id , Request $request, PayementsRepository $repository): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $data = $request->getContent();
        $data = json_decode($data, true);
        $payFirstname = $data['firstname'];
        $payLastname = $data['lastname'];
        $payCb = $data['payCb'];
        $payCvv = $data['payCvv'];
        $payExpiration = $data['payExpiration'];
        $payEmail = 'nav@gmail.com';
        $default = $data['checked']== true ? 1 : 0;
        if ($data['checked'] == true){
            $user = $this->security->getUser();
            $payCards = $repository->findAll($user);
            if($payCards){
                foreach ($payCards as $key => $value) {
                    $value->setActive(0);
                    $entityManager->persist($value);
                    $entityManager->flush();
                }
            }
        }        
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

     /**
     * @Route("/api/active_pay", name="active_pay")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function activePay( Request $request ): JsonResponse
    {
        $data = $request->getContent();
        $data = json_decode($data, true);
        $idPay = $data['idPay'];
        $idUser = $data['idUser'];
        $entityManager = $this->getDoctrine()->getManager();
        $inactive = $entityManager->getRepository(Payements::class)->findBy(['idUser' => $idUser]);
        foreach ($inactive as $key => $value) {
            $value->setActive(0);
            $entityManager->persist($value);
            $entityManager->flush();
        }
        $active = $entityManager->getRepository(Payements::class)->find($idPay);
        $active->SetActive(1);
        $entityManager->persist($active);
        $entityManager->flush();
        
        
        return new JsonResponse(['message' =>'Action enregistrée !!!']);
    }

    /**
     * @Route("/api/delete_pay/{id}", name="delete_pay")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function deletePay($id ): JsonResponse
    {
        $entityManager = $this->getDoctrine()->getManager();
        $pay = $entityManager->getRepository(Payements::class)->find($id);
        $entityManager->remove($pay);
        $entityManager->flush();
        
        return new JsonResponse(['message' =>'CB supprimée !!!']);
    }
}

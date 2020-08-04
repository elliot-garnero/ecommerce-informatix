<?php

namespace App\Controller;

use App\Entity\DeliveryAddress;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\DeliveryAddressRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\JsonResponse;

class DeliveryAddressController extends AbstractController
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

     /**
     * @Route("/api/addAddress/{id}", name="add_address")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function addAdresses($id , Request $request): Response
    {
        $data = $request->getContent();
        $data = json_decode($data, true);
        $firstname = $data['firstname'];
        $lastname = $data['lastname'];
        $address = $data['address'];
        $cp = $data['cp'];
        $city = $data['city'];
        $countries = $data['countries'];
        // if ($data['checked'] == true){
        //     $default = 1;
        //     // passer tous les active de cet id a 0
        // }
        // else{
        //     $default = 0;
        // }
        $default = $data['active'];
        $em = $this->getDoctrine()->getManager();
        $new_address = new DeliveryAddress();
        $new_address->setDelFirstname($firstname);
        $new_address->setDelLastname($lastname);
        $new_address->setIdUser($id);
        $new_address->setDelAddress($address);
        $new_address->setDelCp($cp);
        $new_address->setDelCity($city);
        $new_address->setDelCountries($countries);
        $new_address->setActive($default);
        $em->persist($new_address);
        $em->flush();

        return new Response('Saved new product with id '.$new_address->getIdDeliv());
    }

    /**
     * @Route("/api/delete_address/{id}", name="delete_address")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function deleteAdresses($id ): JsonResponse
    {
        $entityManager = $this->getDoctrine()->getManager();
        $address = $entityManager->getRepository(DeliveryAddress::class)->find($id);
        $entityManager->remove($address);
        $entityManager->flush();
        
        return new JsonResponse(['message' =>'Adresse supprimée !!!']);
    }
}

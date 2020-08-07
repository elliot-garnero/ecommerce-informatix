<?php

namespace App\Controller;

use App\Entity\DeliveryAddress;
use App\Entity\Users;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\DeliveryAddressRepository;
use App\Repository\UsersRepository;
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
     * @Route("/api/address", name="show_address")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showAdresses(DeliveryAddressRepository $repository, UsersRepository $repoUsers): Response
    {
        $user = $this->getUser()->getId();
        $addresses = $repository->findBy(['idUser' =>$user]);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($addresses, 'json');
        return new Response($serializedEntity);
    }

     /**
     * @Route("/api/addAddress", name="add_address")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function addAdresses(Request $request, DeliveryAddressRepository $repository): Response
    {
        $id= $this->getUser()->getId();
        $data = $request->getContent();
        $data = json_decode($data, true);
        $firstname = $data['firstname'];
        $lastname = $data['lastname'];
        $address = $data['address'];
        $cp = $data['cp'];
        $city = $data['city'];
        $countries = $data['countries'];
        $default = $data['active'];
        if ($data['active'] == true){
            $user = $this->security->getUser();
            $addresses = $repository->findAll($user);
            if($addresses){
                foreach ($addresses as $value) {
                    $value->setActive(0);
                }
            }
        }
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
     * @Route("/api/active_address", name="active_address")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function activeAddress( Request $request, DeliveryAddressRepository $repository ): JsonResponse
    {
        $user = $this->security->getUser();
        $data = $request->getContent();
        $data = json_decode($data, true);
        $idAddress = $data['idAddress'];
        $entityManager = $this->getDoctrine()->getManager();
        $inactive = $repository->findAll($user);
        foreach ($inactive as $key => $value) {
            $value->setActive(0);
            $entityManager->persist($value);
            $entityManager->flush();
        }
        $active = $repository->find($idAddress);
        $active->SetActive(1);
        $id = $active->getIdUser();
        $entityManager->persist($active);
        $entityManager->flush();
        return new JsonResponse(['message' =>'Action enregistrée !!!', 'idUser' => $id]);
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

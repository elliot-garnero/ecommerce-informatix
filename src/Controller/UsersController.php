<?php

namespace App\Controller;

use App\Entity\Users;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Security;

class UsersController extends AbstractController
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
     * @Route("/api/admin/listUsers", name="list_users")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showUsers(UserRepository $repository): Response
    {
        $users = $repository->findAll();
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($users, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/api/user", name="show_user")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showOne( UserRepository $repository): Response
    {
        $id = $this->getUser()->getId();
        $key = $repository->find($id);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($key, 'json');
        return new Response($serializedEntity);
    }

   
    
    /**
     * @Route("/api/getDiscount/{id}", name="getDiscount")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function getDiscount($id , UserRepository $repository): Response
    {
        $key = $repository->find($id)->getDiscount();
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($key, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/api/update", name="change_firstname")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function updateData( UserRepository $repository, Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        $userid = $this->getUser()->getId();
        $entityManager = $this->getDoctrine()->getManager();
        $data = $request->getContent();
        $newData = json_decode($data, true);
        $userPass = $this->getDoctrine()->getRepository(Users::class)->find($userid);
        $user = $repository->find($userid);
        foreach($newData as $key => $val){
            if($newData[$key] !== ''){
            switch ($key) {
                case 'username':
                    $user->setUsername($newData[$key]);
                    break;
                case 'firstname':
                    $user->setFirstname($newData[$key]);
                    break;
                case 'lastname':
                    $user->setLastname($newData[$key]);
                    break;
                case 'address':
                    $user->setAddress($newData[$key]);
                    break;
                case 'cp':
                    $user->setCp($newData[$key]);
                    break;
                case 'city':
                    $user->setCity($newData[$key]);
                    break;
                case 'countries':
                    $user->setCountries($newData[$key]);
                    break;
                case 'email':
                    $user->setEmail($newData[$key]);
                    break;
                case 'password':
                    $userPass->setPassword(
                        $passwordEncoder->encodePassword(
                            $userPass,
                            $newData[$key]
                        )
                    );
                    break;
            }
        }
    }
        $entityManager->persist($user);
        $entityManager->flush();
        $entityManager->persist($userPass);
        $entityManager->flush();
        return new Response('information mise à jour : id:'. $user->getId() . ' '.$user->getLastname().' '.$user->getFirstname());

    }

    /**
     * @Route("/api/addDiscount", name="addDiscount")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function addDiscount(UserRepository $repository, Request $request)
    {
        $id = $this->getUser()->getId();
        $entityManager = $this->getDoctrine()->getManager();
        $data = $request->getContent();
        $newData = json_decode($data, true);
        $user = $repository->find($id);
        if($newData['discount'] !== ''){
            $user->setDiscount($newData['discount']);
        }
        $entityManager->persist($user);
        $entityManager->flush();
        return new Response('Remise accordée à l\'id '. $user->getId() . ' '.$user->getLastname().' '.$user->getFirstname());
    }

}

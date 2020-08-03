<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\ReviewsRepository;
use App\Entity\Reviews;
use App\Repository\UsersRepository;

class ReviewsController extends AbstractController
{
    /**
     * @Route("/reviews", name="reviews")
     */
    public function index()
    {
        return $this->render('reviews/index.html.twig', [
            'controller_name' => 'ReviewsController',
        ]);
    }

    /**
     * @Route("/product/reviews/{id}", name="show_reviews")
     */
    public function showReviews($id, ReviewsRepository $repository, UsersRepository $repoUser): Response
    {
        $reviews = $repository->findBy(['idProduct'=>$id]);
        
        $idUser = [];
        foreach($reviews as $key => $value){
            $idUser[$value->getIdUser()] = $value->getIdUser();
        }
        $username = [];
        foreach($idUser as $key => $value){
            $username[$key] = $repoUser->findBy(['id' => $value]);
        }
        
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($reviews, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/product/reviews/name/{id}", name="show_reviews_name")
     */
    public function showReviewName($id, ReviewsRepository $repository, UsersRepository $repoUser): Response
    {
        $username= $repoUser->findBy(['id' => $id]);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($username, 'json');
        return new Response($serializedEntity);
    }


}

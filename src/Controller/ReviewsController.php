<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\ReviewsRepository;
use App\Entity\Reviews;
use App\Repository\UserRepository;

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
     * @Route("/api/createreview", name="create_reviews")
     */
    public function createReview(ReviewsRepository $repository, UsersRepository $repoUser): Response
    {
        $entityManager = $this->getDoctrine()->getManager();

        $user = $this->getUser()->getId();

        $review = new Reviews();
        $review->setIdProduct($_POST['productID']);
        $review->setIdUser($user);
        $review->setRating($_POST['rating']);
        $review->setContent($_POST['review']);

        $entityManager->persist($review);
        $entityManager->flush();
        
        return new Response('Saved new review with id '. $review->getIdReview() . "<br><a href=\"/\">Back</a>");
    }

    /**
     * @Route("/product/reviews/{id}", name="show_reviews")
     */
    public function showReviews($id, ReviewsRepository $repository, UserRepository $repoUser): Response
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
     * @Route("/product/reviewsName/{id}", name="show_reviews_name")
     */
    public function showReviewName($id, ReviewsRepository $repository, UserRepository $repoUser): Response
    {
        $user = $repoUser->findBy(['id' => $id]);
        //dd($user);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($user, 'json');
        //dd($serializedEntity);
        return new Response($serializedEntity);
    }

}

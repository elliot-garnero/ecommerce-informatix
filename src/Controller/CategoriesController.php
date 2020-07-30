<?php

namespace App\Controller;

use App\Entity\Categories;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CategoriesController extends AbstractController
{
    /**
     * @Route("/categories", name="categories")
     */
    public function index()
    {
        return $this->render('categories/index.html.twig', [
            'controller_name' => 'CategoriesController',
        ]);
    }

    /**
     * @Route("/api/getcategories", name="getcategories")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function getCategories(): Response
    {
        // fetch entityManager grace à $this->getDoctrine()
        $repository = $this->getDoctrine()->getRepository(Categories::class);
        $categories = $repository->findAll();
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($categories, 'json');
        return new Response($serializedEntity);
    }
}

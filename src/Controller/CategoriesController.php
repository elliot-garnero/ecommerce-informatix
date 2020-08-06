<?php

namespace App\Controller;

use App\Entity\Categories;
use App\Repository\CategoriesRepository;
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

    /**
     * @Route("/api/deleteCategorie/{id}", name="deleteCategorie")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function deleteProduct(CategoriesRepository $repository, $id): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $categorie = $repository->find($id);

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->remove($categorie);
        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Categorie deleted with id '. $categorie->getIdCat() . "<br><a href=\"/manageCategories\">Back</a>");
    }


     /**
     * @Route("/api/createCategorie", name="createCategorie")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function createCategorie(): Response
    {
        $entityManager = $this->getDoctrine()->getManager();

        $categorie = new Categories();
        $categorie->setCatName($_POST['name']);
        $categorie->setCatPicture($_POST['picture']);

        // tell Doctrine you want to (eventually) save the categorie (no queries yet)
        $entityManager->persist($categorie);
        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Saved new categorie with id '. $categorie->getIdCat() . "<br><a href=\"/manageCategories\">Back</a>");
    }


}

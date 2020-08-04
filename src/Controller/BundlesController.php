<?php

namespace App\Controller;

use App\Entity\Bundles;
use App\Repository\BundlesRepository;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class BundlesController extends AbstractController
{
    /**
     * @Route("/api/getBundles", name="getBundles")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function getBundles(): Response
    {
        $repository = $this->getDoctrine()->getRepository(Bundles::class);
        $bundles = $repository->findAll();
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($bundles, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/api/bundles/{id}", name="show_bundle")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function getOneBundle($id): Response
    {
        $repository = $this->getDoctrine()->getRepository(Bundles::class);
        $bundle = $repository->find($id);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($bundle, 'json');
        return new Response($serializedEntity);
    }


     /**
     * @Route("/api/deleteBundle", name="deleteBundle")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function deleteBundle(BundlesRepository $repository): Response
    {

        $entityManager = $this->getDoctrine()->getManager();
        $bundle = $repository->find($_POST["idBundle"]);

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->remove($bundle);
        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Product deleted with id '. $bundle->getIdBundle() . "<br><a href=\"/bundles\">Back</a>");
    }


     /**
     * @Route("/api/modifBundle", name="modifBundle")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function modifBundle(BundlesRepository $repository): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $bundle = $repository->find($_POST["idBundle"]);
        $bundle->setbundName($_POST['name']);
        $bundle->setbundDescription($_POST['description']);
        $bundle->setbundStock($_POST['stock']);
        $bundle->setbundPicture1($_POST['picture1']);
        $bundle->setbundPicture2($_POST['picture2']);
        $bundle->setbundPicture3($_POST['picture3']);
        $bundle->setbundPicture4($_POST['picture4']);
        $bundle->setbundPrice($_POST['price']);

        // tell Doctrine you want to (eventually) save the bundle (no queries yet)
        $entityManager->persist($bundle);
        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Saved modif product with id '. $bundle->getIdBundle() . "<br><a href=\"/bundles\">Back</a>");
    }


     /**
     * @Route("/api/createBundle", name="createBundle")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function createBundle(): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $bundle = new Bundles();
        $bundle->setbundProducts($_POST['refs']);
        $bundle->setbundName($_POST['name']);
        $bundle->setbundDescription($_POST['description']);
        $bundle->setbundStock($_POST['stock']);
        $bundle->setbundPicture1($_POST['picture1']);
        $bundle->setbundPicture2($_POST['picture2']);
        $bundle->setbundPicture3($_POST['picture3']);
        $bundle->setbundPicture4($_POST['picture4']);
        $bundle->setbundPrice($_POST['price']);

        // tell Doctrine you want to (eventually) save the bundle (no queries yet)
        $entityManager->persist($bundle);
        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Saved new bundle with id '. $bundle->getIdBundle() . "<br><a href=\"/\">Back</a>");
    }




}

<?php

namespace App\Controller;

use App\Entity\Products;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\Validator\Constraints\DateTimeInterface;

class ProductController extends AbstractController
{
    /**
     * @Route("/product", name="product")
     */
    public function index()
    {
        return $this->render('product/index.html.twig', [
            'controller_name' => 'ProductController',
        ]);
    }
    
     /**
     * @Route("/api/createproduct", name="createproduct")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function createProduct(): Response
    {
        $entityManager = $this->getDoctrine()->getManager();

        $new = false;
        $promo = false;

        if(isset($_POST['new'])) {
            $new = true;
        }
        if(isset($_POST['promo'])) {
            $promo = true;
        }

        $date = new \DateTime();
        $product = new Products();
        $product->setIdCat($_POST['categorie']);
        $product->setName($_POST['name']);
        $product->setDescription($_POST['description']);
        $product->setBrand($_POST['brand']);
        $product->setStock($_POST['stock']);
        $product->setNew($new);
        $product->setPromo($promo);
        $product->setPicture1($_POST['picture1']);
        $product->setPicture2($_POST['picture2']);
        $product->setPicture3($_POST['picture3']);
        $product->setCharacteristics($_POST['characteristics']);
        $product->setPrice($_POST['price']);
        $product->setWeight($_POST['weight']);
        $product->setColor($_POST['color']);
        $product->setSize($_POST['size']);
        $product->setAddedDate($date);

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($product);
        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Saved new product with id '. $product->getIdProduct() . "<br><a href=\"/\">Back</a>");
    }
}

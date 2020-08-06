<?php
namespace App\Controller;

use App\Entity\Categories;
use App\Entity\Products;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\ProductsRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


class ProductController extends AbstractController
{
    /**
     * @Route("/product", name="product")
     */
    public function index()
    {
        return $this->render('product/index.html.twig', [
            'controller_name' => 'ProdctController',
        ]);
    }
    
    /**
     * @Route("/api/products", name="products")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showProducts(ProductsRepository $repository): Response
    {
        //$repository = $this->getDoctrine()->getRepository(Products::class);
        $products = $repository->findAllDesc();
        // Si pas d'article
        if (!$products) {
            throw $this->createNotFoundException(
                'Pas d\'article dans le catalogue ! '
            );
        }
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($products, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/api/search", name="search_products")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function searchProducts(ProductsRepository $repository, Request $request): Response
    {
        $data = $request->getContent();
        $data = json_decode($data, true);
        $tag = $data['query'];
        $products = $repository->findAllByTag($tag);
        // Si pas d'article
        if (!$products) {
            throw $this->createNotFoundException(
                'Pas d\'article correspondant ! '
            );
        }
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($products, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/api/products/{id}", name="show_product")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showOne($id): Response
    {
        $repository = $this->getDoctrine()->getRepository(Products::class);
        $product = $repository->find($id);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($product, 'json');
        return new Response($serializedEntity);
    }


    /**
     * @Route("/api/productsRandom", name="productsRandom")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function RandomProducts( ProductsRepository $repository): Response
    {
        $products = $repository->findAll();
        shuffle($products);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($products, 'json');
        return new Response($serializedEntity);
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


    
     /**
     * @Route("/api/deleteproduct", name="deleteproduct")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function deleteProduct(ProductsRepository $repository): Response
    {

        $entityManager = $this->getDoctrine()->getManager();
        $product = $repository->find($_POST["idProduct"]);

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->remove($product);
        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Product deleted with id '. $product->getIdProduct() . "<br><a href=\"/\">Back</a>");
    }


     /**
     * @Route("/api/modifproduct", name="modifproduct")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function modifProduct(ProductsRepository $repository): Response
    {
        if(isset($_POST['new'])) {
            $new = true;
        } else {
            $new = false;
        }
        if(isset($_POST['promo'])) {
            $promo = true;
        } else {
            $promo = false;
        }

        $date = new \DateTime();

        $entityManager = $this->getDoctrine()->getManager();
        $product = $repository->find($_POST["idProduct"]);
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

        return new Response('Saved modif product with id '. $product->getIdProduct() . "<br><a href=\"/\">Back</a>");
    }


    /**
     * @Route("/api/searchByPrice", name="show_products_byPrice")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function searchByPrice(Request $request, ProductsRepository $repository):Response
    {
        $data = $request->getContent();
        $data = json_decode($data, true);
        $min = $data['min'];
        $max = $data['max'];
        // fonction personalisée
        $products = $repository->findByPrice($min, $max);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($products, 'json');
        return new Response($serializedEntity);
        
    }
    /**
     * @Route("/api/searchByBrand", name="show_products_byBrand")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function searchByBrand(Request $request, ProductsRepository $repository):Response
    {
        $data = $request->getContent();
        $data = json_decode($data, true);
        $brand = $data['brand'];
        // fonction personalisée
        $products = $repository->findBybrand($brand);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($products, 'json');
        return new Response($serializedEntity);
        
    }

    /**
     * @Route("/api/products/searchByPriceGreater", name="show_products_byPrice_greater")
     * @return Product[]
     */
    public function AllGreaterThanPrice(Request $request, ProductsRepository $repository): array
    {
        $price = $request->query->get('min');
        $products = $repository->findAllGreaterThanPrice($price);

        // returns an array of Product objects
        return $products;
    }

    /**
     * @Route("/api/products/searchByPriceLower", name="show_products_byPrice_lower")
     * @return Product[]
     */
    public function AllLowerThanPrice(Request $request, ProductsRepository $repository): array
    {
        $price = $request->query->get('max');
        $products = $repository->findAllLowerThanPrice($price);

        // returns an array of Product objects
        return $products;
    }

     /**
     * @Route("/api/searchByCategorie", name="products_searchByCategorie")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function ByCategorie(Request $request, ProductsRepository $repository): Response
    {
        $repoCat = $this->getDoctrine()->getRepository(Categories::class);
        $data = $request->getContent();
        $data = json_decode($data, true);
        $cat = $data['name'];
        $category = $repoCat->findOneBy(['catName'=> $cat]);
        $id= $category->getIdCat();
        $product = $repository->findBy(['idCat' => $id]);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($product, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/api/searchByName", name="products_searchByName")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function ByName(Request $request, ProductsRepository $repository): Response
    {
        
        $data = $request->getContent();
        $data = json_decode($data, true);
        $name= $data['name'];
        $product = $repository->findBy(['name' => $name]);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($product, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/api/productsBrand", name="productsBrand")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function AllBrand(ProductsRepository $repository):Response
    {
        $products = $repository->findAllBrand();
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($products, 'json');
        return new Response($serializedEntity);
    }

    /**
     * @Route("/api/productsName/{name}", name="productsName")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function productsName($name, ProductsRepository $repository):Response
    {
        $products = $repository->findProductsName($name);
        $serializedEntity = $this->container
        ->get('serializer')
        ->serialize($products, 'json');
        return new Response($serializedEntity);
    }


}

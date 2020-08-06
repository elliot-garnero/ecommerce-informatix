<?php

namespace App\Repository;

use App\Entity\Products;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Products|null find($id, $lockMode = null, $lockVersion = null)
 * @method Products|null findOneBy(array $criteria, array $orderBy = null)
 * @method Products[]    findAll()
 * @method Products[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Products::class);
    }

    /**
    * @return Products[] Returns an array of Products objects
    */
    
    public function findByPrice($min, $max)
    {  
        return $this->createQueryBuilder('p')
        ->orderBy('p.price', 'ASC')
        ->andWhere('p.price > :min')
        ->andWhere('p.price < :max')
        ->setParameter('min', $min)
        ->setParameter('max', $max)
        ->getQuery()
        ->getResult();
    }
      
    public function findByBrand($brand)
    {  
        return $this->createQueryBuilder('p')
        ->orderBy('p.brand', 'ASC')
        ->andWhere('p.brand LIKE :brand')
        ->setParameter('brand', $brand)
        ->getQuery()
        ->getResult();
    }

    public function findAllGreaterThanPrice($price): array
    {
        $qb = $this->createQueryBuilder('p')
              ->where('p.price > :price')
              ->setParameter('price', $price)
              ->orderBy('p.price', 'ASC');
        $query = $qb->getQuery();
      
        return $query->execute();
    }
  
    public function findAllLowerThanPrice($price): array
    {
        $qb = $this->createQueryBuilder('p')
              ->where('p.price < :price')
              ->setParameter('price', $price)
              ->orderBy('p.price', 'ASC');
      
        $query = $qb->getQuery();
      
        return $query->execute();
    }

    public function findAllBrand(): array
    {
        return $this->createQueryBuilder('p')
              ->groupBy('p.brand')
              ->getQuery()
              ->getResult();
    }

    public function findAllDesc(): array
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.addeddate', 'DESC')
            ->getQuery()
            ->getResult();
    }
    
    public function findAllWithout($id): array
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.addeddate', 'DESC')
            ->andWhere('p.idProduct != :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult();
    }

    public function findProductsName($name)
    {  
        return $this->createQueryBuilder('p')
        ->andWhere('p.name LIKE :name')
        ->setParameter('name', $name)
        ->getQuery()
        ->getResult();
    }
    
    public function findAllByTag($tag): array
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.addeddate', 'DESC')
            ->andWhere('p.name  LIKE :tag OR p.brand LIKE :tag OR p.description LIKE :tag OR p.characteristics LIKE :tag')
            ->setParameter('tag', '%'.$tag.'%')
            ->getQuery()
            ->getResult();
    }
}

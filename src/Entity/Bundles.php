<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Bundles
 *
 * @ORM\Table(name="bundles")
 * @ORM\Entity(repositoryClass="App\Repository\BundlesRepository")
 */
class Bundles
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="products", type="string", length=255, nullable=false)
     */
    private $products;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProducts(): ?string
    {
        return $this->products;
    }

    public function setProducts(string $products): self
    {
        $this->products = $products;

        return $this;
    }


}

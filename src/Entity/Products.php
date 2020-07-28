<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Products
 *
 * @ORM\Table(name="products", uniqueConstraints={@ORM\UniqueConstraint(name="name", columns={"name"})})
 * @ORM\Entity
 */
class Products
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_product", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idProduct;

    /**
     * @var int
     *
     * @ORM\Column(name="id_cat", type="integer", nullable=false)
     */
    private $idCat;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=false)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="brand", type="string", length=255, nullable=false)
     */
    private $brand;

    /**
     * @var int
     *
     * @ORM\Column(name="stock", type="integer", nullable=false)
     */
    private $stock;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="new", type="boolean", nullable=true, options={"default"="NULL"})
     */
    private $new = 'NULL';

    /**
     * @var bool|null
     *
     * @ORM\Column(name="promo", type="boolean", nullable=true, options={"default"="NULL"})
     */
    private $promo = 'NULL';

    /**
     * @var string|null
     *
     * @ORM\Column(name="picture1", type="string", length=255, nullable=true, options={"default"="NULL"})
     */
    private $picture1 = 'NULL';

    /**
     * @var string|null
     *
     * @ORM\Column(name="picture2", type="string", length=255, nullable=true, options={"default"="NULL"})
     */
    private $picture2 = 'NULL';

    /**
     * @var string|null
     *
     * @ORM\Column(name="picture3", type="string", length=255, nullable=true, options={"default"="NULL"})
     */
    private $picture3 = 'NULL';

    /**
     * @var string
     *
     * @ORM\Column(name="characteristics", type="string", length=1000, nullable=false)
     */
    private $characteristics;

    /**
     * @var string
     *
     * @ORM\Column(name="price", type="decimal", precision=10, scale=0, nullable=false)
     */
    private $price;

    /**
     * @var int
     *
     * @ORM\Column(name="weight", type="integer", nullable=false)
     */
    private $weight;

    /**
     * @var string|null
     *
     * @ORM\Column(name="color", type="string", length=255, nullable=true, options={"default"="NULL"})
     */
    private $color = 'NULL';

    /**
     * @var string|null
     *
     * @ORM\Column(name="size", type="string", length=255, nullable=true, options={"default"="NULL"})
     */
    private $size = 'NULL';

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="addedDate", type="date", nullable=false, options={"default"="current_timestamp()"})
     */
    private $addeddate = 'current_timestamp()';

    public function getIdProduct(): ?int
    {
        return $this->idProduct;
    }

    public function getIdCat(): ?int
    {
        return $this->idCat;
    }

    public function setIdCat(int $idCat): self
    {
        $this->idCat = $idCat;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getBrand(): ?string
    {
        return $this->brand;
    }

    public function setBrand(string $brand): self
    {
        $this->brand = $brand;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(int $stock): self
    {
        $this->stock = $stock;

        return $this;
    }

    public function getNew(): ?bool
    {
        return $this->new;
    }

    public function setNew(?bool $new): self
    {
        $this->new = $new;

        return $this;
    }

    public function getPromo(): ?bool
    {
        return $this->promo;
    }

    public function setPromo(?bool $promo): self
    {
        $this->promo = $promo;

        return $this;
    }

    public function getPicture1(): ?string
    {
        return $this->picture1;
    }

    public function setPicture1(?string $picture1): self
    {
        $this->picture1 = $picture1;

        return $this;
    }

    public function getPicture2(): ?string
    {
        return $this->picture2;
    }

    public function setPicture2(?string $picture2): self
    {
        $this->picture2 = $picture2;

        return $this;
    }

    public function getPicture3(): ?string
    {
        return $this->picture3;
    }

    public function setPicture3(?string $picture3): self
    {
        $this->picture3 = $picture3;

        return $this;
    }

    public function getCharacteristics(): ?string
    {
        return $this->characteristics;
    }

    public function setCharacteristics(string $characteristics): self
    {
        $this->characteristics = $characteristics;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getWeight(): ?int
    {
        return $this->weight;
    }

    public function setWeight(int $weight): self
    {
        $this->weight = $weight;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(?string $color): self
    {
        $this->color = $color;

        return $this;
    }

    public function getSize(): ?string
    {
        return $this->size;
    }

    public function setSize(?string $size): self
    {
        $this->size = $size;

        return $this;
    }

    public function getAddeddate(): ?\DateTimeInterface
    {
        return $this->addeddate;
    }

    public function setAddeddate(\DateTimeInterface $addeddate): self
    {
        $this->addeddate = $addeddate;

        return $this;
    }


}

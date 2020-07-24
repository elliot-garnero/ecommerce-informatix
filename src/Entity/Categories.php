<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Categories
 *
 * @ORM\Table(name="categories")
 * @ORM\Entity(repositoryClass="App\Repository\CategoriesRepository")
 */
class Categories
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_cat", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idCat;

    /**
     * @var string
     *
     * @ORM\Column(name="cat_name", type="string", length=255, nullable=false)
     */
    private $catName;

    /**
     * @var string|null
     *
     * @ORM\Column(name="cat_picture", type="blob", length=65535, nullable=true, options={"default"="NULL"})
     */
    private $catPicture = 'NULL';

    public function getIdCat(): ?int
    {
        return $this->idCat;
    }

    public function getCatName(): ?string
    {
        return $this->catName;
    }

    public function setCatName(string $catName): self
    {
        $this->catName = $catName;

        return $this;
    }

    public function getCatPicture()
    {
        return $this->catPicture;
    }

    public function setCatPicture($catPicture): self
    {
        $this->catPicture = $catPicture;

        return $this;
    }


}

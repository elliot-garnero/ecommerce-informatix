<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Test
 *
 * @ORM\Table(name="test")
 * @ORM\Entity
 */
class Test
{
    /**
     * @var int
     *
     * @ORM\Column(name="idJoin", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idjoin;

    /**
     * @var int
     *
     * @ORM\Column(name="idOrder", type="integer", nullable=false)
     */
    private $idorder;

    /**
     * @var int
     *
     * @ORM\Column(name="idProduct", type="integer", nullable=false)
     */
    private $idproduct;

    public function getIdjoin(): ?int
    {
        return $this->idjoin;
    }

    public function getIdorder(): ?int
    {
        return $this->idorder;
    }

    public function setIdorder(int $idorder): self
    {
        $this->idorder = $idorder;

        return $this;
    }

    public function getIdproduct(): ?int
    {
        return $this->idproduct;
    }

    public function setIdproduct(int $idproduct): self
    {
        $this->idproduct = $idproduct;

        return $this;
    }


}

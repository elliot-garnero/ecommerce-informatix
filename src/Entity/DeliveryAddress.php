<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * DeliveryAddress
 *
 * @ORM\Table(name="delivery_address")
 * @ORM\Entity
 */
class DeliveryAddress
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_deliv", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idDeliv;

    /**
     * @var int
     *
     * @ORM\Column(name="id_user", type="integer", nullable=false)
     */
    private $idUser;

    /**
     * @var string
     *
     * @ORM\Column(name="del_lastname", type="string", length=255, nullable=false)
     */
    private $delLastname;

    /**
     * @var string
     *
     * @ORM\Column(name="del_firstname", type="string", length=255, nullable=false)
     */
    private $delFirstname;

    /**
     * @var string
     *
     * @ORM\Column(name="del_address", type="string", length=255, nullable=false)
     */
    private $delAddress;

    /**
     * @var int
     *
     * @ORM\Column(name="del_cp", type="integer", nullable=false)
     */
    private $delCp;

    /**
     * @var string
     *
     * @ORM\Column(name="del_city", type="string", length=255, nullable=false)
     */
    private $delCity;

    /**
     * @var string
     *
     * @ORM\Column(name="del_countries", type="string", length=255, nullable=false)
     */
    private $delCountries;

    public function getIdDeliv(): ?int
    {
        return $this->idDeliv;
    }

    public function getIdUser(): ?int
    {
        return $this->idUser;
    }

    public function setIdUser(int $idUser): self
    {
        $this->idUser = $idUser;

        return $this;
    }

    public function getDelLastname(): ?string
    {
        return $this->delLastname;
    }

    public function setDelLastname(string $delLastname): self
    {
        $this->delLastname = $delLastname;

        return $this;
    }

    public function getDelFirstname(): ?string
    {
        return $this->delFirstname;
    }

    public function setDelFirstname(string $delFirstname): self
    {
        $this->delFirstname = $delFirstname;

        return $this;
    }

    public function getDelAddress(): ?string
    {
        return $this->delAddress;
    }

    public function setDelAddress(string $delAddress): self
    {
        $this->delAddress = $delAddress;

        return $this;
    }

    public function getDelCp(): ?int
    {
        return $this->delCp;
    }

    public function setDelCp(int $delCp): self
    {
        $this->delCp = $delCp;

        return $this;
    }

    public function getDelCity(): ?string
    {
        return $this->delCity;
    }

    public function setDelCity(string $delCity): self
    {
        $this->delCity = $delCity;

        return $this;
    }

    public function getDelCountries(): ?string
    {
        return $this->delCountries;
    }

    public function setDelCountries(string $delCountries): self
    {
        $this->delCountries = $delCountries;

        return $this;
    }


}

<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Payements
 *
 * @ORM\Table(name="payements", uniqueConstraints={@ORM\UniqueConstraint(name="pay_cb", columns={"pay_cb"})})
 * @ORM\Entity
 */
class Payements
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_pay", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idPay;

    /**
     * @var int
     *
     * @ORM\Column(name="id_user", type="integer", nullable=false)
     */
    private $idUser;

    /**
     * @var string
     *
     * @ORM\Column(name="pay_lastname", type="string", length=255, nullable=false)
     */
    private $payLastname;

    /**
     * @var string
     *
     * @ORM\Column(name="pay_firstname", type="string", length=255, nullable=false)
     */
    private $payFirstname;

    /**
     * @var string
     *
     * @ORM\Column(name="pay_email", type="string", length=255, nullable=false)
     */
    private $payEmail;

    /**
     * @var string
     *
     * @ORM\Column(name="pay_cb", type="string", length=16, nullable=false)
     */
    private $payCb;

    /**
     * @var int
     *
     * @ORM\Column(name="pay_cvv", type="integer", nullable=false)
     */
    private $payCvv;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="pay_expiration", type="date", nullable=false)
     */
    private $payExpiration;

    /**
     * @var bool
     *
     * @ORM\Column(name="active", type="integer", nullable=false)
     */
    private $active;

    public function getIdPay(): ?int
    {
        return $this->idPay;
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

    public function getPayLastname(): ?string
    {
        return $this->payLastname;
    }

    public function setPayLastname(string $payLastname): self
    {
        $this->payLastname = $payLastname;

        return $this;
    }

    public function getPayFirstname(): ?string
    {
        return $this->payFirstname;
    }

    public function setPayFirstname(string $payFirstname): self
    {
        $this->payFirstname = $payFirstname;

        return $this;
    }

    public function getPayEmail(): ?string
    {
        return $this->payEmail;
    }

    public function setPayEmail(string $payEmail): self
    {
        $this->payEmail = $payEmail;

        return $this;
    }

    public function getPayCb(): ?string
    {
        return $this->payCb;
    }

    public function setPayCb(string $payCb): self
    {
        $this->payCb = $payCb;

        return $this;
    }

    public function getPayCvv(): ?int
    {
        return $this->payCvv;
    }

    public function setPayCvv(int $payCvv): self
    {
        $this->payCvv = $payCvv;

        return $this;
    }

    public function getPayExpiration(): ?\DateTimeInterface
    {
        return $this->payExpiration;
    }

    public function setPayExpiration(\DateTimeInterface $payExpiration): self
    {
        $this->payExpiration = $payExpiration;

        return $this;
    }

    public function getActive(): ?int
    {
        return $this->active;
    }

    public function setActive(int $active): self
    {
        $this->active = $active;

        return $this;
    }


}

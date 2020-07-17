<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Orders
 *
 * @ORM\Table(name="orders", uniqueConstraints={@ORM\UniqueConstraint(name="ord_email", columns={"ord_email"})})
 * @ORM\Entity
 */
class Orders
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_order", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idOrder;

    /**
     * @var int
     *
     * @ORM\Column(name="id_user", type="integer", nullable=false)
     */
    private $idUser;

    /**
     * @var string
     *
     * @ORM\Column(name="ord_lastname", type="string", length=255, nullable=false)
     */
    private $ordLastname;

    /**
     * @var string
     *
     * @ORM\Column(name="ord_firstname", type="string", length=255, nullable=false)
     */
    private $ordFirstname;

    /**
     * @var string
     *
     * @ORM\Column(name="ord_email", type="string", length=255, nullable=false)
     */
    private $ordEmail;

    /**
     * @var string
     *
     * @ORM\Column(name="ord_address", type="string", length=255, nullable=false)
     */
    private $ordAddress;

    /**
     * @var int
     *
     * @ORM\Column(name="ord_total", type="integer", nullable=false)
     */
    private $ordTotal;

    /**
     * @var string
     *
     * @ORM\Column(name="ord_mode", type="string", length=255, nullable=false)
     */
    private $ordMode;

    /**
     * @var string
     *
     * @ORM\Column(name="ord_status", type="string", length=255, nullable=false)
     */
    private $ordStatus;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ord_date", type="date", nullable=false, options={"default"="current_timestamp()"})
     */
    private $ordDate = 'current_timestamp()';

    /**
     * @var bool|null
     *
     * @ORM\Column(name="packaging", type="boolean", nullable=true, options={"default"="NULL"})
     */
    private $packaging = 'NULL';

    public function getIdOrder(): ?int
    {
        return $this->idOrder;
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

    public function getOrdLastname(): ?string
    {
        return $this->ordLastname;
    }

    public function setOrdLastname(string $ordLastname): self
    {
        $this->ordLastname = $ordLastname;

        return $this;
    }

    public function getOrdFirstname(): ?string
    {
        return $this->ordFirstname;
    }

    public function setOrdFirstname(string $ordFirstname): self
    {
        $this->ordFirstname = $ordFirstname;

        return $this;
    }

    public function getOrdEmail(): ?string
    {
        return $this->ordEmail;
    }

    public function setOrdEmail(string $ordEmail): self
    {
        $this->ordEmail = $ordEmail;

        return $this;
    }

    public function getOrdAddress(): ?string
    {
        return $this->ordAddress;
    }

    public function setOrdAddress(string $ordAddress): self
    {
        $this->ordAddress = $ordAddress;

        return $this;
    }

    public function getOrdTotal(): ?int
    {
        return $this->ordTotal;
    }

    public function setOrdTotal(int $ordTotal): self
    {
        $this->ordTotal = $ordTotal;

        return $this;
    }

    public function getOrdMode(): ?string
    {
        return $this->ordMode;
    }

    public function setOrdMode(string $ordMode): self
    {
        $this->ordMode = $ordMode;

        return $this;
    }

    public function getOrdStatus(): ?string
    {
        return $this->ordStatus;
    }

    public function setOrdStatus(string $ordStatus): self
    {
        $this->ordStatus = $ordStatus;

        return $this;
    }

    public function getOrdDate(): ?\DateTimeInterface
    {
        return $this->ordDate;
    }

    public function setOrdDate(\DateTimeInterface $ordDate): self
    {
        $this->ordDate = $ordDate;

        return $this;
    }

    public function getPackaging(): ?bool
    {
        return $this->packaging;
    }

    public function setPackaging(?bool $packaging): self
    {
        $this->packaging = $packaging;

        return $this;
    }


}

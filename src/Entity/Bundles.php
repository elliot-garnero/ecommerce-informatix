<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Bundles
 *
 * @ORM\Table(name="bundles")
 * @ORM\Entity
 */
class Bundles
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_bundle", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idBundle;

    /**
     * @var string
     *
     * @ORM\Column(name="bund_name", type="string", length=255, nullable=false)
     */
    private $bundName;

    /**
     * @var string|null
     *
     * @ORM\Column(name="bund_description", type="string", length=1500, nullable=true, options={"default"="NULL"})
     */
    private $bundDescription = 'NULL';

    /**
     * @var string|null
     *
     * @ORM\Column(name="bund_picture1", type="string", length=255, nullable=true, options={"default"="NULL"})
     */
    private $bundPicture1 = 'NULL';

    /**
     * @var string|null
     *
     * @ORM\Column(name="bund_picture2", type="string", length=255, nullable=true, options={"default"="NULL"})
     */
    private $bundPicture2 = 'NULL';

    /**
     * @var string|null
     *
     * @ORM\Column(name="bund_picture3", type="string", length=255, nullable=true, options={"default"="NULL"})
     */
    private $bundPicture3 = 'NULL';

    /**
     * @var string|null
     *
     * @ORM\Column(name="bund_picture4", type="string", length=255, nullable=true, options={"default"="NULL"})
     */
    private $bundPicture4 = 'NULL';

    /**
     * @var string
     *
     * @ORM\Column(name="bund_products", type="string", length=255, nullable=false)
     */
    private $bundProducts;

    /**
     * @var int
     *
     * @ORM\Column(name="bund_stock", type="integer", nullable=false)
     */
    private $bundStock;

    /**
     * @var int
     *
     * @ORM\Column(name="bund_price", type="integer", nullable=false)
     */
    private $bundPrice;

    public function getIdBundle(): ?int
    {
        return $this->idBundle;
    }

    public function getBundName(): ?string
    {
        return $this->bundName;
    }

    public function setBundName(string $bundName): self
    {
        $this->bundName = $bundName;

        return $this;
    }

    public function getBundDescription(): ?string
    {
        return $this->bundDescription;
    }

    public function setBundDescription(?string $bundDescription): self
    {
        $this->bundDescription = $bundDescription;

        return $this;
    }

    public function getBundPicture1(): ?string
    {
        return $this->bundPicture1;
    }

    public function setBundPicture1(?string $bundPicture1): self
    {
        $this->bundPicture1 = $bundPicture1;

        return $this;
    }

    public function getBundPicture2(): ?string
    {
        return $this->bundPicture2;
    }

    public function setBundPicture2(?string $bundPicture2): self
    {
        $this->bundPicture2 = $bundPicture2;

        return $this;
    }

    public function getBundPicture3(): ?string
    {
        return $this->bundPicture3;
    }

    public function setBundPicture3(?string $bundPicture3): self
    {
        $this->bundPicture3 = $bundPicture3;

        return $this;
    }

    public function getBundPicture4(): ?string
    {
        return $this->bundPicture4;
    }

    public function setBundPicture4(?string $bundPicture4): self
    {
        $this->bundPicture4 = $bundPicture4;

        return $this;
    }

    public function getBundProducts(): ?string
    {
        return $this->bundProducts;
    }

    public function setBundProducts(string $bundProducts): self
    {
        $this->bundProducts = $bundProducts;

        return $this;
    }

    public function getBundStock(): ?int
    {
        return $this->bundStock;
    }

    public function setBundStock(int $bundStock): self
    {
        $this->bundStock = $bundStock;

        return $this;
    }

    public function getBundPrice(): ?int
    {
        return $this->bundPrice;
    }

    public function setBundPrice(int $bundPrice): self
    {
        $this->bundPrice = $bundPrice;

        return $this;
    }


}

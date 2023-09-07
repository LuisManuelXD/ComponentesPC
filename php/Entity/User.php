<?php
class User {
    private $id;
    private $firstName;
    private $lastName;
    private $numberPhone;
    private $email;
    private $password;
    private $dateCreation;

    public function __construct()
    {
        
    }

    public function getId(): ?int
    {
        return $this->id;
    }


    /**
     * Get the value of firstname
     */ 
    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    /**
     * Set the value of firstname
     *
     * @return  self
     */ 
    public function setFirstName($firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * Get the value of lastname
     */ 
    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    /**
     * Set the value of lastname
     *
     * @return  self
     */ 
    public function setLastName($lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get the value of numberPhone
     */ 
    public function getNumberPhone(): ?string
    {
        return $this->numberPhone;
    }

    /**
     * Set the value of numberPhone
     *
     * @return  self
     */ 
    public function setNumberPhone($numberPhone): self
    {
        $this->numberPhone = $numberPhone;

        return $this;
    }

    /**
     * Get the value of email
     */ 
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 
    public function setEmail($email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of password
     */ 
    public function getPassword(): ?string
    {
        return $this->password;
    }

    /**
     * Set the value of password
     *
     * @return  self
     */ 
    public function setPassword($password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get the value of dateCreation
     */ 
    public function getDateCreation():? \DateTimeInterface
    {
        return $this->dateCreation;
    }

    /**
     * Set the value of dateCreation
     *
     * @return  self
     */ 
    public function setDateCreation(\DateTimeInterface $dateCreation): self
    {
        $this->dateCreation = $dateCreation;

        return $this;
    }
}
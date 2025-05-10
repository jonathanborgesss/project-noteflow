<?php

namespace app\Model;

class User {
    private $idUser;
    private $fkImage;
    private $fkAccess;
    private $name;
    private $email;
    private $password;

    // Getters
    public function getId() {
        return $this->idUser;
    }

    public function getFkImage() {
        return $this->fkImage;
    }

    public function getFkAccess() {
        return $this->fkAccess;
    }

    public function getName() {
        return $this->name;
    }

    public function getEmail() {
        return $this->email;
    }

    public function getPassword() {
        return $this->password;
    }

    // Setters
    public function setId($idUser) {
        $this->idUser = $idUser;
    }

    public function setFkImage($fkImage) {
        $this->fkImage = $fkImage;
    }

    public function setAccess($fkAccess) {
        $this->fkAccess = $fkAccess;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function setEmail($email) {
        $this->email = $email;
    }

    public function setPassword($password) {
        $this->password = $password;
    }
}


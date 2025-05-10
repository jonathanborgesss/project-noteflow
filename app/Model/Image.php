<?php

namespace app\Model;
class Image {
    private $idImage;
    private $name;
    private $type;
    private $size;

    function getId() {
        return $this->idImage;
    }

    function getName() {
        return $this->name;
    }

    function getType() {
        return $this->type;
    }

    function getSize() {
        return $this->size;
    }

    function setId($id) {
        $this->idImage = $id;
    }

    function setName($name) {
        $this->name = $name;
    }

    function setType($type) {
        $this->type = $type;
    }

    function setSize($size) {
        $this->size = $size;
    }
}

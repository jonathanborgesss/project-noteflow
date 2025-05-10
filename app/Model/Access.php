<?php

namespace app\Model;
    class Access{  
        private $idAccess;
        private $name;
        function getId() {
            return $this->idAccess;
        }
    
        function getName() {
            return $this->name;
        }
    
        function setId($id) {
            $this->idAccess = $id;
        }
    
        function setName($name) {
            $this->name = $name;
        }

}
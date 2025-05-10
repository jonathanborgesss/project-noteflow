<?php

namespace app\Src;

    class Session{
        private $login = null;
        private $timeSession = 1200;
        private $timeCanary = 300; 
    
        public function __construct(){
            if(session_id() == ''){
                ini_set("session.save_handler","files");
                ini_set("session.use_cookies",1);
                ini_set("session.use_only_cookies",1);
    
                session_start();
            }
    
            if(!$_SESSION){
                $_SESSION['login'] = false;
                $_SESSION['name'] = null;
                $_SESSION['email'] = null;
                $_SESSION['permission'] = 0;
            }
        }
    
        //proteção contra roubo de sessão
        public function setSessionCanary($par=null){
    
        }
    
        public function verifyIfSession(){
            if(!isset($_SESSION)){
                session_start();
            }
        }
    
        public function setSession($user){
            $_SESSION['user'] = $user;
            $_SESSION['login'] = true;
            $_SESSION['name'] = $user->getName();
            $_SESSION['email'] = $user->getEmail();
            $_SESSION['access'] = $user->getAccess();
        }

        public function checkUser($user){
            if(!isset($user)){
                header("Location: /");
            }
        }
    
        public function verifyInsideSession($required){
            if(!isset($_SESSION)){
                echo "Sessão inválida";
                die();
            }
            if((!isset($_SESSION['login'])) or $_SESSION['login'] != true ){
                echo"USUÁRIO NÃO LOGADO";
                die();
            } elseif(isset($_SESSION['access']) && $_SESSION['access'] < $required){
                echo "Nível de permissão insuficiente";
                die();
            }
        }
    
        public function destructSessions(){
            foreach(array_keys($_SESSION) as $key){
                unset($_SESSION[$key]);
            }
    
            session_destroy();
        }
    
    }
<?php
namespace app\Controller;

use app\DAO\ConnectDB;
use app\DAO\ImageDAO;
use app\DAO\PasswordDAO;
use app\Model\Image;
use app\Src\Session;
use SessionHandler;

$server = $_SERVER['DOCUMENT_ROOT'];
$autoloadFolder = getenv('folderName');
require_once $server . $autoloadFolder;

use app\Model\User;
use app\DAO\UserDAO as UserDAO;
use app\Model\Imagem;

$user = new User();
$userdao = new UserDAO();
$passwordDao = new PasswordDAO();
$session = new SessionHandler();

$d = filter_input_array(INPUT_POST);

class ControllerUser
{
     public function SignIn($name, $emailD, $password)
     {
          $access = 1;
          $user = new User();
          $userdao = new UserDAO();
          $passwordDao = new PasswordDAO();
          $session = new Session();
          $user->setName($name);
          $user->setEmail($emailD);
          $hashedPassword = $passwordDao->hashPassword($password);
          $user->setPassword($hashedPassword);
          $user->setAccess($access);
          $email = $user->getEmail();
          $query = "SELECT email FROM User where email = '$email'";
          $select = ConnectDB::getConnection()->query($query);
          if (!$select->rowCount()) {

               $userdao->insertUser($user);
               $session->setSession($user);

          }

     }
     public function SignUp($email, $password)
     {
          $user = new User();
          $userdao = new UserDAO();
          $passwordDao = new PasswordDAO();
          $session = new Session();
          $user = $userdao->getUserByEmail($email);
          if (!$user) {
               setcookie("NoEmail", $email, time() + 60 * 60, "/");

          } else {
               if ($passwordDao->matchPassword($password, $user->getPassword())) {
                    $session->setSession($user);

               } else {
                    setcookie("WrongPassword", $password, time() + 60 * 60, "/");

               }
          }
     }
     public function Update($pkUser, $fkAccess, $name, $email, $password)
     {
          $imagemDao = new ImageDAO();
          $User = new User();
          $UserDao = new UserDAO();
          $User->setId($pkUser);
          $User = $UserDao->getUserById($User->getId());
          $User->setEmail($email ? $email : $User->getEmail());
          $User->setName($name);
          $User->setAccess($fkAccess ? $fkAccess : $User->getFkAccess());
          $User->setPassword($password ? $password : $User->getPassword());
          if (isset($_FILES['imagem'])) {
               $file = $_FILES['imagem']['tmp_name'];
               $tamanho = $_FILES['imagem']['size'];
               $tipo = $_FILES['imagem']['type'];
               $filename = $_FILES['imagem']['name'];

               if ($file) {
                    $fp = fopen($file, "rb");
                    $conteudo = fread($fp, $tamanho);
                    $conteudo = addslashes($conteudo);
                    fclose($fp);
                    $imagem = new Image();

                    $imagem->setname($filename);
                    $imagem->setSize($tamanho);
                    $imagem->setType($tipo);

                    $imagemDao->insertImagem($imagem);
                    $imagemModel = $imagemDao->getImageById(ConnectDB::getConnection()->lastInsertId());
                    $User->setFkImage($imagemModel);

                    $target_dir = __DIR__ . '/../../assets/img/perfis/';
                    $target_file = $target_dir . basename($filename);
                    move_uploaded_file($file, $target_file);
               } else {
                    $imagemModel = $imagemDao->getImageById(1);
                    $User->setFkImage($imagemModel);
               }
          } else {
               $imagemModel = $imagemDao->getImageById(1);
               $User->setFkImage($imagemModel);
          }
          $UserDao->updateUser($User);
     }
}


$controllerUser = new ControllerUser();

if ($_SERVER['REQUEST_METHOD'] == "POST") {
     $mode = $_POST['mode'] ?? null;
     $name = $_POST['name'] ?? null;
     $email = $_POST['email'] ?? null;
     $password = $_POST['password'] ?? null;
     $mode = $_POST['mode'] ?? null;
     switch ($mode) {
          case "signin":
               $controllerUser->SignIn($_POST['name'], $_POST['email'], $_POST['password']);
              
               break;

          case "signup":
               $controllerUser->SignUp($_POST['email'], $_POST['password']);
              
               break;
          case "update":
               $pkUser = $d['pkUser'];
               $name = isset($d['name']) ? $d['name'] : null;
               $email = isset($d['email']) ? $d['email'] : null;
               $password = isset($d['password']) ? $d['password'] : null;
               $fkAccess = isset($d['access']) ? $d['access'] : null;
               $controllerUser->Update($pkUser, $fkAccess, $name, $email, $password);
              
               break;

          default:
               
     }
}

exit();
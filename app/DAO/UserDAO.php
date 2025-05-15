<?php
namespace app\DAO;
use app\Model\User;
use Exception;
use PDO;
class UserDAO
{
     public function insertUser(User $user)
     {
          try {
               $query = "INSERT INTO user(name,email, password,fkAccess, fkImage) VALUES (:name,:email,:password,:fkAccess, :fkImage)";
               $sql = ConnectDB::getConnection()->prepare($query);
               $sql->bindValue(":name", $user->getName());
               $sql->bindValue(":email", $user->getEmail());
               $sql->bindValue(":password", $user->getPassword());
               $sql->bindValue(":fkAccess", $user->getFkAccess());
               $sql->bindValue(":fkImage", $user->getFkImage() ?: 1);
               return $sql->execute();
          } catch (Exception $e) {
               DAOManager::resetAutoIncrement("user");
          }
     }
     public function getUserById($pk)
     {
          try {
               $query = "SELECT * FROM user WHERE idUser = '$pk'";
               $select = ConnectDB::getConnection()->prepare($query);
               $select->setFetchMode(PDO::FETCH_CLASS, 'app\Model\User');
               $select->execute();
               return $select->fetch();
          } catch (Exception $e) {
          }
     }
     public function getUserByEmail($em)
     {
          try {
               $query = "SELECT * FROM user WHERE email = '$em'";
               $sql = ConnectDB::getConnection()->prepare($query);
               $sql->setFetchMode(PDO::FETCH_CLASS, 'app\Model\User');
               $sql->execute();
               return $sql->fetch();
          } catch (Exception $e) {
          }
     }
     public function updateUser(User $user){
          try {
               $query = "UPDATE user SET name = :name, email = :email, password = :password, fkAccess = :fkAccess, fkImage = :fkImage WHERE idUser = :id";
               $sql = ConnectDB::getConnection()->prepare($query);
               $sql->bindValue(":id", $user->getId(), PDO::PARAM_INT);
               $sql->bindValue(":fkAccess", $user->getFkAccess(), PDO::PARAM_INT);
               $sql->bindValue(":fkImage", $user->getFkImage()->getId() ?: 1, PDO::PARAM_INT);
               $sql->bindValue(":name", $user->getName());
               $sql->bindValue(":email", $user->getEmail());
               $sql->bindValue(":password", $user->getPassword());

               return $sql->execute();
          } catch (Exception $e) {
              
          }
     }
}
?>
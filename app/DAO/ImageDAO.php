<?php
namespace app\DAO;
use app\Model\Image;
use app\Model\Imagem;
use ConnectDB;
use Exception;
use PDO;
class ImageDAO{
    public function insertImagem(Image $imagem){
         try {
              $query = "INSERT INTO images(name,type,size) VALUES (:name,:type,:size)";
              $sql = ConnectDB::getConexao()->prepare($query);
              $sql->bindValue(":name",$imagem->getName());
              $sql->bindValue(":type",$imagem->getType());
              $sql->bindValue(":size",$imagem->getSize());
              
              return $sql->execute();
         } catch (Exception $e){
              print("Erro ao inserir imagem <hr>" . $e . "<hr>");
              $sql = ConnectDB::getConexao()->prepare("ALTER TABLE images SET AUTO INCREMENT = 0;");
         }
    }

    public function getImageById($id)
    {
         try {
              $query = "SELECT * FROM images WHERE idImage = '$id'";
              $select = ConnectDB::getConexao()->prepare($query);
              $select->setFetchMode(PDO::FETCH_CLASS, 'app\Model\Image');
              $select->execute();
              return $select->fetch();

         } catch (Exception $e) {
              print ("" . $e . "");
         }
    }
    public function deleteImageById($pk){
     try {
          if($pk > 1){
               $query = "DELETE FROM images WHERE idImage = '$pk'";
               $select = ConnectDB::getConexao()->prepare($query);
               $select->execute();
               DAOManager::resetAutoIncrement("images");
          }
     } catch (Exception $e){
          print ("" . $e . "");
     }
    }
}

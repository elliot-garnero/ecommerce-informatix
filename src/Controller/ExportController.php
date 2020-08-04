<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\StreamedResponse;
use Doctrine\DBAL\Connection;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ExportController extends AbstractController
{
    private $connection;

    public function __construct()
    {
            $connection = new \PDO('mysql:host=localhost;port=3306;dbname=e-commerce;charset=UTF8','root','');
            $this->connection = $connection;
        
    }
    
    /**
     * @Route("/api/listUsers/download", name="dl_listUsers")
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public function generateCsvAction()
    {
        $response = new StreamedResponse();
        $response->setCallback(function() {
            $handle = fopen('php://output', 'w+');
            fputs($handle, $bom =( chr(0xEF) . chr(0xBB) . chr(0xBF) ));
            $users = $this->connection->query("SELECT id,username,firstname,lastname,email,discount FROM users");
            fputcsv($handle, array('################################# CLIENTS #######################################'));
            //Add the header of the CSV file
            fputcsv($handle, array('ID', 'PSEUDO', 'PRENOM', 'NOM', 'EMAIL', 'REMISE'),';');
            fputcsv(
                $handle, // The file pointer
                array('', ''), // The fields
                ';' // The delimiter
            );
            $id_array=[];
            //Add the data queried from database
            while($row = $users->fetch()) {

                
                fputcsv(
                    $handle, // The file pointer
                    array($row['id'], $row['username'], $row['firstname'], $row['lastname'], $row['email'], $row['discount']), // The fields
                    ';' // The delimiter
                );
                
                array_push($id_array, $row['id']);
            }
            fputcsv(
                $handle, // The file pointer
                array('################################### COMMANDES ################################'), // The fields
                ';' // The delimiter
            );
            $prod_array =[];
            $order_array = [];
            $ord_total =[];
            fputcsv($handle, array('PRENOM CLIENT','NOM CLIENT','ARTICLE', 'MARQUE', 'CATEGORIE', 'PRIX', 'PRIX TOTAL'),';');
            foreach ($id_array as $key => $value) {
                $orders = $this->connection->query("SELECT id_order, ord_products, ord_total FROM orders WHERE id_user=".$value);
                while($row = $orders->fetch(\PDO::FETCH_ASSOC)) {
                    $prod_array= explode(',',$row['ord_products']);
                $order_array[$row['id_order']] = $prod_array;
                $ord_total[$row['id_order']]= $row['ord_total'];
            }
        }
        fputcsv(
            $handle, // The file pointer
            array('', ''), // The fields
            ';' // The delimiter
        );
           $keys =[];
            foreach ($order_array as $key => $value) {
                $user = $this->connection->query("SELECT firstname,lastname FROM users WHERE id=".$key);
                
                while($row = $user->fetch(\PDO::FETCH_ASSOC)) {
                    fputcsv(
                        $handle, // The file pointer
                        array('', ''), // The fields
                        ';' // The delimiter
                    );
                    fputcsv(
                        $handle, // The file pointer
                        array($row['firstname'], $row['lastname']), // The fields
                        ';' // The delimiter
                    );
                }
                 
                foreach ($value as  $val) {
                    $product = $this->connection->query("SELECT name, brand, id_cat, price FROM products WHERE id_product=".$val);
                    
                    while($row = $product->fetch(\PDO::FETCH_ASSOC)) {
                        
                        
                        switch ($row['id_cat']) {
                            case 1:
                                $row['id_cat']='Processeur';
                                break;
                            
                            case 2:
                                $row['id_cat']='Carte mère';
                                break;
                        
                            case 3:
                                $row['id_cat']='Carte Vidéo';
                                break;
                            
                            case 4:
                                # code...
                                break;
                                
                            default:
                                # code...
                                break;
                        }
                        
                        fputcsv(
                            $handle, // The file pointer
                            array('','',$row['name'], $row['brand'], $row['id_cat'], $row['price']), // The fields
                            ';' // The delimiter
                        );
                        
                    }
                    
                }
                fputcsv(
                    $handle, // The file pointer
                    array('','','','','','', $ord_total[$key]), // The fields
                    ';' // The delimiter
                );
            }
            
        
            $product = $this->connection->query("SELECT id_product,id_cat,name,brand,price FROM product INNER JOIN orders ON ord_products.orders = ");
    
            fclose($handle);
        });
    
        $response->setStatusCode(200);
        $response->headers->set('Content-Type', 'text/csv; charset=utf-8');
        $response->headers->set('Content-Disposition', 'attachment; filename="export.csv"');
        
        return $response;
    }
}
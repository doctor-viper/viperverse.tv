<?php 
    header('Content-Type: application/json; charset=utf-8');
    require_once($_SERVER['DOCUMENT_ROOT'].'/inc/functions.php'); 


    echo json_encode(get_random_packages());


?>

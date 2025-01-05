<?php 
    // Set Content Type ( JSON )
    header('Content-Type: application/json; charset=utf-8');
    // Include the functions file
    require_once($_SERVER['DOCUMENT_ROOT'].'/inc/functions.php');
    // Echo the returned contents of the function
    echo json_encode(get_random_packages());
?>
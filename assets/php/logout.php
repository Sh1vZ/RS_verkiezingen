<?php
if(isset($_GET['action']) == "logout" ){

session_start();
session_unset();
session_destroy();
// header("Location:../../index.php");
// exit();
echo "success";
}
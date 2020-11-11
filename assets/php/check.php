<?php
require 'conn.php';
if(!isset($_SERVER['HTTP_REFERER'])){
    header('location:error.html');
    exit();
}
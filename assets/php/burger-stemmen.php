<?php
require "conn.php";
session_start();
if (isset($_POST['stemmen'])) {
    $kandidaat = $_POST['kandidaat'];
    $idb = $_POST['idb'];
    $sql  = "UPDATE kandidaten SET aantalstemmen=aantalstemmen+1 WHERE ID_kandidaten=$kandidaat";
    $res = mysqli_query($conn, $sql);
    if ($res) {
        $sql1  = "UPDATE burgers SET gestemd='Ja' WHERE ID_nummer='$idb'";
        $res1 = mysqli_query($conn, $sql1);
        if ($res1) {
            $_SESSION["gestemd"] = 'Ja';
            echo 'success';
        }
    } else {
        echo 'sqlError';
    }
}

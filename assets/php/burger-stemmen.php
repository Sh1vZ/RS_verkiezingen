<?php
require "conn.php";
session_start();
if (isset($_POST['stemmen'])) {
    $kandidaat = $_POST['kandidaat'];
$partij1 = $_POST['partij1'];
$districtID = $_POST['districtID'];
    $idb = $_POST['idb'];
    $sql  = "UPDATE kandidaten, partij, district SET kandidaten.aantalstemmen=kandidaten.aantalstemmen+1, partij.aantalstemmen = partij.aantalstemmen+1, district.aantalstemmen = district.aantalstemmen+1  WHERE kandidaten.ID_kandidaten=$kandidaat AND partij.ID_partij=$partij1 AND district.ID_district=$districtID";
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

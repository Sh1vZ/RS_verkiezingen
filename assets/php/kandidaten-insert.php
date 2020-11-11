<?php
require "conn.php";
$valid_extensions = array('jpeg', 'jpg', 'png'); // valid extensions
$path = '../uploads/'; // upload directory
if (!empty($_POST['voornaam']) || !empty($_POST['achternaam']) || $_FILES['image'] || !empty($_POST['partij']) || !empty($_POST['district'])) {
    $img = $_FILES['image']['name'];
    $tmp = $_FILES['image']['tmp_name'];
    // get uploaded file's extension
    $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
    // can upload same image using rand function
    $final_image = rand(1000, 1000000) . $img;
    // check's valid format
    if (in_array($ext, $valid_extensions)) {
        $path = $path . strtolower($final_image);
        if (move_uploaded_file($tmp, $path)) {
            $name = $_POST['voornaam'];
            $anaam = $_POST['achternaam'];
            $partij = $_POST['partij'];
            $district = $_POST['district'];
            if (preg_match('~[0-9]~',$name) || preg_match('~[0-9]~', $anaam)) {
                echo 'errorPartij';
            } elseif (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $name) || preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $anaam)) {
                echo "errorPartij";
            }else{
            $sql  = "INSERT INTO kandidaten (achternaam,voornaam,img,ID_partij,ID_district) values ('$anaam','$name','$final_image',$partij,$district)";
            $res=mysqli_query($conn,$sql);
            if($res){
                echo'success';
            }
        }
        }
    } else {
        echo 'errorEmpty';
    }
}else {
    echo 'errorEmpty';
} 
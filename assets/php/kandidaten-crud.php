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
            $sql  = "INSERT INTO kandidaten (achternaam,voornaam,img,ID_partij,ID_district) values ('$anaam','$name','$final_image',$partij,$district)";
            $res=mysqli_query($conn,$sql);
            if($res){
                echo'success';
            }
           
        }
    } else {
        echo 'invalid';
    }
}












// if (isset($_POST['insertkandidaat'])) {
//     $achternaam = $_POST['achternaam'];
//     $voornaam = $_POST['voornaam'];
//     $partij = $_POST['partij'];
//     $district = $_POST['district'];
//     $img = $_POST['img'];
//     $data = file_get_contents($_FILES['file']['tmp_name']);

//         if ( $_FILES['file']['error'] > 0 ){
//             echo 'Error: ' . $_FILES['file']['error'] . '<br>';
//         }
//         else {
//             if(move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']))
//             {
//                 echo "File Uploaded Successfully";
//             }
//         }
//     //     $sql  = "INSERT INTO kandidaten (achternaam,voornaam,img,ID_partij,ID_district) values (?,?,?,?,?)";
//     //   $stmt = mysqli_stmt_init($conn);
//     //   if (!mysqli_stmt_prepare($stmt, $sql)) {
//     //     echo 'sqlError';
//     //   } else {
//     //     mysqli_stmt_bind_param($stmt, "sssii", $achternaam,$voornaam,$data,$partij,$district);
//     //     mysqli_stmt_execute($stmt);
//     //     echo 'success';
       
//     //   }
//     //   mysqli_stmt_close($stmt);
//     //   mysqli_close($conn);
    
// }

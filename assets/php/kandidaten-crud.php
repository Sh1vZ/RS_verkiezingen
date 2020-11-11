<?php
require "conn.php";




if (isset($_POST['delete'])) {
    $id = $_POST['id'];
    $sql    = "SELECT * FROM kandidaten WHERE ID_kandidaten=$id";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $img = $row['img'];
            unlink("../uploads/" . $img);
            $sql1 = "DELETE FROM kandidaten WHERE ID_kandidaten=$id";
            $res=mysqli_query($conn,$sql1);
            echo 'success';
        }
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

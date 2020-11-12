<?php
require "conn.php";
$valid_extensions = array('jpeg', 'jpg', 'png'); // valid extensions
$path = '../uploads/'; // upload directory
if (!empty($_POST['voornaam-edit']) || !empty($_POST['achternaam-edit']) || !empty($_POST['partij-edit']) || !empty($_POST['district-edit'])) {
    $img = $_FILES['image-edit']['name'];
    $tmp = $_FILES['image-edit']['tmp_name'];
    $name = $_POST['voornaam-edit'];
    $anaam = $_POST['achternaam-edit'];
    $partij = $_POST['partij-edit'];
    $district = $_POST['district-edit'];
    $id = $_POST['id'];
    $imge = $_POST['imge'];
    // get uploaded file's extension
    $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
    // can upload same image using rand function
    $final_image = rand(1000, 1000000) . $img;
    // check's valid format
    if (empty($img)) {
        // echo 'errorImage';
        if (preg_match('~[0-9]~', $name) || preg_match('~[0-9]~', $anaam)) {
            echo 'errorPartij';
        } elseif (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $name) || preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $anaam)) {
            echo "errorPartij";
        } else {
            $sql  = "UPDATE kandidaten SET achternaam='$anaam',voornaam='$name',ID_partij=$partij,ID_district=$district WHERE ID_kandidaten=$id";
            $res = mysqli_query($conn, $sql);
            if ($res) {
                echo 'success';
            }
        }
    } else {
        if (in_array($ext, $valid_extensions)) {
            $path = $path . strtolower($final_image);
            if (move_uploaded_file($tmp, $path)) {
                if (preg_match('~[0-9]~', $name) || preg_match('~[0-9]~', $anaam)) {
                    echo 'errorPartij';
                } elseif (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $name) || preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $anaam)) {
                    echo "errorPartij";
                } else {
                    $sql  = "UPDATE kandidaten SET achternaam='$anaam',voornaam='$name',img='$final_image',ID_partij=$partij,ID_district=$district WHERE ID_kandidaten=$id";
                    $res = mysqli_query($conn, $sql);
                    if ($res) {
                        unlink("../uploads/" . $imge);
                        echo 'success';
                    }
                }
            }
        }
    }
}

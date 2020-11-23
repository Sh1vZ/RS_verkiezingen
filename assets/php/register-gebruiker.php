<?php
if (isset($_POST['register'])) {
    require "conn.php";
    $id = $_POST['id'];
    $date = $_POST['date'];
    $district = $_POST['district'];
    $pwd = $_POST['pwd'];
    $idc = countDigits($id);
    $idlength = strlen($id);
    $age = floor((time() - strtotime($date)) / 31556926);
    if (empty($id) || empty($date) || empty($district) || empty($pwd)) {
        echo "errorEmpty";
    } elseif ($idc < 6 || $idc > 6) {
        echo "idError";
    } elseif ($idlength < 8 || $idlength > 8) {
        echo "idError";
    } elseif (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $id)) {
        echo "idError";
    } elseif ($age < 18) {
        echo "ageError";
    } else {
        $sql = "SELECT ID_nummer FROM burgers WHERE ID_nummer= ?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            echo "sqlError";
        } else {
            mysqli_stmt_bind_param($stmt, "s", $id);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            $resultcheck = mysqli_stmt_num_rows($stmt);
            if ($resultcheck > 0) {
                echo "exist";
            } else {
                $sql = "INSERT INTO burgers(ID_nummer, geboortedatum, ID_district,pwd) VALUES(?,?,?,?)";
                $stmt = mysqli_stmt_init($conn);
                if (!mysqli_stmt_prepare($stmt, $sql)) {
                    echo "sqlError";
                } else {
                    $hashedpw = password_hash($pwd, PASSWORD_DEFAULT);
                    mysqli_stmt_bind_param($stmt, "ssis", $id, $date, $district, $hashedpw);
                    mysqli_stmt_execute($stmt);
                    echo "success";
                }
            }
        }
    }
} else {
    echo "FatalError";
}

function countDigits($id)
{
    return count(preg_grep('~^[0-9]$~', str_split($id)));
}

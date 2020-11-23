<?php
include "conn.php";
$usernaam = $_POST['usernaam'];
$pwd = $_POST['pwd'];
$rol = $_POST['rol'];
if (empty($usernaam) || empty($pwd)) {
    echo 'errorEmpty';
} elseif (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $usernaam)) {
    echo 'errorInput';
} else {
    $sql = "SELECT usernaam FROM gebruikers WHERE usernaam= ?";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        echo "sqlError";
    } else {
        mysqli_stmt_bind_param($stmt, "s", $usernaam);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);
        $resultcheck = mysqli_stmt_num_rows($stmt);
        if ($resultcheck > 0) {
            echo "exist";
        } else {
            $sql = "INSERT INTO gebruikers(usernaam,password,rol) VALUES(?,?,?)";
            $stmt = mysqli_stmt_init($conn);
            if (!mysqli_stmt_prepare($stmt, $sql)) {
                echo "sqlError";
            } else {
                mysqli_stmt_bind_param($stmt, "sss", $usernaam, $pwd, $rol);
                mysqli_stmt_execute($stmt);
                echo "success";
            }
        }
    }
}



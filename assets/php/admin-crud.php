<?php
include 'conn.php';
if (isset($_POST['delete'])) {
    $id = $_POST['id'];
    $sql = "DELETE FROM gebruikers WHERE ID=$id";
    mysqli_query($conn, $sql);
    echo 'success';
}

if (isset($_POST['updateAdmin'])) {
    $id = $_POST['id'];
    $usernaam = $_POST['usernaam'];
    $pwd = $_POST['pwd'];
    $rol = $_POST['rol'];
    if (empty($usernaam) || empty($pwd)) {
        echo 'errorEmpty';
    } elseif (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $usernaam)) {
        echo 'errorInput';
    } else {
        $sql = "UPDATE gebruikers SET usernaam=?,password=?,rol=? WHERE ID=?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            echo "sqlError";
        } else {
            mysqli_stmt_bind_param($stmt, "sssi", $usernaam, $pwd, $rol, $id);
            mysqli_stmt_execute($stmt);
            if (mysqli_errno($conn) == 1062) {
                echo "exist";
            } else {
                echo "success";
            }
        }
    }
}

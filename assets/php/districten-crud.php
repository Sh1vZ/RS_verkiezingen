<?php
require "conn.php";
if (isset($_POST['insertdistrict'])) {
    $district = $_POST['district'];
    if (empty($district)) {
        echo 'errorEmpty';
    } elseif (preg_match('~[0-9]~', $district)) {
        echo 'errorDistrict';
    }
     elseif (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $district)) {
        echo 'errorDistrict';
    }
     else {
        $sql = "SELECT districtnaam FROM district WHERE districtnaam= ?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            echo "sqlError";
        } else {
            mysqli_stmt_bind_param($stmt, "s", $district);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            $resultcheck = mysqli_stmt_num_rows($stmt);
            if ($resultcheck > 0) {
                echo "exist";
            } else {
                $sql = "INSERT INTO district(districtnaam) VALUES(?)";
                $stmt = mysqli_stmt_init($conn);
                if (!mysqli_stmt_prepare($stmt, $sql)) {
                    echo "sqlError";
                } else {
                    mysqli_stmt_bind_param($stmt, "s", $district);
                    mysqli_stmt_execute($stmt);
                    echo "success";
                }
            }
        }
    }
}

if (isset($_POST['delete'])) {
    $id = $_POST['id'];
    $sql = "DELETE FROM district WHERE ID_district=$id";
    mysqli_query($conn, $sql);
    echo 'success';
}



if (isset($_POST['updateDistrict'])) {
    $district = $_POST['district'];
    $id = $_POST['id'];
    if (empty($district)) {
        echo 'errorEmpty';
    } elseif (preg_match('~[0-9]~', $district)||preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $district)) {
        echo 'errorDistrict';
    } else {
        $sql = "SELECT districtnaam FROM district WHERE districtnaam= ?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            echo "sqlError";
        } else {
            mysqli_stmt_bind_param($stmt, "s", $district);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            $resultcheck = mysqli_stmt_num_rows($stmt);
            if ($resultcheck > 0) {
                echo "exist";
            } else {
                $sql  = "UPDATE district SET districtnaam=? WHERE ID_district=?";
                $stmt = mysqli_stmt_init($conn);
                if (!mysqli_stmt_prepare($stmt, $sql)) {
                    echo "sqlError";
                } else {
                    mysqli_stmt_bind_param($stmt, "si", $district, $id);
                    mysqli_stmt_execute($stmt);
                    echo "success";
                }
            }
            mysqli_stmt_close($stmt);
            mysqli_close($conn);
        }
    }
}

<?php
require "conn.php";
if (isset($_POST['insertpartij'])) {
    $partij = $_POST['partij'];
    $afkorting = $_POST['afkorting'];
    if (empty($partij) || empty($afkorting)) {
        echo 'errorEmpty';
    } elseif (preg_match('~[0-9]~', $partij) || preg_match('~[0-9]~', $afkorting)) {
        echo 'errorPartij';
    } else if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $partij) || preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $afkorting)) {
        echo "errorPartij";
    } else {
        $sql = "SELECT * FROM partij";
        $res = mysqli_query($conn, $sql);
        if (mysqli_num_rows($res) <= 0) {
            $sql = "INSERT INTO partij(Partijnaam,Partijafkorting) VALUES(?,?)";
            $stmt = mysqli_stmt_init($conn);
            if (!mysqli_stmt_prepare($stmt, $sql)) {
                echo "sqlError";
            } else {
                mysqli_stmt_bind_param($stmt, "ss", $partij, $afkorting);
                mysqli_stmt_execute($stmt);
                echo "success";
            }
        } else {
            while ($row = mysqli_fetch_assoc($res)) {
                $partijn = $row['Partijnaam'];
                $afk = $row["Partijafkorting"];
            }
            if ($partij == $partijn || $afkorting == $afk) {
                echo 'exist';
            } else {
                $sql = "INSERT INTO partij(Partijnaam,Partijafkorting) VALUES(?,?)";
                $stmt = mysqli_stmt_init($conn);
                if (!mysqli_stmt_prepare($stmt, $sql)) {
                    echo "sqlError";
                } else {
                    mysqli_stmt_bind_param($stmt, "ss", $partij, $afkorting);
                    mysqli_stmt_execute($stmt);
                    echo "success";
                }
            }
        }
    }
}
if (isset($_POST['delete'])) {
    $id = $_POST['id'];
    $sql = "DELETE FROM partij WHERE ID_partij=$id";
    mysqli_query($conn, $sql);
    echo 'success';
}



if (isset($_POST['updatePartij'])) {
    $partij = $_POST['partij'];
    $afkorting = $_POST['afkorting'];
    $id = $_POST['id'];
    if (empty($partij) || empty($afkorting)) {
        echo 'errorEmpty';
    } elseif (preg_match('~[0-9]~', $partij) || preg_match('~[0-9]~', $afkorting)) {
        echo 'errorPartij';
    } else if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $partij) || preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $afkorting)) {
        echo "errorPartij";
    } else {
        $sql  = "UPDATE partij SET Partijnaam=?,Partijafkorting=? WHERE ID_partij=?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            echo "sqlError";
        } else {
            mysqli_stmt_bind_param($stmt, "ssi", $partij, $afkorting, $id);
            mysqli_stmt_execute($stmt);
            if (mysqli_errno($conn) == 1062) {
                echo "exist";
            } else {
                echo "success";
            }
        }
    }
}

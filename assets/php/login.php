<?php

if (isset($_POST['login'])) {
    require "conn.php";
    $id = $_POST['id'];
    $pwd = $_POST['pwd'];
    $idc = countDigits($id);
    $idlength = strlen($id);
    if (empty($id) || empty($pwd)) {
        echo "errorEmpty";
    } elseif ($idc < 6 || $idc > 6) {
        echo "idError";
    } elseif ($idlength < 8 || $idlength > 8) {
        echo "idError";
    } else if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $id)) {
        echo "idError";
    } else {
        $sql  = "SELECT * FROM burgers LEFT JOIN district ON burgers.ID_district = district.ID_district WHERE ID_nummer=?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            echo "sqlError";
        } else {
            mysqli_stmt_bind_param($stmt, "s", $id);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            if ($row = mysqli_fetch_assoc($result)) {
                $pwdc = password_verify($pwd, $row["pwd"]);
                if ($pwdc == false) {
                    echo "pwdError";
                } elseif ($pwdc == true) {
                    session_start();
                    $_SESSION["id"] = $row["ID_nummer"];
                    $_SESSION["district"] = $row["ID_district"];
                    $_SESSION["naam"] = $row["districtnaam"];
                    $_SESSION["gestemd"] = $row["gestemd"];
                    $_SESSION["login"] = true;
                    echo "success";
                } else {
                    echo "pwdError";
                }
            } else {
                echo "userError";
            }
        }
    }
} 

function countDigits($id)
{
    return count(preg_grep('~^[0-9]$~', str_split($id)));
}

if (isset($_POST['adminLogin'])) {
    require "conn.php";
    $user = $_POST['user'];
    $pwd = $_POST['pwd'];
    if (empty($user) || empty($pwd)) {
        echo "errorEmpty";
    }else{
        $sql  = "SELECT * FROM gebruikers WHERE usernaam=?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            echo "sqlError";
        } else {
            mysqli_stmt_bind_param($stmt, "s", $user);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            if ($row = mysqli_fetch_assoc($result)) {
                if ($pwd == $row["password"]) {
                    session_start();
                    $_SESSION["user"] = $row["usernaam"];
                    $_SESSION["rol"] = $row["rol"];
                    $_SESSION["login-admin"] = true;
                    echo "success";
                  
                }  else {
                    echo "pwdError";
                }
            } else {
                echo "userError";
            }
        }

    }
} 

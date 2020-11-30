<?php
// require '../../../db/conn.php';

$query = 'SELECT COUNT(*) FROM partij';

$stmt = mysqli_stmt_init($conn);


if ($stmt) {
    if (mysqli_stmt_prepare($stmt, $query)) {

        if (mysqli_stmt_execute($stmt)) {
            mysqli_stmt_bind_result($stmt,$aantal);
            mysqli_stmt_fetch($stmt);
            mysqli_stmt_close($stmt);
            echo $aantal;
           
        }
    }
} else {
    mysqli_error($conn);
}

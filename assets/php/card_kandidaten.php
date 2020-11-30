<?php
// require '../../../db/conn.php';

$query = 'SELECT voornaam,achternaam,aantalstemmen FROM kandidaten WHERE aantalstemmen = (SELECT MAX(aantalstemmen) FROM kandidaten)';

$stmt = mysqli_stmt_init($conn);


if ($stmt) {
    if (mysqli_stmt_prepare($stmt, $query)) {

        if (mysqli_stmt_execute($stmt)) {
            mysqli_stmt_bind_result($stmt, $aantal , $achternaam , $voornaam );
            mysqli_stmt_fetch($stmt);
            mysqli_stmt_close($stmt);
            echo "$achternaam $aantal ($voornaam) ";
            // echo "$achternaam ";
            // echo "$voornaam ";
        }
    }
} else {
    mysqli_error($conn);
}

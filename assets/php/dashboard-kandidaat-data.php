<?php

include 'conn.php';

//setting header to json
header('Content-Type: application/json');

//query to get data from the table
$query1 = "SELECT achternaam,voornaam,aantalstemmen FROM kandidaten";

//execute query
$result1 = $conn->query($query1);

//loop through the returned data
$data1 = array();
foreach ($result1 as $row1) {
    $data1[] = $row1;
}

//free memory associated with result
$result1->close();

//close connection
$conn->close();

//now print the data
print json_encode($data1);

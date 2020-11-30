<?php

include 'conn.php';

//setting header to json
header('Content-Type: application/json');
$a=$_GET['id'];
//query to get data from the table
$query = "SELECT Partijnaam,districtnaam,res_per_district.aantalstemmen FROM res_per_district JOIN partij ON res_per_district.ID_partij = partij.ID_partij JOIN district ON res_per_district.ID_district = district.ID_district WHERE  res_per_district.ID_district like $a ";

//execute query
$result = $conn->query($query);

//loop through the returned data
$data = array();
foreach ($result as $row) {
  $data[] = $row;
}

//free memory associated with result
$result->close();

//close connection
$conn->close();

//now print the data
print json_encode($data);

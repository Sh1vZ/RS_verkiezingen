<?php
require "conn.php";

## Read value
$draw = $_POST['draw'];
$row = $_POST['start'];
$rowperpage = $_POST['length']; // Rows display per page
$columnIndex = $_POST['order'][0]['column']; // Column index
$columnName = $_POST['columns'][$columnIndex]['data']; // Column name
$columnSortOrder = $_POST['order'][0]['dir']; // asc or desc
$searchValue = mysqli_real_escape_string($conn, $_POST['search']['value']); // Search value

## Search 
$searchQuery = " ";
if ($searchValue != '') {
    $searchQuery = " and (usernaam like '%" . $searchValue . "%') ";
}

## Total number of records without filtering
$sel = mysqli_query($conn, "select count(*) as allcount from gebruikers");
$records = mysqli_fetch_assoc($sel);
$totalRecords = $records['allcount'];

## Total number of record with filtering
$sel = mysqli_query($conn, "select count(*) as allcount from gebruikers WHERE 1 " . $searchQuery);
$records = mysqli_fetch_assoc($sel);
$totalRecordwithFilter = $records['allcount'];

## Fetch records
$empQuery = "select * from gebruikers WHERE 1 " . $searchQuery . " order by " . $columnName . " " . $columnSortOrder . " limit " . $row . "," . $rowperpage;
$empRecords = mysqli_query($conn, $empQuery);
$data = array();
$a = 1;
while ($row = mysqli_fetch_assoc($empRecords)) {
    $i = $a++;
    // Update Button
    $updateButton = "<button class='btn btn-sm btn-success updateUser' onclick='editAdmin(" . $row['ID'] . ")' data-id='" . $row['ID'] . "'' >Update</button>";

    // Delete Button
    $deleteButton = "<button class='btn btn-sm btn-danger deleteUser'  onclick='deleteAdmin(" . $row['ID'] . ")' data-id='" . $row['ID'] . "'>Delete</button>";

    $action = $updateButton . " " . $deleteButton;
    $data[] = array(
        "ID" => "$i",
        "usernaam" => $row['usernaam'],
        "password" => $row['password'],
        "rol" => $row['rol'],
        "action" => $action,
    );
}

## Response
$response = array(
    "draw" => intval($draw),
    "iTotalRecords" => $totalRecords,
    "iTotalDisplayRecords" => $totalRecordwithFilter,
    "aaData" => $data
);

echo json_encode($response);

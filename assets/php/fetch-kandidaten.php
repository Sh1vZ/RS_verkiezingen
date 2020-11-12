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
    $searchQuery = " and (achternaam like '%" . $searchValue . "%' or 
    voornaam like '%".$searchValue."%' ) ";
}

## Total number of records without filtering
$sel = mysqli_query($conn, "select count(*) as allcount from kandidaten");
$records = mysqli_fetch_assoc($sel);
$totalRecords = $records['allcount'];

## Total number of record with filtering
$sel = mysqli_query($conn, "select count(*) as allcount from kandidaten WHERE 1 " . $searchQuery);
$records = mysqli_fetch_assoc($sel);
$totalRecordwithFilter = $records['allcount'];

## Fetch records
$empQuery = "SELECT Partijnaam,Partijafkorting,img,ID_kandidaten, districtnaam,achternaam,voornaam FROM kandidaten INNER JOIN partij ON kandidaten.ID_partij = partij.ID_partij INNER JOIN district ON kandidaten.ID_district = district.ID_district WHERE 1 " . $searchQuery . " order by " . $columnName . " " . $columnSortOrder . " limit " . $row . "," . $rowperpage;
$empRecords = mysqli_query($conn, $empQuery);
$data = array();
$a = 1;
while ($row = mysqli_fetch_assoc($empRecords)) {
    $i = $a++;
    $img=$row['img'];
    // Update Button
    $updateButton = "<button class='btn btn-sm btn-success updateUser' onclick='editKandidaat(" . $row['ID_kandidaten'] . ")' data-id='" . $row['ID_kandidaten'] . "'' >Update</button>";

    // Delete Button
    $deleteButton = "<button class='btn btn-sm btn-danger deleteUser'  onclick='deleteKandidaat(" . $row['ID_kandidaten'] . ")' data-id='" . $row['ID_kandidaten'] . "'>Delete</button>";

    $action = $updateButton . " " . $deleteButton;
    $data[] = array(
        "ID_kandidaten" => $i,
        "image" => "<a href='../assets/uploads/$img' target='_blank'><img class='display-img' src='../assets/uploads/$img'  width='125' height='125'   ></a>",
        "acternaam" => $row['achternaam'],
        "voornaam" => $row['voornaam'],
        "partij" => $row['Partijnaam']." "."(" . $row['Partijafkorting'] . ")",
        "district" => $row['districtnaam'],
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

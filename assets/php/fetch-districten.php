<?php
require "conn.php";

// $sql = "SELECT * FROM district";
// $result = mysqli_query($conn, $sql);
// $total_row = mysqli_num_rows($result);
// $output = '
// <table class="table align-items-center table-flush" id="table" data-plugin="dataTable">
// <thead class="thead-light">
//     <tr>
//     <th scope="col">#</th>
//     <th scope="col">District</th>
//     <th scope="col" style="width:30%">Action</th>
//     </tr>
//     <thead>
// ';
// if ($total_row > 0) {
//     $i = 1;
//     foreach ($result as $row) {
//         $a = $i++;
//         $output .= '
//         <tbody>
//     <tr>
//         <th scope="row">
//             ' . $a . '
//         </th>
//         <td>
//              ' . $row["districtnaam"] . '
//         </td>
//         <td>
//              EDIT DELETE VIEW
//         </td>
//     </tr>
//         <tbody>

//         ';
//     }
// } else {
//     $output .= '
//     <tr>
//         <td colspan="4" align="center">Data not found</td>
//     </tr>
//     ';
// }
// $output .= '</table> <script>$("#table").DataTable();</script>
// ';
// echo $output;

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
    $searchQuery = " and (districtnaam like '%" . $searchValue . "%') ";
}

## Total number of records without filtering
$sel = mysqli_query($conn, "select count(*) as allcount from district");
$records = mysqli_fetch_assoc($sel);
$totalRecords = $records['allcount'];

## Total number of record with filtering
$sel = mysqli_query($conn, "select count(*) as allcount from district WHERE 1 " . $searchQuery);
$records = mysqli_fetch_assoc($sel);
$totalRecordwithFilter = $records['allcount'];

## Fetch records
$empQuery = "select * from district WHERE 1 " . $searchQuery . " order by " . $columnName . " " . $columnSortOrder . " limit " . $row . "," . $rowperpage;
$empRecords = mysqli_query($conn, $empQuery);
$data = array();
$a=1;
while ($row = mysqli_fetch_assoc($empRecords)) {
$i=$a++;
    // Update Button
    $updateButton = "<button class='btn btn-sm btn-info updateUser' data-id='" . $row['ID_district'] . "' data-toggle='modal' data-target='#updateModal' >Update</button>";

    // Delete Button
    $deleteButton = "<button class='btn btn-sm btn-danger deleteUser' data-id='" . $row['ID_district'] . "'>Delete</button>";

    $action = $updateButton . " " . $deleteButton;
    $data[] = array(
        "ID_district" => $i,
        "districtnaam" => $row['districtnaam'],
        "action" => $action
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

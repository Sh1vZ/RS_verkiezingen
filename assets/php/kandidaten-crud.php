<?php
require "conn.php";




if (isset($_POST['delete'])) {
    $id = $_POST['id'];
    $sql    = "SELECT * FROM kandidaten WHERE ID_kandidaten=$id";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $img = $row['img'];
            $sql1 = "DELETE FROM kandidaten WHERE ID_kandidaten=$id";
            $res=mysqli_query($conn,$sql1);
            if($res){
            echo 'success';
            unlink("../uploads/" . $img);
            }
        }
    }
}


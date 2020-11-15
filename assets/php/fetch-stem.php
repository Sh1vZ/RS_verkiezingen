<?php
require "conn.php";
session_start();
if (isset($_POST['fetchStem'])) {
    $district = $_POST['district'];
    $partijStem = $_POST['partijStem'];
    $idb=$_SESSION["id"];
    if (empty($district) || empty($partijStem)) {
        echo '
        <tr>
            <td>Selecteer een partij </td>
        </tr>';
    } else {
        $sql = "SELECT Partijnaam,Partijafkorting,achternaam,voornaam,districtnaam,img,ID_kandidaten FROM kandidaten JOIN partij ON kandidaten.ID_partij = partij.ID_partij JOIN district ON kandidaten.ID_district = district.ID_district WHERE kandidaten.ID_partij like $partijStem AND kandidaten.ID_district like $district";
        $res = mysqli_query($conn, $sql);
        $a = 1;
        if (mysqli_num_rows($res) > 0) {
            while ($row = mysqli_fetch_assoc($res)) {
                $i = $a++;
                $naama   = $row['achternaam'];
                $afkorting   = $row['Partijafkorting'];
                $naamv = $row['voornaam'];
                $partij = $row['Partijnaam'];
                $img = $row['img'];
                $kandidaat = $row['ID_kandidaten'];
                echo "
                <tr>
                    <td>$i</td>
                    <td><a href='../assets/uploads/$img' target='_blank'><img class='display-img'  src='../assets/uploads/$img'  width='125' height='125'   ></a> </td>
                    <td id='anaam'>  $naama </td>
                    <td id='vnaam'>  $naamv </td>
                    <td id='pnaam'>  $partij </td>
                    <td><button class='btn btn-sm btn-success' onclick=Stemmen($kandidaat,'".$idb."')><i class='fa fa-pencil fa-2x' aria-hidden='true'></i>
                    </button></td>
                </tr>";
            }
        } else {
            echo '
            <tr>
                <td>Partij heeft geen kandidaten </td>
            </tr>';
        }
    }
}

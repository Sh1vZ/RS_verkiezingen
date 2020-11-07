<?php
require "conn.php";
if (isset($_POST['getDistrict'])) {
    $id = $_POST['id'];
    $sql = "SELECT * FROM district WHERE ID_district=$id";
    $res = mysqli_query($conn, $sql);
    if (mysqli_num_rows($res) > 0) {
        while ($row = mysqli_fetch_assoc($res)) {
            $naam   = $row['districtnaam'];
            $id   = $row['ID_district'];
?>

            <div class="modal-dialog modal- modal-dialog-centered modal-" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title" id="modal-title-default">Edit District</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <form action="" id="districten-form">
                                <div class="input-group input-group-merge">
                                    <input class="form-control" placeholder="District" id="district-edit" value=<?= $naam; ?> type="text">
                                </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" onclick="updateDistrict(<?= $id; ?>)" class="btn btn-primary">Bewerk</button>
                            <button type="button" class="btn btn-danger  ml-auto" data-dismiss="modal">Sluiten</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

<?php
        }
    }
}

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
                                    <input class="form-control" placeholder="District" id="district-edit" value='<?= $naam; ?>' type="text">
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

if (isset($_POST['getPartij'])) {
    $id = $_POST['id'];
    $sql = "SELECT * FROM partij WHERE ID_partij=$id";
    $res = mysqli_query($conn, $sql);
    if (mysqli_num_rows($res) > 0) {
        while ($row = mysqli_fetch_assoc($res)) {
            $naamp   = $row['Partijnaam'];
            $afkorting   = $row['Partijafkorting'];
            $id   = $row['ID_partij'];
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
                                <label class="form-control-label" for="partij-edit">Partij Naam</label>
                                <div class="input-group input-group-merge py-2">
                                    <input class="form-control" placeholder="District" id="partij-edit" value='<?= $naamp ?>' type="text">
                                </div>
                                <label class="form-control-label" for="afkorting-edit">Partij Afkorting</label>
                                <div class="input-group input-group-merge">
                                    <input class="form-control" placeholder="District" id="afkorting-edit" value='<?= $afkorting; ?>' type="text">
                                </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" onclick="updatePartij(<?= $id; ?>)" class="btn btn-primary">Bewerk</button>
                            <button type="button" class="btn btn-danger  ml-auto" data-dismiss="modal">Sluiten</button>
                        </div>
                        </form>
                    </div>
                </div>

            <?php
        }
    }
}

if (isset($_POST['getKandidaat'])) {
    $id = $_POST['id'];
    $sql = "SELECT * FROM kandidaten WHERE ID_kandidaten=$id";
    $res = mysqli_query($conn, $sql);
    if (mysqli_num_rows($res) > 0) {
        while ($row = mysqli_fetch_assoc($res)) {
            $naam = $row['achternaam'];
            $vnaam = $row['voornaam'];
            $img = $row['img'];
            $partij = $row['ID_partij'];
            $district = $row['ID_district'];
            ?>
                <div class="modal-dialog modal- modal-dialog-centered modal-" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="modal-title" id="modal-title-default">Kandidaat Bewerken</h6>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="" method="POST" id="form-kandidaat-edit" enctype="multipart/form-data">
                                <div class="form-group mb-3">
                                    <label class="form-control-label" for="voornaam">Voornaam</label>
                                    <div class="input-group input-group-merge">
                                        <input class="form-control" placeholder="Voornaam" id="voornaam-edit" name="voornaam-edit" value='<?= $vnaam; ?>' type="text">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="form-control-label" for="achternaam">Achternaam</label>
                                    <div class="input-group input-group-merge">
                                        <input class="form-control" placeholder="Achternaam" id="achternaam-edit" name="achternaam-edit" value='<?= $naam; ?>' type="text">
                                    </div>
                                </div>
                                <label class="form-control-label" for="partij">Partij</label>
                                <div class="input-group input-group-merge">
                                    <select class="form-control district" data-placeholder="Selecteer Partij" id="partij-edit" name="partij-edit" data-allow-clear="true" data-toggle="select">
                                        <option></option>
                                        <?php
                                        $sql    = "SELECT * FROM partij";
                                        $result = mysqli_query($conn, $sql);
                                        while ($row = mysqli_fetch_assoc($result)) {
                                            echo "<option value='" . $row['ID_partij'] . "'>" . $row['Partijnaam'] . " (" . $row['Partijafkorting'] . ")</option>";
                                        }
                                        ?>
                                    </select>
                                </div>
                                <div class="input-group input-group-merge py-2">
                                    <label class="form-control-label" for="district">District</label>
                                    <select class="form-control district" data-placeholder="Selecteer District" id="district-edit" name="district-edit" data-allow-clear="true" data-toggle="select">
                                        <option></option>
                                        <?php
                                        $sql    = "SELECT * FROM district";
                                        $result = mysqli_query($conn, $sql);
                                        while ($row = mysqli_fetch_assoc($result)) {
                                            echo "<option value='" . $row['ID_district'] . "'>" . $row['districtnaam'] . "</option>";
                                        }
                                        ?>
                                    </select>
                                    <input type="hidden" name="id" id="id" value='<?= $id ?>'>
                                    <input type="hidden" name="imge" id="imge" value='<?= $img ?>'>
                                </div>
                                <script src="../assets/js/app.js"></script>
                                <script>
                                    $('.district').select2({});
                                    $('#partij-edit').val(<?= $partij ?>).trigger('change')
                                    $('#district-edit').val(<?= $district ?>).trigger('change')
                                </script>
                                <label class="form-control-label" for="customFileLang">Kandidaat Foto</label>
                                <div class="custom-file">

                                    <input type="file" class="custom-file-input" id="customFileLang1" name='image-edit' lang="en" accept="image/*" onchange="PreviewImage1()">
                                    <label class="custom-file-label" for="customFileLang">Selecteer Kandidaat foto</label>
                                </div>
                                <label class="form-control-label" id='txt' for="uploadPreview1">Huidige Foto</label>
                                <a href='../assets/uploads/<?= $img ?>' target='_blank'><img id="uploadPreview1" src='../assets/uploads/<?= $img ?>' style="width: 50%; height: 50%;  display: block;   margin-left: auto;   margin-right: auto; margin-top:5%;" /></a>
                                <div class="modal-footer">
                                    <button type="submit" name='submit' class="btn btn-primary">Toevoegen</button>
                                    <button type="button" class="btn btn-danger  ml-auto" data-dismiss="modal">Sluiten</button>
                                </div>
                            </form>
                        </div>
                    </div>

                <?php
            }
        }
    }

        if (isset($_POST['getAdmin'])) {
            $id = $_POST['id'];
            $sql = "SELECT * FROM gebruikers WHERE ID=$id";
            $res = mysqli_query($conn, $sql);
            if (mysqli_num_rows($res) > 0) {
                while ($row = mysqli_fetch_assoc($res)) {
                    $usernaam   = $row['usernaam'];
                    $pwd   = $row['password'];
                    $rol   = $row['rol'];
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
                                        <form action="#" id="admin-form">
                                            <div class="input-group input-group-merge">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fas fa-user-shield"></i></span>
                                                </div>
                                                <input class="form-control" name='usernaam' placeholder="Usernaam" id="usernaam-edit" value='<?= $usernaam; ?>' type="text">
                                            </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group input-group-merge">
                                            <select class="form-control" name="rol" id="rol-edit" placeholder="Selecteer Rol">
                                                <option value="Admin"  <?php echo ($rol == 'Admin') ? "selected" : "" ?> >Admin</option>
                                                <option value="Super Admin"<?php echo ($rol == 'Super Admin') ? "selected" : "" ?>>Super Admin</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group input-group-merge">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                            </div>
                                            <input class="form-control" name='pwd' placeholder="Password" id="pwd-edit" value='<?= $pwd; ?>' type="text">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" onclick="updateAdmin(<?= $id; ?>)" class="btn btn-primary">Bewerk</button>
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

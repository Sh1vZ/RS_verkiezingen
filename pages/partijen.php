<?php
include '../assets/php/check.php';
session_start();
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Start your development with a Dashboard for Bootstrap 4.">
    <meta name="author" content="Creative Tim">
    <title>RS_verkiezingen | Partijen</title>
    <!-- Favicon -->
    <link rel="icon" href="../assets/img/brand/favicon.png" type="image/png">
    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700">
    <!-- Icons -->
    <link rel="stylesheet" href="../assets/vendor/nucleo/css/nucleo.css" type="text/css">
    <link rel="stylesheet" href="../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" type="text/css">
    <link rel="stylesheet" href="../assets/vendor/datatables.net-bs4/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="../assets/vendor/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css">
    <link rel="stylesheet" href="../assets/vendor/sweetalert2/dist/sweetalert2.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <!-- Page plugins -->
    <!-- Argon CSS -->
    <link rel="stylesheet" href="../assets/css/rs_verkiezingen.css" type="text/css">
</head>

<body>
    <!-- Sidenav -->
    <nav class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" id="sidenav-main">
        <div class="scrollbar-inner">
            <!-- Brand -->
            <div class="sidenav-header d-flex align-items-center">
                <a class="navbar-brand" href="../dashboard.php">
                    <h3><img src="../assets/img/brand/favicon.png" class="navbar-brand-img nav-img" alt="..."> RS_Verkiezingen</h3>
                </a>
                <div class="ml-auto">
                    <!-- Sidenav toggler -->
                    <div class="sidenav-toggler d-none d-xl-block" data-action="sidenav-unpin" data-target="#sidenav-main">
                        <div class="sidenav-toggler-inner">
                            <i class="sidenav-toggler-line"></i>
                            <i class="sidenav-toggler-line"></i>
                            <i class="sidenav-toggler-line"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navbar-inner">
                <!-- Collapse -->
                <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                    <!-- Nav items -->
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link " href="./dashboard.php">
                                <i class="ni ni-chart-pie-35 text-green"></i>
                                <span class="nav-link-text">Dashboard</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./districten.php">
                                <i class="ni ni-map-big text-red"></i>
                                <span class="nav-link-text">Districten</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./kandidaten.php">
                                <i class="ni ni-badge text-green"></i>
                                <span class="nav-link-text">Kandidaten</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="./partijen.php">
                                <i class="fas fa-hands-helping text-red"></i>
                                <span class="nav-link-text">Partijen</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </nav>
    <!-- Main content -->
    <div class="main-content" id="panel">
        <!-- Topnav -->
        <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Navbar links -->
                    <ul class="navbar-nav align-items-center ml-md-auto">
                        <li class="nav-item d-xl-none">
                            <!-- Sidenav toggler -->
                            <div class="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                                <div class="sidenav-toggler-inner">
                                    <i class="sidenav-toggler-line"></i>
                                    <i class="sidenav-toggler-line"></i>
                                    <i class="sidenav-toggler-line"></i>
                                </div>
                            </div>
                        </li>
                        <ul class="navbar-nav align-items-center ml-auto ml-md-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div class="media align-items-center">
                                        <i class="ni ni-circle-08 ni-2x"></i>
                                        <div class="media-body ml-2 d-none d-lg-block">
                                            <span class="mb-0 text-sm  font-weight-bold"><?= $_SESSION['user']; ?></span>
                                        </div>
                                    </div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a href="" onclick='Logout()' class="dropdown-item">
                                        <i class="ni ni-user-run"></i>
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
        <!-- Header -->
        <!-- Header -->
        <div class="header bg-primary pb-6">
            <div class="container-fluid">
                <div class="header-body">
                    <div class="row align-items-center py-4">

                    </div>
                    <!-- SPACING -->

                </div>
            </div>
        </div>
        <!-- Page content -->
        <div class="container-fluid mt--6">

            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-header border-0">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h3 class="mb-0">Partijen</h3>
                                </div>

                            </div>
                        </div>
                        <div class="table-responsive py-4">
                            <table id='datatable' class=' table ' role="grid" aria-describedby="datatable-basic_info">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Partij Naam</th>
                                        <th scope="col">Afkorting</th>
                                        <th scope="col" style="width:15%">Acties</th>
                                    </tr>
                                </thead>
                            </table>

                        </div>
                    </div>
                </div>
                <button type="button " class="fab" data-toggle="modal" data-target="#modal"><i class="ni ni-fat-add ni-2x"></i></button>
            </div>
            <!-- Footer -->
            <footer class="footer pt-0 ">
                <div class="row align-items-center justify-content-lg-between ">
                    <div class="col-lg-6 ">
                        <div class="copyright text-center text-lg-left text-muted ">
                            &copy; 2020 RS_verkiezingen
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    </div>

    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
        <div class="modal-dialog modal- modal-dialog-centered modal-" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" id="modal-title-default">Type your modal title</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form role="form" id="partij-form">
                        <div class="form-group mb-3">
                            <div class="input-group input-group-merge">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-hands-helping"></i></span>
                                </div>
                                <input class="form-control" placeholder="Partij Naam" id="partij" type="text">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group input-group-merge">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-hands-helping"></i></span>
                                </div>
                                <input class="form-control" placeholder="Partij Afkorting" id="afkorting" type="text">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onclick="addPartij()" >Toevoegen</button>
                            <button type="button" class="btn btn-danger  ml-auto" data-dismiss="modal">Sluiten</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        <div class="modal fade" id="modalEdit" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
      
    </div>
        <!--Scripts -->
        <!-- Core -->
        <script src="../assets/vendor/jquery/dist/jquery.min.js "></script>
        <script src="../assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js "></script>
        <script src="../assets/vendor/js-cookie/js.cookie.js "></script>
        <script src="../assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js "></script>
        <script src="../assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js "></script>
        <!-- Optional JS -->
        <script src="../assets/vendor/chart.js/dist/Chart.min.js "></script>
        <script src="../assets/vendor/chart.js/dist/Chart.extension.js "></script>
        <script src="../assets/vendor/datatables.net/js/jquery.dataTables.min.js"></script>
        <script src="../assets/vendor/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.9.0/dist/sweetalert2.all.min.js"></script>
        <!--JS -->
        <script src="../assets/js/app.js "></script>
        <script src="../assets/js/rs_verkiezingen.js "></script>
        <script>
            $(document).ready(function() {
                fetchPartijen()

            });
        </script>
</body>

</html
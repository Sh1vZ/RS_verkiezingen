<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Start your development with a Dashboard for Bootstrap 4.">
    <meta name="author" content="Creative Tim">
    <title>RS_verkiezingen</title>
    <!-- Favicon -->
    <link rel="icon" href="../assets/img/brand/favicon.png" type="image/png">
    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700">
    <!-- Icons -->
    <link rel="stylesheet" href="../assets/vendor/nucleo/css/nucleo.css" type="text/css">
    <link rel="stylesheet" href="../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" type="text/css">
    <link rel="stylesheet" href="../assets/vendor/select2/dist/css/select2.min.css">
    <link rel="stylesheet" href="../assets/vendor/quill/dist/quill.core.css">
    <link rel="stylesheet" href="../assets/vendor/animate.css/animate.min.css">
  <link rel="stylesheet" href="../assets/vendor/sweetalert2/dist/sweetalert2.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <!--CSS -->
    <link rel="stylesheet" href="../assets/css/rs_verkiezingen.css" type="text/css">
</head>

<body class="bg-default">
    <!-- Navbar -->
    <nav id="navbar-main" class="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="#">
                <h3 class="text-white "><img src="../assets/img/brand/favicon.png" class="navbar-brand-img nav-img" alt="..."> RS_Verkiezingen</h3>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
            <div class="navbar-collapse navbar-custom-collapse collapse" id="navbar-collapse">
                <div class="navbar-collapse-header">
                    <div class="row">

                        <div class="col-6 collapse-brand">
                            <h4><img src="../assets/img/brand/favicon.png" class="navbar-brand-img nav-img" alt="..."> RS_Verkiezingen</h4>
                        </div>
                        <div class="col-6 collapse-close">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
              </button>
                        </div>
                    </div>
                </div>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item btn-icon">
                        <a href="../index.html">
                            <button class="btn btn-secondary btn-lg btn-block" type="button">
                <span class="btn-inner--icon"><i class="fa fa-user fa-lg"></i></span>
                <span class="btn-inner--text">User Login</span>
              </button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Main content -->
    <div class="main-content">
        <!-- Header -->
        <div class="header bg-gradient-custom py-7  pt-lg-9">
            <div class="container">
                <div class="header-body text-center mb-7">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                            <h1 class="text-white">Welcome!</h1>
                            <p class="text-lead text-white">INSTRUCTIES</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="separator separator-bottom separator-skew zindex-100">
                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
            </div>
        </div>
        <!-- Page content -->
        <div class="container mt--8 pb-5">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-7">
                    <div class="card bg-secondary border-0 mb-0">
                        <div class="card-body px-lg-32 py-lg-4">
                            <div class="text-center  mb-4">
                                <p>Vul uw gegevens in</p>
                            </div>
                            <form role="form" id="register-form"  method="post">
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fa fa-id-badge"></i></span>
                                        </div>
                                        <input class="form-control" name="id" placeholder="ID" id="id" type="text">
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fa fa-calendar"></i></span>
                                        </div>
                                        <input class="form-control"  id="date" placeholder="Select date" type="date">
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <select class="form-control district" name="district" id="district" data-placeholder="Selecteer District" data-allow-clear="true" data-toggle="select">
                                                <option></option>
                                                <?php
                                                    include '../assets/php/conn.php';
                                                    $sql    = "SELECT * FROM district";
                                                    $result = mysqli_query($conn, $sql);
                                                    while ($row = mysqli_fetch_assoc($result)) {
                                                    echo "<option value='" . $row['ID_district'] . "'>" . $row['districtnaam'] . "</option>";
                                                    }
                                                ?>
                                              </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                        </div>
                                        <input class="form-control" name="pwd" id="pwd" placeholder="Password" type="password">
                                    </div>
                                </div>
                                <div class="text-center submit">
                                    <button type="button" onclick=" Register()" name="register"  class="btn btn-primary my-4">Registreer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer -->
    <footer class="py-5" id="footer-main">
        <div class="container">
            <p class="copyright text-center text-white"> &copy; 2020 RS-Verkiezingen</p>
        </div>
    </footer>
    <!--Scripts -->
    <!-- Core -->
    <script src="../assets/vendor/jquery/dist/jquery.min.js"></script>
    <script src="../assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../assets/vendor/js-cookie/js.cookie.js"></script>
    <script src="../assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js"></script>
    <script src="../assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js"></script>
    <script src="../assets/vendor/select2/dist/js/select2.min.js"></script>
    <script src="../assets/vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
    <script src="../assets/js/app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.9.0/dist/sweetalert2.all.min.js"></script>
  <script src="../assets/vendor/bootstrap-notify/bootstrap-notify.min.js"></script>
    <!--JS -->
    <script src="../assets/js/rs_verkiezingen.js"></script>
</body>

</html>
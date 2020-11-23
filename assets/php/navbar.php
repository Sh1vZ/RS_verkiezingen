<?php
$directoryURI = $_SERVER['REQUEST_URI'];
$path = parse_url($directoryURI, PHP_URL_PATH);
$components = explode('/', $path);
$first_part = $components[3];
?>

<div class="collapse navbar-collapse" id="sidenav-collapse-main">
    <!-- Nav items -->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link <?php echo ($first_part == 'dashboard.php') ? "active" : "" ?>" href="dashboard.php">
                <i class="ni ni-chart-pie-35 text-green"></i>
                <span class="nav-link-text">Dashboard</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link <?php echo ($first_part == 'districten.php') ? "active" : "" ?>" href=" ./districten.php"> <i class="ni ni-map-big text-red"></i>
                <span class="nav-link-text">Districten</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link <?php echo ($first_part == 'kandidaten.php') ? "active" : "" ?>" href=" ./kandidaten.php"> <i class="ni ni-badge text-green"></i>
                <span class="nav-link-text">Kandidaten</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link <?php echo ($first_part == 'partijen.php') ? "active" : "" ?>" href=" ./partijen.php"> <i class="fas fa-hands-helping text-red"></i>
                <span class="nav-link-text">Partijen</span>
            </a>
        </li>

        <li class="nav-item">
            <?php
            if ($_SESSION['rol'] == 'Super Admin') {
            ?>
                <a class='nav-link  <?php echo ($first_part == 'gebruikers.php') ? "active" : '' ?>' href=' ./gebruikers.php'> <i class='fas fa-user-shield text-green'></i>
                    <span class='nav-link-text'>Admins</span>
                </a>
            <?php
            } else {
                echo "";
            }
            ?>
        </li>
    </ul>

</div>
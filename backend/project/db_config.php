<?php
$servername = "db";
$username = "root";
$password = "root";
$database = "agencyinsight";
// $port = ;

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
<?php
$servername = "db";
$username = "root";
$password = "root";
$database = "agencyinsight";
// $port = ;

$conn = new mysqli($servername, $username, $password, $database);

$conn->set_charset("utf8");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$allowed_origins = [
    "http://localhost:1234",
    "http://127.0.0.1:5500",
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
}
//header("Access-Control-Allow-Origin: http://localhost:1234");
//header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");


?>
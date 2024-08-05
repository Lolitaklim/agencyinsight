<?php


session_start();

// Проверяем, что пользователь авторизован
if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}

require './db_config.php';

$admin_username = 'username';
$admin_password = 'y*KY@A,jr7cj(LR4b|n)';

$hashedPassword = password_hash($admin_password, PASSWORD_BCRYPT);

$stmt = $conn->prepare('SELECT COUNT(*) FROM admins WHERE username = ?');
if (!$stmt) {
    die("Prepare failed: " . $conn->error);
}

$stmt->bind_param('s', $admin_username);
$stmt->execute();
$stmt->bind_result($count);
$stmt->fetch();
$stmt->close();

if ($count > 0) {
    echo "Username already exists.";
} else {
    $stmt = $conn->prepare('INSERT INTO admins (username, password) VALUES (?, ?)');
    if (!$stmt) {
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param('ss', $admin_username, $hashedPassword);
    if ($stmt->execute()) {
        echo "Admin registered successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
}

// Закрываем соединение
$conn->close();
?>
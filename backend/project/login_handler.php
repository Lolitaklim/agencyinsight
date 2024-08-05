<?php
session_start();

require './db_config.php';

// Получаем данные из формы
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input_username = trim($_POST['username']);
    $input_password = trim($_POST['password']);

    // Подготавливаем запрос
    $stmt = $conn->prepare('SELECT password FROM admins WHERE username = ?');
    if (!$stmt) {
        die("Prepare failed: " . $conn->error);
    }
    $stmt->bind_param('s', $input_username);
    $stmt->execute();
    $stmt->bind_result($stored_password);
    $stmt->fetch();
    $stmt->close();

    // Проверяем пароль
    if (password_verify($input_password, $stored_password)) {
        $_SESSION['username'] = $input_username;
        header('Location: index.php'); // Перенаправление на страницу админки
        exit();
    } else {
        echo "Invalid username or password.";
    }
}

$conn->close();
?>
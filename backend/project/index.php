<?php
session_start();
if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Панель Администратора</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
        .logout-btn {
            margin-top: 15px;
        }

        .dashboard-links {
            margin-top: 30px;
        }

        .dashboard-links a {
            display: block;
            margin-bottom: 10px;
            font-size: 18px;
        }
    </style>
</head>

<body>
    <div class="container">
        <header class="d-flex justify-content-between align-items-center py-3">
            <h1>Панель Администратора</h1>
            <a href="logout.php" class="btn btn-danger logout-btn">Выйти</a>
        </header>

        <div class="dashboard-links">
            <a href="add-case.php" class="btn btn-primary">Создать кейс</a>
            <a href="view-cases.php" class="btn btn-secondary">Посмотреть все кейсы</a>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>

</html>
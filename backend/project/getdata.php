<?php

require 'db_config.php';

// Выполнение SQL-запроса для получения одной строки из таблицы items
$sql = "SELECT id, title, description, image_url FROM cases WHERE id = 1"; // Замените 1 на нужный вам ID или условие выборки
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Извлечение данных строки
    $row = $result->fetch_assoc();

    // Формирование массива с данными
    $data = array(
        'id' => $row['id'],
        'title' => $row['title'],
        'description' => $row['description'],
        'image_url' => $row['image_url']
    );

    // Преобразование массива в JSON
    $json_data = json_encode($data);

    // Вывод JSON-данных
    header('Content-Type: application/json');
    echo $json_data;
} else {
    // Если данные не найдены
    echo json_encode(array('message' => 'No data found'));
}

// Закрытие соединения
$conn->close();
?>
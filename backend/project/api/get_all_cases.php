<?php

require './../db_config.php';

// все кейсы с категориями
$sql1 = "SELECT c.id AS case_id, c.href, c.alt_image, c.title, c.image_url, c.block_size, c.category_id, cc.category_name AS category FROM cases c JOIN case_categories cc ON c.category_id = cc.id ORDER BY `case_id` DESC;";

$result1 = $conn->query($sql1);
$data1 = [];

if ($result1->num_rows > 0) {
    while ($row = $result1->fetch_assoc()) {
        $data1[] = array(
            'case_id' => $row['case_id'],
            'href' => $row['href'],
            'title' => $row['title'],
            'alt_image' => $row['alt_image'],
            'image_url' => $row['image_url'],
            'block_size' => $row['block_size'],
            'category_id' => $row['category_id'],
            'category' => $row['category'],
        );
    }
}

// главный кейс
$sql2 = "SELECT c.id AS case_id, c.href, c.alt_image, c.title, c.image_url, c.block_size, cc.id AS category_id, cc.category_name AS category FROM main_case mc JOIN cases c ON mc.case_id = c.id JOIN case_categories cc ON c.category_id = cc.id WHERE mc.id = 1 ORDER BY c.id;";

$result2 = $conn->query($sql2);
$data2 = [];

if ($result2->num_rows > 0) {
    while ($row = $result2->fetch_assoc()) {
        $data2[] = array(
            'case_id' => $row['case_id'],
            'href' => $row['href'],
            'title' => $row['title'],
            'alt_image' => $row['alt_image'],
            'image_url' => $row['image_url'],
            'block_size' => $row['block_size'],
            'category_id' => $row['category_id'],
            'category' => $row['category'],
        );
    }
}

// категории
$sql3 = "SELECT * FROM `case_categories` ORDER BY `case_categories`.`id` ASC;";

$result3 = $conn->query($sql3);
$data3 = [];

if ($result3->num_rows > 0) {
    while ($row = $result3->fetch_assoc()) {
        $data3[] = array(
            'category_id' => $row['id'],
            'category' => $row['category_name'],
        );
    }
}

// Объединение данных
$response = array(
    'cases' => $data1,
    'main_case' => $data2,
    'categories' => $data3,
);

$json_response = json_encode($response);
header('Content-Type: application/json');
echo $json_response;

$conn->close();
<?php

require './../db_config.php';

/*
    Получение всех кейсов из таблицы cases, которые указаны в таблице homepage_cases, с добавлением поля display_order
*/

$sql = "SELECT c.href, c.alt_image, c.title, cc.category_name AS category, c.image_url, hc.display_order, hc.block_size FROM cases c JOIN homepage_cases hc ON c.id = hc.item_id JOIN case_categories cc ON c.category_id = cc.id ORDER BY hc.display_order;";

$result = $conn->query($sql);
$data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = array(
            'href' => $row['href'],
            'title' => $row['title'],
            'category' => $row['category'],
            'alt_image' => $row['alt_image'],
            'image_url' => $row['image_url'],
            'display_order' => $row['display_order'],
            'block_size' => $row['block_size'],
        );
    }
    $json_data = json_encode($data);
    header('Content-Type: application/json');
    echo $json_data;
} else {
    echo json_encode(array('message' => 'No data found'));
}

$conn->close();
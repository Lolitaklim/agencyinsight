<?php

require './../db_config.php';


$sql = "SELECT * FROM news
ORDER BY id DESC
LIMIT 3;";

$result = $conn->query($sql);
$data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = array(
            'href' => $row['href'],
            'title' => $row['title'],
            'description' => $row['description'],
            'alt_image' => $row['alt_image'],
            'image_url' => $row['image_url']
        );
    }
    $json_data = json_encode($data);
    header('Content-Type: application/json');
    echo $json_data;
} else {
    echo json_encode(array('message' => 'No data found'));
}

$conn->close();
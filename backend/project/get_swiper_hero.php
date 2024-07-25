<?php

require 'db_config.php';

/*
    Этот запрос выбирает и объединяет данные из таблиц 'swiper_hero', 'cases' и 'news', используя LEFT JOIN. 
    Для каждой записи в 'swiper_hero', в зависимости от значения 'item_type', выбираются соответствующие поля (href, alt_image, title, description, image_url) из таблиц 'cases' или 'news'.
    Результаты сортируются по 'display_order'.
*/

$sql = "SELECT 

CASE 
    WHEN sh.item_type = 'case' THEN c.href
    WHEN sh.item_type = 'news' THEN n.href
END AS href,
CASE 
    WHEN sh.item_type = 'case' THEN c.alt_image
    WHEN sh.item_type = 'news' THEN n.alt_image
END AS alt_image,
CASE 
    WHEN sh.item_type = 'case' THEN c.title
    WHEN sh.item_type = 'news' THEN n.title
END AS title,
CASE 
    WHEN sh.item_type = 'case' THEN c.description
    WHEN sh.item_type = 'news' THEN n.description
END AS description,
CASE 
    WHEN sh.item_type = 'case' THEN c.image_url
    WHEN sh.item_type = 'news' THEN n.image_url
END AS image_url
FROM 
swiper_hero sh
LEFT JOIN 
cases c ON sh.item_type = 'case' AND sh.item_id = c.id
LEFT JOIN 
news n ON sh.item_type = 'news' AND sh.item_id = n.id
ORDER BY 
sh.display_order;";

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
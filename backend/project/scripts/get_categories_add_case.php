<?php
require './../db_config.php';


$sql = "SELECT id, `category_name` FROM `case_categories` ORDER BY `id` ASC";
$result = $conn->query($sql);

$options = "";
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $options .= '<option value="' . $row["id"] . '">' . $row["category_name"] . '</option>';
    }
} else {
    $options = '<option value="">Нет доступных категорий</option>';
}

$conn->close();

echo json_encode(['options' => $options]);

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');


$href = isset($_POST['href']) ? $_POST['href'] : '';
$title_page = isset($_POST['title_page']) ? $_POST['title_page'] : '';
$description = isset($_POST['description']) ? $_POST['description'] : '';
$keywords = isset($_POST['keywords']) ? $_POST['keywords'] : '';
$block_size = isset($_POST['block_size']) ? $_POST['block_size'] : '';
$title = isset($_POST['title']) ? $_POST['title'] : '';
$alt_logo = isset($_POST['alt_logo']) ? $_POST['alt_logo'] : '';
$alt_image = isset($_POST['alt_image']) ? $_POST['alt_image'] : '';
$category = isset($_POST['category']) ? $_POST['category'] : '';
$page_data_post = isset($_POST['page_data']) ? $_POST['page_data'] : '';

$response = [
    'messageImg' => '',
    'msgLogo' => '',
    'db_status' => '',
];


function generateUniqueFilename($filename)
{
    $ext = pathinfo($filename, PATHINFO_EXTENSION);
    $uniqueName = uniqid() . '.' . $ext;
    return $uniqueName;
}


$logoFile = $_FILES['logo_url'];
$imageFile = $_FILES['image_url'];

if ($logoFile['error'] === UPLOAD_ERR_OK) {
    $logoFilename = generateUniqueFilename($logoFile['name']);
    move_uploaded_file($logoFile['tmp_name'], '../uploads/' . $logoFilename);
} else {
    $response['msgLogo'] = 'Ошибка загрузки логотипа';
}

if ($imageFile['error'] === UPLOAD_ERR_OK) {
    $imageFilename = generateUniqueFilename($imageFile['name']);
    move_uploaded_file($imageFile['tmp_name'], '../uploads/' . $imageFilename);
} else {
    $response['messageImg'] = 'Ошибка загрузки изображения';
}


require_once './../db_config.php';

$stmt = $conn->prepare("
    INSERT INTO cases (href, title_page, description, keywords, block_size, title, alt_logo, alt_image, category_id, page_data, logo_url, image_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
");

$category_id = intval($category);
$page_data = json_encode($page_data_post);
$image_url = $imageFilename ?? '';
$logo_url = $logoFilename ?? '';


$stmt->bind_param(
    'ssssisssisss',
    $href,
    $title_page,
    $description,
    $keywords,
    $block_size,
    $title,
    $alt_logo,
    $alt_image,
    $category_id,
    $page_data,
    $logo_url,
    $image_url
);

if ($stmt->execute()) {
    $response['db_status'] = 'Запись успешно добавлена';
} else {
    $response['db_status'] = 'Ошибка добавления записи: ' . $stmt->error;
}

$stmt->close();
$conn->close();

// Отправка данных в формате JSON
echo json_encode($response['db_status']);

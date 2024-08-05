<?php

require './../db_config.php';

$caseHref = isset($_GET['case']) ? $_GET['case'] : '';


$sql1 = "SELECT c.title, c.page_data, c.alt_image, c.image_url, c.alt_logo, c.logo_url, cc.category_name AS category, c.title_page, c.description, c.keywords FROM `cases` c JOIN case_categories cc ON c.category_id = cc.id WHERE c.href = ?";

$stmt1 = $conn->prepare($sql1);
$stmt1->bind_param("s", $caseHref);
$stmt1->execute();
$result1 = $stmt1->get_result();

$data1 = [];

if ($result1->num_rows > 0) {
    while ($row = $result1->fetch_assoc()) {
        $page_data = json_decode($row['page_data'], true);
        $data1[] = array(
            'title' => $row['title'],
            'alt_image' => $row['alt_image'],
            'image_url' => $row['image_url'],
            'alt_logo' => $row['alt_logo'],
            'logo_url' => $row['logo_url'],
            'category' => $row['category'],
            'page_data' => $page_data,
            'title_page' => $row['title_page'],
            'description' => $row['description'],
            'keywords' => $row['keywords'],
        );
    }
}

// кейсы также
$sql2 = "SELECT 
  c.href, 
  c.title, 
  c.alt_image, 
  c.image_url, 
  cc.category_name AS category 
FROM 
  `cases` c 
JOIN 
  case_categories cc ON c.category_id = cc.id 
WHERE 
  c.id IN (
    SELECT JSON_UNQUOTE(JSON_EXTRACT(related_cases, '$[0]'))
    FROM cases 
    WHERE href = ?
    UNION ALL
    SELECT JSON_UNQUOTE(JSON_EXTRACT(related_cases, '$[1]'))
    FROM cases 
    WHERE href = ?
    UNION ALL
    SELECT JSON_UNQUOTE(JSON_EXTRACT(related_cases, '$[2]'))
    FROM cases 
    WHERE href = ?
  );
  
  ";

$stmt2 = $conn->prepare($sql2);
$stmt2->bind_param("sss", $caseHref, $caseHref, $caseHref);
$stmt2->execute();
$result2 = $stmt2->get_result();
$data2 = [];

if ($result2->num_rows > 0) {
    while ($row = $result2->fetch_assoc()) {
        $data2[] = array(
            'href' => $row['href'],
            'title' => $row['title'],
            'alt_image' => $row['alt_image'],
            'image_url' => $row['image_url'],
            'category' => $row['category'],
        );
    }
}


$response = array(
    'case' => $data1,
    'also_cases' => $data2,
);

$json_response = json_encode($response);
header('Content-Type: application/json');
echo $json_response;

// $conn->close();

$stmt1->close();
$stmt2->close();
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
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <title></title>
  <link rel="stylesheet" href="./styles/main.css" />
  <link rel="stylesheet" href="./styles/add-case.css" />
</head>

<body>
  <header class="container">
    <a class="logo" href="./">
      <img class="img-mob" src="./img/logo-mob.svg" alt="Логотип Insight" />
      <img class="img-desk" src="./img/logo-desc.svg" alt="Логотип Insight" />
    </a>
    <nav>
      <a class="header-link" href="#" data-b="Проекты" data-f="Кейсы"></a>
      <div class="dropdown">
        <a class="header-link drop-link" href="#" data-b="Услуги" data-f="Услуги"><span></span></a>
      </div>
      <a class="header-link" href="#" data-b="Команда" data-f="Команда"></a>
      <a class="header-link" href="#" data-b="Новости" data-f="Новости"></a>
    </nav>
    <div class="buttons">
      <a class="button-fill-hover btn-contact" href="#"><span class="dot">•</span><span
          class="text">Связаться</span></a>
      <button class="menu-btn" id="openMenu"></button>
    </div>
  </header>
  <form id="mainDataForm" class="container" enctype="multipart/form-data">
    <p class="add-case-title">Добавление кейса</p>
    <div class="main-info">
      <label for="href">Ссылка(коротко латиница и -, без пробелов, УНИКАЛЬНОЕ):</label>
      <input type="text" id="href" name="href">
      <label for="title_page">Title(на вкладке браузера):</label>
      <input type="text" id="title_page" name="title_page">
      <label for="description">Description:</label>
      <textarea id="description" name="description" onInput="autoResizeTextarea(this)"></textarea>
      <label for="keywords">Keywords (через запятую) :</label>
      <textarea id="keywords" name="keywords" onInput="autoResizeTextarea(this)"></textarea>
      <label for="block_size">Размер кейса при отображении в сетке:</label>
      <div class="block-size-input">
        <div>
          <input type="radio" name="block_size" value="1" checked>
          1
        </div>
        <div>
          <input type="radio" name="block_size" value="2">
          2
        </div>
      </div>
    </div>
    <hr>
    <div class="case">
      <div class="case-head">
        <div class="add-logo">
          <div>
            <label for="logo_url">Логотип:</label>
            <input type="file" id="logo_url" name="logo_url" accept="image/*" required>
          </div>
          <div>
            <label for="alt_logo">Альтернативное текстовое содержание:</label>
            <input type="text" id="alt_logo" name="alt_logo">
          </div>
        </div>
        <textarea class="title-case" id="title" name="title" onInput="autoResizeTextarea(this)"
          placeholder="Главный заголовок"></textarea>
        <div class="category">
          <label for="category">Категория:</label>
          <select id="category" name="category">
          </select>
        </div>
        <div class="add-logo">
          <div>
            <label for="image_url">Главное изображение (1:1) :</label>
            <input type="file" id="image_url" name="image_url" accept="image/*" required>
          </div>
          <div>
            <label for="alt_image">Альтернативное текстовое содержание:</label>
            <input type="text" id="alt_image" name="alt_image">
          </div>
        </div>
      </div>
    </div>
  </form>
  <section class="case container" id="caseContainer">
  </section>
  <div class="add-buttons container">
    +
    <button onclick="addAcquaintance()">блок с линией слева</button>
    <button onclick="addColorBlock()">блок фиолетовый</button>
    <button onclick="addOrdinaryBlock()">блок</button>
    <button onclick="addMarkNumList()">список</button>
    <button onclick="addResults()">блок с результатами</button>
    <button onclick="addSimpleParagraph()">абзац</button>
  </div>
  <div class="btn-submit-container container">
    <button class="btn-submit" type="button" onclick="submitAllForms()">СОХРАНИТЬ</button>
  </div>
  <section class="also container bottom_main">
    <p class="title">Читайте также</p>
    <div class="also-cases-container" id="alsoCasesContainer">
      <!-- <a href="#" class="also-case">
          <div class="container_img">
            <img src="../../backend/project/uploads/lodka.jpg"" alt="" />
          </div>
          <p class="category">Маркировка</p>
          <p class="also-case-title">
            Сдача отчетности <span class="nowrap">по рекламе</span> в интернете
          </p>
        </a>
        <a href="#" class="also-case">
          <div class="container_img">
            <img src="../../backend/project/uploads/lodka.jpg"" alt="" />
          </div>
          <p class="category">Маркировка</p>
          <p class="also-case-title">
            Сдача отчетности <span class="nowrap">по рекламе</span> в интернете
          </p>
        </a>
        <a href="#" class="also-case">
          <div class="container_img">
            <img src="../../backend/project/uploads/lodka.jpg"" alt="" />
          </div>
          <p class="category">Маркировка</p>
          <p class="also-case-title">
            Сдача отчетности <span class="nowrap">по рекламе</span> в интернете
          </p>
        </a> -->
    </div>
  </section>
  <footer class="container footer container">
    <div class="desktop">
      <div class="left">
        <p class="title-footer">Готовы начать?...</p>
      </div>
    </div>
  </footer>
  <script src="./scripts/addCase.js"></script>
</body>

</html>
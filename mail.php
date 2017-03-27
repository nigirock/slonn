<?php

$recepient = "chistyi.slon@gmail.com";
$sitename = "Чистый слон";

$name = trim($_POST["name"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nСообщение: $text";

$pagetitle = "Новый отзыв с сайта";
mail($recepient,$pagetitle,$message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
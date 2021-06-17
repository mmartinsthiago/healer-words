<?php

//$file = 'index.html';

if (isset($_COOKIE['lang']) && (!isset($_GET['lang']))){
    switch ($_COOKIE['lang']) {
        case 'pt-br':
            setcookie('lang', 'pt-br', time()+604800);
            require_once './Views/PT-BR/index.html';
            break;
        default:
            setcookie('lang', 'en-us', time()+604800);
            require_once './Views/EN-US/index.html';
            break;
    }
} else {
    switch ($_GET['lang']) {
        case 'pt-br':
            setcookie('lang', 'pt-br', time()+604800);
            require_once './Views/PT-BR/index.html';
            break;
        default:
            setcookie('lang', 'en-us', time()+604800);
            require_once './Views/EN-US/index.html';
            break;
    }
}
?>
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include_once(dirname(__FILE__) . "/database.php");


$db = new Database;

$db->query("INSERT INTO browserplay_games (`name`, `link`, `likes`, `dislikes`) VALUES ('Pixel-Adventure', 'rmbi.ch/vital/pad', 976, 454)");
echo "<h1>Je suis un géni</h1>";
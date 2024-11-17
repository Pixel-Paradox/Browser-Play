<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include_once(dirname(__FILE__) . "/database.php");
header('Content-Type: application/json');


$db = new Database;


$games = $db -> select("SELECT * FROM browserplay_games");

echo json_encode($games);
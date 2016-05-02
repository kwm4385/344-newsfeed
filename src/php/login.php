<?php
// ini_set('display_errors', 1);
$user = $_POST["username"];
$password = $_POST["password"];

$file = "users.json";

$json = json_decode(file_get_contents($file), true);

if(!is_null($json[$user]) && $json[$user]['password'] == $password) {
  header('X-PHP-Response-Code: 200', true, 200);
} else {
  echo 'Invalid username or password';
  header('X-PHP-Response-Code: 401', true, 401);
}
?>

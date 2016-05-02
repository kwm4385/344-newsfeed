<?php
$user = $_POST["username"];
$password = $_POST["password"];

$file = "users.json";

$json = json_decode(file_get_contents($file), true);

if(!is_null($json[$user]) && $json[$user]['password'] == $password) {
  http_response_code(200);
} else {
  echo 'Invalid username or password';
  http_response_code(401);
}
?>

<?php
  // ini_set('display_errors', 1);
  $user = $_POST["username"];
  $password = $_POST["password"];

  $file = "users.json";

  $json = json_decode(file_get_contents($file), true);

  if(is_null($json[$user])) {
    $json[$user] = array("password" => $password);

    file_put_contents($file, json_encode($json));

    header('X-PHP-Response-Code: 200', true, 200);
  } else {
    echo 'User already exists';
    header('X-PHP-Response-Code: 400', true, 400);
  }

?>

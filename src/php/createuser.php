<?php
  $user = $_POST["username"];
  $password = $_POST["password"];

  $file = "users.json";

  $json = json_decode(file_get_contents($file), true);

  if(is_null($json[$user])) {
    $json[$user] = array("password" => $password);

    file_put_contents($file, json_encode($json));

    http_response_code(200);
  } else {
    http_response_code(400);
  }

?>

<?php
$maxSize = 990 * 1024 * 1024; // zamiana MB na bajty

$allowedTypes = [
  'video/mp4',
  'video/quicktime',
  'video/webm',
  'video/x-msvideo',
  'video/x-matroska',
  'video/3gpp',
  'video/x-flv',
  'video/x-ms-wmv',
  'application/zip',
  'application/x-zip-compressed',
  'application/vnd.rar'
];
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime = finfo_file($finfo, $_FILES['file']['tmp_name']);
finfo_close($finfo);

if (!in_array($mime, $allowedTypes)) {
  http_response_code(400);
  echo 'Niedozwolony typ pliku!';
  exit;
}

if ($_FILES['file']['size'] > $maxSize) {
  http_response_code(400);
  echo 'Plik jest za duży!';
  exit;
}

if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
  $name = preg_replace('/[^a-zA-Z0-9_\-]/', '', $_POST['name']);

  if (!file_exists('uploads/' . $name)) {
    mkdir('uploads/' . $name);
  }

  move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $name . '/' . basename($_FILES['file']['name']));
} else {
  http_response_code(400);
  echo 'Błąd uploadu';
}

<?php
header('Content-Type: application/json');

$host = 'localhost';
$dbname = 'watson-portfolio';  
$username = 'root';    
$password = '';     
$table_name = 'contacts'; 

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo json_encode(['errors' => ['Database connection failed.']]);
    exit;
}

$errors = [];

if (!empty($_POST['company'])) {
    $errors[] = 'Spam detected.';
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if (empty($name)) {
    $errors[] = 'Name field is empty.';
}

if (strlen($name) < 2) {
    $errors[] = 'Name must be at least 2 characters.';
}

if (empty($email)) {
    $errors[] = 'Email field is empty.';
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email is not a valid email.';
}

if (empty($message)) {
    $errors[] = 'Message field is empty.';
}

if (strlen($message) < 10) {
    $errors[] = 'Message must be at least 10 characters.';
}

if (!empty($errors)) {
    echo json_encode(['errors' => $errors]);
    exit;
}

try {
    $stmt = $pdo->prepare("INSERT INTO $table_name (name, email, message) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $message]);
    echo json_encode(['message' => 'Thank you! Your message has been sent successfully.']);
} catch(PDOException $e) {
    echo json_encode(['errors' => ['Database error occurred.']]);
}
?>
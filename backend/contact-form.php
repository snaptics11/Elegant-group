<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';
require __DIR__ . '/PHPMailer/src/Exception.php';

// Allow only trusted origins
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed_origins = [
    'http://localhost:5173',
    'https://myelegantgroup.com',
];

if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}

header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight (OPTIONS) request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $mobile = $_POST['mobile'] ?? '';
    $location = $_POST['location'] ?? '';

    $mail = new PHPMailer(true);

    try {
        // SMTP config
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'primelandindiagroup@gmail.com';
        $mail->Password = 'opcu byxm kttt iqnb'; // Use App Password, not account password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email setup
        $mail->setFrom('primelandindiagroup@gmail.com', 'Primeland Website - Contact Form');
        $mail->addAddress('haritha@snaptics.in');
        $mail->addAddress('operations@snaptics.in');

        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "
            <h2>Contact Submission</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Mobile:</strong> {$mobile}</p>
            <p><strong>Location:</strong> {$location}</p>
        ";

        $mail->send();
        echo 'success';
    } catch (Exception $e) {
        error_log('Mail error: ' . $mail->ErrorInfo);
        echo 'error';
    }
} else {
    echo 'Invalid Request';
}
?>

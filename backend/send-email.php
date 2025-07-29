<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';
require __DIR__ . '/PHPMailer/src/Exception.php';

// Allow CORS from frontend port (5173)
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Handle preflight request
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'] ?? '';
    $mobile = $_POST['mobile'] ?? '';
    $plotRange = $_POST['plotRange'] ?? '';

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'primelandindiagroup@gmail.com'; 
        $mail->Password = 'opcu byxm kttt iqnb'; // App password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('primelandindiagroup@gmail.com', 'Primeland Website');
        $mail->addAddress('haritha@snaptics.in');
        $mail->addAddress('operations@snaptics.in');

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Brochure Download Enquiry';
        $mail->Body = "
            <h2>New Brochure Request</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Mobile:</strong> {$mobile}</p>
            <p><strong>Plot Range:</strong> {$plotRange}</p>
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

<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

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
        $mail->Username = 'primelandindiagroup@gmail.com'; // Your Gmail
        $mail->Password = 'YOUR_APP_PASSWORD'; // Gmail App Password, not Gmail login
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
        error_log('Mail error: ' . $mail->ErrorInfo); // log it for debugging
        echo 'error';
    }
}
?>

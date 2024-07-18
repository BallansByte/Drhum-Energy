<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email configuration
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->SMTPDebug = 0;                      // Enable verbose debug output
        $mail->isSMTP();                           // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';            // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                    // Enable SMTP authentication
        $mail->Username = 'maballans@gmail.com';  // SMTP username (replace with your Gmail address)
        $mail->Password = 'Opensesame_1!';         // SMTP password (replace with your Gmail password)
        $mail->SMTPSecure = 'tls';                 // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                         // TCP port to connect to

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('maballans@gmail.com'); // Add a recipient (replace with your email address)

        // Content
        $mail->isHTML(true);                       // Set email format to HTML
        $mail->Subject = "New Contact Form Submission from $name";
        $mail->Body    = "
            <h2>Contact Form Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong></p>
            <p>$message</p>
        ";

        $mail->send();
        // Redirect to a thank you page
        header('Location: thank_you.html');
        exit;
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>

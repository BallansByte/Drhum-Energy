<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email configuration
    $to = 'maballans@gmail.com'; // Replace with your email address
    $subject = "New Contact Form Submission from $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Compose email
    $email_content = "
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong></p>
        <p>$message</p>
    ";

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirect to a thank you page
        header('Location: thank_you.html');
        exit;
    } else {
        echo 'Sorry, something went wrong. Please try again later.';
    }
}
?>

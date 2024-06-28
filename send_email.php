<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form fields
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Email settings
    $to = 'contact@doingourbit.org.uk';
    $from = 'contact@doingourbit.org.uk';
    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";

    // Create email body
    $email_body = "
    <html>
    <head>
      <title>$subject</title>
    </head>
    <body>
      <p><strong>Name:</strong> $name</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>Subject:</strong> $subject</p>
      <p><strong>Message:</strong></p>
      <p>$message</p>
    </body>
    </html>";

    // Send email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Message delivery failed.";
    }
} else {
    echo "Invalid request method.";
}
?>
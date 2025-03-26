<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    
    // Simulasi pengiriman pesan (dapat diganti dengan fungsi mail())
    echo json_encode(["status" => "success", "message" => "Terima kasih, $name. Pesan Anda telah dikirim."]);
    exit;
}
?>
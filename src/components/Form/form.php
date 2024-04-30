<?php

// Sprawdzamy, czy skrypt został wywołany z metodą POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Przyjmij dane przesłane z formularza
    $firstName = isset($_POST['firstName']) ? trim($_POST['firstName']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';

    // Sprawdzanie, czy pola nie są puste
    $errors = [];
    if (empty($firstName)) {
        $errors['firstName'] = 'Imię jest wymagane.';
    }
    if (empty($email)) {
        $errors['email'] = 'Email jest wymagany.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Podany email jest nieprawidłowy.';
    }
    if (empty($subject)) {
        $errors['subject'] = 'Temat jest wymagany.';
    }
    if (empty($message)) {
        $errors['message'] = 'Wiadomość jest wymagana.';
    }

    // Obsługa błędów
    if (!empty($errors)) {
        echo json_encode(['errors' => $errors]);
        http_response_code(400); // Niepoprawne żądanie
    } else {
        // Tutaj można zaimplementować logikę, np. wysyłanie emaila czy zapis do bazy danych
        echo json_encode(['success' => 'Dane zostały pomyślnie przesłane.']);
        http_response_code(200); // OK
    }
} else {
    // Metoda nie jest POST, zwróć błąd
    http_response_code(405); // Metoda niedozwolona
    echo json_encode(['error' => 'Niedozwolona metoda żądania.']);
}

?>

<?php
// ============================================================================
// Subscriber intake endpoint
// ----------------------------------------------------------------------------
// DB credentials are NOT stored in this file. They live in a `db_config.php`
// file placed OUTSIDE the web root (above public_html) so it can never be
// served as plain text even if PHP misbehaves.
//
// Expected file: <somewhere above public_html>/private_config/db_config.php
//
// The script walks up the directory tree from itself looking for that file,
// which makes it work regardless of Hostinger's exact path layout.
// ============================================================================

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://typogrammar.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('X-Content-Type-Options: nosniff');

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// --- Locate db_config.php OUTSIDE the web root ---
// Walks up from this script's directory looking for /private_config/db_config.php.
// Works regardless of Hostinger's exact path layout.
function locate_db_config(): ?string {
    $dir = __DIR__;
    for ($i = 0; $i < 8; $i++) {
        $candidate = $dir . '/private_config/db_config.php';
        if (is_file($candidate)) {
            return $candidate;
        }
        $parent = dirname($dir);
        if ($parent === $dir) {
            break; // reached filesystem root
        }
        $dir = $parent;
    }
    return null;
}

$configPath = locate_db_config();
if ($configPath === null) {
    http_response_code(500);
    error_log('subscribe.php: db_config.php not found above web root');
    echo json_encode(['success' => false, 'message' => 'Server configuration error']);
    exit();
}

$cfg = require $configPath;
if (!is_array($cfg) || empty($cfg['host']) || empty($cfg['name']) || empty($cfg['user']) || !isset($cfg['pass'])) {
    http_response_code(500);
    error_log('subscribe.php: db_config.php is malformed');
    echo json_encode(['success' => false, 'message' => 'Server configuration error']);
    exit();
}

// --- Read and decode JSON body ---
$raw = file_get_contents('php://input');
$input = json_decode($raw, true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request body']);
    exit();
}

// --- Sanitize inputs ---
$firstName = trim(strip_tags($input['first_name'] ?? ''));
$lastName  = trim(strip_tags($input['last_name']  ?? ''));
$phone     = trim(strip_tags($input['phone']      ?? ''));
$email     = trim(strip_tags($input['email']      ?? ''));
$country   = trim(strip_tags($input['country']    ?? ''));

// --- Validate ---
if (empty($firstName) || mb_strlen($firstName) > 100) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'First name is required (max 100 characters)']);
    exit();
}

if (mb_strlen($lastName) > 100) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Last name is too long (max 100 characters)']);
    exit();
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 255) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'A valid email address is required']);
    exit();
}

if (empty($country) || mb_strlen($country) > 100) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Country is required']);
    exit();
}

if (!empty($phone) && mb_strlen($phone) > 25) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Phone number is too long']);
    exit();
}

// Basic phone format check if provided
if (!empty($phone) && !preg_match('/^\+?[\d\s\-\(\)]{7,25}$/', $phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid phone number format']);
    exit();
}

// --- Connect to database ---
try {
    $pdo = new PDO(
        "mysql:host={$cfg['host']};dbname={$cfg['name']};charset=utf8mb4",
        $cfg['user'],
        $cfg['pass'],
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]
    );
} catch (PDOException $e) {
    http_response_code(500);
    error_log('subscribe.php DB connect failed: ' . $e->getMessage());
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit();
}

// --- Check for duplicate email ---
try {
    $stmt = $pdo->prepare('SELECT id FROM subscribers WHERE email = ? LIMIT 1');
    $stmt->execute([$email]);
    if ($stmt->fetch()) {
        http_response_code(409);
        echo json_encode(['success' => false, 'message' => 'This email is already subscribed!']);
        exit();
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error while checking email']);
    exit();
}

// --- Insert subscriber ---
try {
    $stmt = $pdo->prepare(
        'INSERT INTO subscribers (first_name, last_name, phone, email, country)
         VALUES (:first_name, :last_name, :phone, :email, :country)'
    );
    $stmt->execute([
        ':first_name' => $firstName,
        ':last_name'  => $lastName,
        ':phone'      => $phone ?: null,
        ':email'      => $email,
        ':country'    => $country,
    ]);
    echo json_encode(['success' => true, 'message' => 'You\'re in! Welcome to the TypoGrammar community.']);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to save your subscription. Please try again.']);
    exit();
}

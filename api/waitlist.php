<?php
require_once('../connection.php');
require_once('../models/waitingListModel.php');
require_once('../controllers/waitingListController.php');

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    $response['success'] = false;
    $response['message'] = "Error: Invalid request method.";
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}

// Retrieve the JSON data from the request body
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

$response = array();

if (isset($data["name"]) && isset($data["email"])) {
    $waitingList = new WaitingListModel(null, $data["name"], $data["email"]);
    WaitingListController::insert($waitingList);

    $response['success'] = true;
    $response['message'] = "Added to the waitlist.";
} else {
    $response['success'] = false;
    $response['message'] = "There was an error.";
}

header('Content-Type: application/json');
echo json_encode($response);

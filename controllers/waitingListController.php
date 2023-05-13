<?php
require_once('../models/waitingListModel.php');

class WaitingListController
{
    public function __construct()
    {        
    }

    public static function insert(WaitingListModel $waitingList = null)
    {
        $db = Db::getInstance();
        $stmt = $db->prepare('
            INSERT INTO `waitingList` (`name`, `email`, `timestamp`)
            VALUES (:name, :email, NOW())
        ');
        $stmt->bindParam(':name', $waitingList->name);
        $stmt->bindParam(':email', $waitingList->email);
        $stmt->execute();
    }
}

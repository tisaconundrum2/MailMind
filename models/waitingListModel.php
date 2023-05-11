<?php
require_once('connection.php');

class WaitingListModel
{
    public $id;
    public $name;
    public $email;

    public function __construct($id = null, $name, $email)
    {
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
    }

    public static function createTable()
    {
        $db = Db::getInstance();
        $db->query('
            CREATE TABLE IF NOT EXISTS `waitingList` (
            `id` int(255) NOT NULL AUTO_INCREMENT,
            `name` varchar(1000) NOT NULL,
            `email` varchar(1000) NOT NULL,
            `timestamp` datetime NOT NULL DEFAULT current_timestamp(),
            PRIMARY KEY (`id`)
            );
        ');
    }
}

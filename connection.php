<?php
include('config.php');

class Db
{
    private static $instance = NULL;

    private function __construct()
    {
    }

    private function __clone()
    {
    }

    public static function getInstance()
    {
        if (!isset(self::$instance)) {
            $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;

            $db_host = HOST;
            $db_name = DB_NAME;
            $db_user = DB_USERNAME;
            $db_pass = DB_PASSWORD;


            self::$instance = new PDO(
                "mysql:host={$db_host};dbname={$db_name}",
                $db_user,
                $db_pass,
                $pdo_options
            );
        }
        return self::$instance;
    }
}

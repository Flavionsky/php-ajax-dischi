<?php

require_once __DIR__ . '/database/db.php';


foreach ($database["response"] as $data) {
    echo "<ul style='list-style-type: none;'>";
        echo "<h3>Song info</h3>";
        foreach ($data as $info) {
            echo "<li>" . $info . "</li>";
        }
    echo "</ul>";
}


?>
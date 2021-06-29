<?php

require_once '../src/twig.php';
require_once '../src/db_conn.php';


session_start();

date_default_timezone_set("Asia/Karachi");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $date = date("d/m/Y");

    $sql1 = $conn->prepare("SELECT * FROM timings ORDER BY Date DESC LIMIT 1");
    $sql1->execute();
    $times = $sql1->fetchAll();

    echo $twig->render('timing.html.twig', array (
        'start_time'=>$times[0]['start_time'], 'launch_time'=>$times[0]['launch_time'],'date'=>$times[0]['Date']
    ));
        return;
    } 

elseif ($_SERVER['REQUEST_METHOD'] === 'POST'){
    if($_POST['message']==='send time'){
        $datex = date('h:i:s A');
        $arr = [];
        $sql1 = $conn->prepare("SELECT * FROM timings ORDER BY Date DESC LIMIT 1");
        $sql1->execute();
        $times = $sql1->fetchAll();
        array_push($arr,$times[0]['start_time'],$times[0]['launch_time'],$times[0]['Date'],$datex);
        $_SESSION['update']=false;
        echo json_encode($arr);
        return;
        
    
    
}
}

?>
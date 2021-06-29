<?php
require_once './twig.php';
require_once './db_conn.php';

session_start();

date_default_timezone_set("Asia/Karachi");


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $date = date("d/m/Y");
    echo $twig->render('time_set.html.twig', array (
        'date'=>$date
    ));
    return;
    }

elseif ($_SERVER['REQUEST_METHOD'] === 'POST'){
    if($_POST['message']==='send time'){
        $datex = date('h:i:s A');
        echo json_encode($datex);
        
}    



    if($_POST['message']==='store_start_time'){
        
        $sql1 = $conn->prepare("SELECT * FROM timings WHERE Date=?");
        $sql1->execute(array(date("Y-m-d")));
        $times = $sql1->fetchAll();

        if(count($times) === 0){
            $sql1 = $conn->prepare("INSERT INTO timings(Date, start_time) VALUES(?,?)");
            $sql1->execute(array(date("Y-m-d"),date('h:i A')));
        }
        else{
            echo json_encode("Failed. Start time already set for today.");
            return;
        }
        
        $_SESSION['update'] = true;
        echo json_encode("success");


        
}

    if($_POST['message']==='store_launch_time'){

        $sql1 = $conn->prepare("SELECT * FROM timings where Date=?");
        $sql1->execute(array(date("Y-m-d")));
        $times = $sql1->fetchAll();

        if(count($times) === 0){
            echo json_encode("Failed. First set the start time for today.");
            return;
        }

        if($times[0]['launch_time'] === NULL){
            $sql1 = $conn->prepare("UPDATE timings SET launch_time = ? WHERE Date = ? ");
            $sql1->execute(array(date('h:i A'),date("Y-m-d") ));
            $times = $sql1->fetchAll();
        }
        else{
            echo json_encode("Failed. Launch time already set for today.");
            return;
        }

        $_SESSION['update'] = true;
        echo json_encode("success");

        

}
return;
}






header("Location: ../public/index.php");
        return;


?>
document.addEventListener('DOMContentLoaded', function() {
            /*
            function startTime() {
                var today = new Date();
                var h = today.getHours();
                var m = today.getMinutes();
                var s = today.getSeconds();
                m = checkTime(m);
                s = checkTime(s);
                document.getElementById('time').innerHTML =
                h + ":" + m + ":" + s;
                var t = setTimeout(startTime, 1000);
              }
              function checkTime(i) {
                if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
                return i;
              }
              startTime();
              */
              if ( document.querySelector(".start")!=null){
                document.querySelector(".start").onclick = function(){
                  let fd = new FormData();
                  fd.append("message", "store_start_time")
                  fetch("http://localhost:8080/dashboard/psx_ahmad/src/set_time.php", {
                    method: 'POST',
                    body: fd,
                  })
                  .then(response => {
                    console.log(response);
                    return response.json();
                  })
                  .then(result => {
                    console.log(result);
                    alert(result);
                  })
                }
              }

              if ( document.querySelector(".launch")!=null){
                document.querySelector(".launch").onclick = function(){
                  let fd = new FormData();
                  fd.append("message", "store_launch_time")
                  fetch("http://localhost:8080/dashboard/psx_ahmad/src/set_time.php", {
                    method: 'POST',
                    body: fd,
                  })
                  .then(response => {
                    console.log(response);
                    return response.json();
                  })
                  .then(result => {
                    console.log(result);
                    alert(result);
                  })
                }
              }
              



              
              function startTime2() {
                let fd = new FormData();
                fd.append("message", "send time")
                fetch("http://localhost:8080/dashboard/psx_ahmad/src/set_time.php", {
                  method: 'POST',
                  body: fd,
                })
                .then(response => {
                  //console.log(response);
                  return response.json();
                })
                .then(result => {
                  console.log(result);
                  if(Array.isArray(result)){
                    console.log(result[0]);
                    document.getElementById('time').innerHTML = result[3];
                    document.querySelector('.stime').innerHTML = `Start Time: ${result[0]}`;
                    if(result[1]===null){
                      document.querySelector('.ltime').innerHTML = 'Launch Time:';
                    }
                    else{
                      document.querySelector('.ltime').innerHTML = `Launch Time: ${result[1]}`;
                    }
                    document.querySelector('.date').innerHTML = result[2];
                  }
                  else{
                  document.getElementById('time').innerHTML = result;
                  }
                })

           
                var t = setTimeout(startTime2, 1000);
        }
              startTime2();
              return false;
        }
      
        


    
        
    



)
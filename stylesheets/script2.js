document.addEventListener('DOMContentLoaded', function() {


  
    
    function startTime2() {
        let fd = new FormData();
        fd.append("message", "send time")
        fetch("http://localhost:8080/dashboard/psx_ahmad/public/", {
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
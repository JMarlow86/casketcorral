



   

   
   function play() {
     var audio = document.getElementById("audio");
     audio.play();
   }
 
 

              function myFunction() {
                var x = document.createElement("INPUT");
                x.setAttribute("type", "date");
                x.setAttribute("value", "2014-02-09");
                document.body.appendChild(x);
              }
              function geekConfirm() {
                var x;
                if (confirm("Press a button!") == true) {
                    x = "OK pressed!";
                } else {
                    x = "Cancel!";
                }
                document.getElementById("geek").innerHTML = x;
            }

            var modal = document.getElementById("myModal");


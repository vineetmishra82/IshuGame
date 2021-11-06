var box = document.getElementById("box");
var isInvisible = false;

document.getElementById("left").addEventListener("click",function(){

box.setAttribute("style","margin-left: 20%;");




});

document.getElementById("right").addEventListener("click",function(){

    box.setAttribute("style","margin-left: 60%;");
    player.src = "forward.m4a";
    player.play();
    
    
    });

    document.getElementById("up").addEventListener("click",function(){

        box.setAttribute("style","margin-top: 0px;");
        
        
        });

        document.getElementById("down").addEventListener("click",function(){

            box.setAttribute("style","margin-top: 10%;");
           
            
            });

            document.getElementById("up").addEventListener("click",function(){

                box.setAttribute("style","margin-top: 0px;");
                
                
                });

                document.getElementById("vanish").addEventListener("click",function(){
if(!isInvisible)
{
    document.getElementById("pic").style.visibility = "hidden";
    document.getElementById("vanish").innerText ="Bring back"
    isInvisible = true;

}
else{
    document.getElementById("pic").style.visibility = "visible";
    document.getElementById("vanish").innerText ="Obliviate";
    isInvisible = false;
}
                    
                    
                    });
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn_reset");
let newbtn = document.querySelector("#btn_new");
let msgcontainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
 let turn0 = true; // decide the turn
 let countbtnclicks=0;
 const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0) 
        {
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText= "X";
            turn0= true;
        }
        box.disabled = true;
        countbtnclicks++;
        checkwinner();
    })
 })

 const resetgame=()=>{
    turn0 = true;
    countbtnclicks = 0;
    enableboxes();
    msgcontainer.classList.add("hide");

 }

 const enableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
 }
 const disableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
 }
 const showwinner=(winner)=>{
    msg.innerText= `Congrats ${winner} you are the winner`;
    msgcontainer.classList.remove("hide");
    disableboxes();
 }
 const draw=()=>{
    msg.innerText= "This match is said to be Draw";
    msgcontainer.classList.remove("hide");
    disableboxes();
 }

 const checkwinner = ()=>{

    
    for(let pattern of winpatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                
                showwinner(pos1);              
            }
            else if(pos1!=pos2 && pos2!=pos3 && countbtnclicks ===9)
            {
                draw();
            }
        }
              

    }
 }

 newbtn.addEventListener("click", resetgame);
 resetbtn.addEventListener("click", resetgame);
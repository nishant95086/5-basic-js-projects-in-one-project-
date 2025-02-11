const buttons = document.querySelectorAll(".box1");
const body = document.querySelector("body");

buttons.forEach(btn => {
    btn.addEventListener('click', e =>{
        console.log(e.target);
        if(e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === "blue") {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === "red") {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === "green") {
            body.style.backgroundColor = e.target.id;
        }else{
            body.style.backgroundColor = "white";
        }
    })
});
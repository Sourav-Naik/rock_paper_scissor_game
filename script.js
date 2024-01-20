let uS = 0;
let cS = 0;
let result = document.querySelector("#result");
const options = document.querySelectorAll(".option");

const comChoice = () => {
    const choice2 = ["rock","paper","scissor"];
    let idx = Math.floor(Math.random()*3);
    return choice2[idx];
}

options.forEach((o) => {
    o.addEventListener("click",() => {
        let user = o.getAttribute("id");
        game(user);
        }
    );   
    }
);

const game = (user) =>{
    const comp = comChoice();
    if(user === comp){
        result.innerText = "It's a Draw";
        result.style.background="#9046cf";
        }
   else if(user === "paper")
        {
            if(comp === "scissor"){
                result.innerText = "You lost! Scissor Beats Paper";
                cS++;
                result.style.background="red";
            }
            else{
                result.innerText = "You Won! Paper Beats Rock";
                uS++;
                result.style.background="green";
            }

        }
    else if(user === "scissor")
        {
            if(comp === "rock"){
                result.innerText = "You lost! Rock Beats Scissor";
                cS++;
                result.style.background="red";
            }
            else{
                result.innerText = "You Won! Scissor Beats Paper";
                uS++;
                result.style.background="green";
            }
            
        }
    else
        {
            if(comp === "paper"){
                result.innerText = "You lost! Paper Beats Rock";
                cS++;
                result.style.background="red";
            }
            else{
                result.innerText = "You Won! Rock Beats Scissor";
                uS++;
                result.style.background="green";
            }
            
        }
    document.querySelector("#plCot").innerText=uS;
    document.querySelector("#comCot").innerText=cS;

}



let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let playerA = document.getElementById("playerA");
let playerB = document.getElementById("playerB");
playerA.style.visibility = "visible"


let turnA = true //playerA,playerB
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
function playerAVisible() {
    playerB.style.visibility = "hidden"
    playerA.style.visibility = "visible"
}
function playerBVisible() {
    playerA.style.visibility = "hidden"
    playerB.style.visibility = "visible"
}


const resetGame = () => {
    turnA = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
    playerA.style.visibility = "visible"
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log(box);
        if (turnA) {
            box.innerText = "O";
            turnA = false;
            playerBVisible();
        }
        else {
            box.innerText = "X";
            turnA = true;
            playerAVisible();



        }
        box.disabled = true;
        checkWinner();
        count++;
        if (count === 9) {
            disabBoxes();
            msg.innerText = `Its a draw`;
            msgContainer.classList.remove("hide");
            playerA.style.visibility = "hidden"
            playerB.style.visibility = "hidden"


        }
    });

})

const disabBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    if (winner === "X") {
        msg.innerText = `Congratulation Winner is Player B`;
    }
    else {
        msg.innerText = `Congratulation Winner is Player A`;

    }
    msgContainer.classList.remove("hide");
    disabBoxes();
    playerA.style.visibility = "hidden"
    playerB.style.visibility = "hidden"
};
const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("you won");

                showWinner(pos1);
            }
        }
    }

};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
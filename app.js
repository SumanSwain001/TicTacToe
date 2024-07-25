let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let msgContainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new");


let turn0 = true;

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

let resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            box.style.color = "#0c80a1";
            turn0 = false;
        }
        else {
            box.innerText = "x";
            box.style.color = "#ad0ab2";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

let disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

let enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

let showWinner = (winner) => {
    msg.innerText = `Congratulation! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

let checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }

    }
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

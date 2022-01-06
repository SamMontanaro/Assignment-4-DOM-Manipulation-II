const leftText = document.getElementById("left-btn-text");
const rightText = document.getElementById("right-btn-text");

document.getElementById("form").onsubmit = function() {submit(); return false};

let leftBtn = () => {
    leftText.style.opacity = "100%";
    leftText.style.cursor = "text";
    rightText.style.opacity = "0%";
    rightText.style.cursor = "default";
}

let rightBtn = () => {
    rightText.style.opacity = "100%";
    rightText.style.cursor = "text";
    leftText.style.opacity = "0%";
    leftText.style.cursor = "default";
}

let noHover = () => {
    alert("Hey, I told you not to hover over me!");
}

let submit = () => {
    const formCorrect = document.getElementById("formCorrect");

    const data = new FormData(document.querySelector("form"));
    const pw = data.get("pw");
    console.log(pw);
    if (pw == "12345678") {
        formCorrect.style.opacity = "100%";
        formCorrect.innerText = "Password correct";
    }
    else {
        formCorrect.style.opacity = "0%";
        alert("Password incorrect, try again!");
    }
}
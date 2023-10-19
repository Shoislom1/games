alert("Well done you passed 1 level behind 2 more")
alert("Second level here you need to press the button")


let btn = document.getElementById("btn");

function Click(){
    let dTop = Math.floor(Math.random() * 500);
    let dleft =Math.floor(Math.random() * 1000);

    btn.style.position = "absolute";
    btn.style.top = `${dTop}px`;
    btn.style.left = `${dleft}px`;
}


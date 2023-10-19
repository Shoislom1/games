let btn = document.getElementById("btn");

function Click(){
    let dTop = Math.floor(Math.random() * 500);
    let dleft =Math.floor(Math.random() * 1000);

    btn.style.position = "absolute";
    btn.style.top = `${dTop}px`;
    btn.style.left = `${dleft}px`;
}


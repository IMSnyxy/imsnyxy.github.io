const shapeClasses = document.querySelectorAll('.shapes');

function reset(){
    shapeClasses.forEach(element => {
        element.classList.add('hide');
    });

    document.getElementById("sunday-shape").style.backgroundColor = "#ff0000";
    document.getElementById("sunday-shape").style.zIndex = "2";
    document.getElementById("sunday-shape").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
    document.getElementById("monday-shape").style.backgroundColor = "#ff3c00";
    document.getElementById("monday-shape").style.zIndex = "2";
    document.getElementById("monday-shape").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
    document.getElementById("tuesday-shape").style.backgroundColor = "#ffd000";
    document.getElementById("tuesday-shape").style.zIndex = "2";
    document.getElementById("tuesday-shape").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
    document.getElementById("wednesday-shape").style.backgroundColor = "#15ff00";
    document.getElementById("wednesday-shape").style.zIndex = "2";
    document.getElementById("wednesday-shape").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
    document.getElementById("thursday-shape").style.backgroundColor = "#006eff";
    document.getElementById("thursday-shape").style.zIndex = "2";
    document.getElementById("thursday-shape").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
    document.getElementById("friday-shape").style.backgroundColor = "#AF40FF";
    document.getElementById("friday-shape").style.zIndex = "2";
    document.getElementById("friday-shape").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
    document.getElementById("saturday-shape").style.backgroundColor = "#ff45b1";
    document.getElementById("saturday-shape").style.zIndex = "2";
    document.getElementById("saturday-shape").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
}

reset();
document.getElementById("sunday-shape").classList.remove('hide');
document.getElementById("sunday-shape").style.backgroundColor = "transparent";
document.getElementById("sunday-shape").style.zIndex = "10";
document.getElementById("sunday-shape").style.boxShadow = "0px 0px 37px -3px rgba(255,0,0,0.77)";

function lightDark() {
    document.getElementById("dark").classList.toggle("light-mode");
    document.body.classList.toggle("light-bg");
}

function select(days) {
    shapeClasses.forEach(element => {
        element.classList.add('hide');
        element.style.transitionProperty = "translate, background-color, box-shadow";
        element.style.transitionDelay = "0s, 0s, 1.3s";
        element.style.transitionDuration = "1.5s, 1.5s, 0.5s";
        element.style.transitionTimingFunction = "ease-in-out, ease-in-out, ease-out";
    });
    switch (days) {
        case 0:
            console.log("Sunday")
            reset();
            document.getElementById("sunday-shape").classList.remove('hide');
            document.getElementById("sunday-shape").style.backgroundColor = "transparent";
            document.getElementById("sunday-shape").style.zIndex = "10";
            document.getElementById("sunday-shape").style.boxShadow = "0px 0px 37px -3px rgba(255,0,0,0.77)";
            break;
        case 1:
            console.log("Monday")
            reset();
            document.getElementById("monday-shape").classList.remove('hide');
            document.getElementById("monday-shape").style.backgroundColor = "transparent";
            document.getElementById("sunday-shape").style.zIndex = "10";
            document.getElementById("monday-shape").style.boxShadow = "0px 0px 37px -3px rgba(255, 115, 0, 0.77)";
            break;
        case 2:
            console.log("Tuesday")
            reset();
            document.getElementById("tuesday-shape").classList.remove('hide');
            document.getElementById("tuesday-shape").style.backgroundColor = "transparent";
            document.getElementById("tuesday-shape").style.zIndex = "10";
            document.getElementById("tuesday-shape").style.boxShadow = "0px 0px 37px -3px rgba(255, 230, 0, 0.77)";
            break;
        case 3:
            console.log("Wednesday")
            reset();
            document.getElementById("wednesday-shape").classList.remove('hide');
            document.getElementById("wednesday-shape").style.backgroundColor = "transparent";
            document.getElementById("wednesday-shape").style.zIndex = "10";
            document.getElementById("wednesday-shape").style.boxShadow = "0px 0px 37px -3px rgba(21, 255, 0, 0.77)";
            break;
        case 4:
            console.log("Thursday")
            reset();
            document.getElementById("thursday-shape").classList.remove('hide');
            document.getElementById("thursday-shape").style.backgroundColor = "transparent";
            document.getElementById("thursday-shape").style.zIndex = "10";
            document.getElementById("thursday-shape").style.boxShadow = "0px 0px 37px -3px rgba(0, 153, 255, 0.77)";
            break;
        case 5:
            console.log("Friday")
            reset();
            document.getElementById("friday-shape").classList.remove('hide');
            document.getElementById("friday-shape").style.backgroundColor = "transparent";
            document.getElementById("friday-shape").style.zIndex = "10";
            document.getElementById("friday-shape").style.boxShadow = "0px 0px 37px -3px rgba(162, 0, 255, 0.77)";
            break;
        case 6:
            console.log("Saturday")
            reset();
            document.getElementById("saturday-shape").classList.remove('hide');
            document.getElementById("saturday-shape").style.backgroundColor = "transparent";
            document.getElementById("saturday-shape").style.zIndex = "10";
            document.getElementById("saturday-shape").style.boxShadow = "0px 0px 37px -3px rgba(255, 0, 212, 0.77)";
            break;
    }
}

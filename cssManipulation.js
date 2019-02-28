function changeColor()
{
    /*let para_ = document.getElementById("para"); this worked!
    para_.style.backgroundColor = "red";*/
    
    let b_Red = document.getElementById("b_redValue").value;
    let b_Green = document.getElementById("b_greenValue").value;
    let b_Blue = document.getElementById("b_blueValue").value;
    let b_Width = document.getElementById("b_width").value;

    let bg_Red = document.getElementById("bg_redValue").value;
    let bg_Green = document.getElementById("bg_greenValue").value;
    let bg_Blue = document.getElementById("bg_blueValue").value;

    b_Color = "rgb(" + b_Red + "," + b_Green + "," + b_Blue + ")";
    bg_Color = "rgb(" + bg_Red + "," + bg_Green + "," + bg_Blue + ")";

    let para_ = document.getElementById("para");

    para_.style.border = b_Width + "px solid " + b_Color;
    para_.style.backgroundColor = bg_Color;
}
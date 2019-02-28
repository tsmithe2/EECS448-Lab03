let imageArray = new Array();

imageArray[0] = new Image();
imageArray[0].src = "jayhawk1.jpg";
imageArray[1] = new Image();
imageArray[1].src = "jayhawk2.jpg";
imageArray[2] = new Image();
imageArray[2].src = "jayhawk3.jpg";
imageArray[3] = new Image();
imageArray[3].src = "jayhawk4.jpg";
imageArray[4] = new Image();
imageArray[4].src = "jayhawk5.jpg";

function next()
{
    let my_Img = document.getElementById("myImg");
    

    for (let i = 0; i < imageArray.length; i++)
    {
        if (imageArray[i].src == my_Img.src)
        {
            if (i == imageArray.length - 1)
            {
                document.getElementById("myImg").src = imageArray[0].src;
                break;
            }
            else
            {
                document.getElementById("myImg").src = imageArray[i + 1].src;
                break;
            }
        }
    }
}

function prev()
{
    let my_Img = document.getElementById("myImg");

    for (let i = 0; i < imageArray.length; i++)
    {
        if (imageArray[i].src == my_Img.src)
        {
            if (i == 0)
            {
                document.getElementById("myImg").src = imageArray[4].src;
                break;
            }
            else
            {
                document.getElementById("myImg").src = imageArray[i - 1].src;
                break;
            }
        }
    }
}
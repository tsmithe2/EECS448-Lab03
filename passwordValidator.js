function validate()
{
    let psswd_1 = document.getElementById("psswd1").value;
    let psswd_2 = document.getElementById("psswd2").value;
    
    if (psswd_1.length < 8 || psswd_2.length < 8)
    {
        alert("Passwords must be at least 8 characters in length.");
    }
    else if (psswd_1 != psswd_2)
    {
        alert("Passwords don't match!");
    }
    else
    {
        alert("Password has been validated.");
    }
}

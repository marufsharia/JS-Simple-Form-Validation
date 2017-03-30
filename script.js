function validateForm() {
    var str_firstName = document.forms["myForm"]["firstName"].value;
    var str_lastname = document.forms["myForm"]["lastName"].value;
    var str_phoneNO = document.forms["myForm"]["phoneNO"].value;
    var str_EmailID = document.forms["myForm"]["emailId"].value;
    var str_pass = document.forms["myForm"]["pass"].value;
    var str_cpass = document.forms["myForm"]["conPass"].value;
    if (str_firstName =="" || str_lastname=="" || str_phoneNO==""|| str_EmailID=="" || str_pass=="" || str_cpass=="")
    {
        document.getElementById("errorMsg").innerHTML ="Required Filled Can not be Empty";
        return false;
    }
    else {
        if (!isFirstNameValid(str_firstName))
        {
            document.getElementById("errorMsg").innerHTML ="First Name is not Correct";
            document.forms["myForm"]["firstName"].value="";
        }
        else if (!isLastNameValid(str_lastname))
        {
            document.getElementById("errorMsg").innerHTML ="last Name is not Correct";
            document.forms["myForm"]["lastName"].value="";
        }
        else if (!isPhoneNoValid(str_phoneNO))
        {
            document.getElementById("errorMsg").innerHTML ="phone number is not valid";
            document.forms["myForm"]["phoneNO"].value="";
        }
        else if (!isEmailIdValid(str_EmailID))
        {
            document.getElementById("errorMsg").innerHTML ="Email is not valid";
            document.forms["myForm"]["emailId"].value="";
        }
        else if (!isPasswordValid(str_pass))
        {
            document.getElementById("errorMsg").innerHTML ="Password format is not Correct";
            document.forms["myForm"]["pass"].value="";
            document.forms["myForm"]["conPass"].value="";
        }
        else if (!isConfirmPasswordValid(str_cpass,str_pass))
        {
            document.getElementById("errorMsg").innerHTML ="Password not match";
            document.forms["myForm"]["conPass"].value="";
        }
        else
        {
            //document.getElementById("errorMsg").innerHTML ="Sucessful ";
            return true;
        }
        return false;
    }
}
function isFirstNameValid(strX)
{
    if (/^[a-zA-Z ]{2,30}$/.exec(strX))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function isLastNameValid(strX)
{
    if (/^[a-zA-Z ]{2,30}$/.exec(strX))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function isPhoneNoValid(strX)
{
    if (/^[0-9]{11,11}$/.exec(strX))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function isEmailIdValid(strX)
{
    // Email
    if (/^[A-z0-9_\-]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{2,4}$/.exec(strX))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function isPasswordValid(strX)
{
    // password
    if (/^(?=.*[A-Za-z])(?=.*[!@#$%])[0-9A-Za-z!@#$%]{8,}$/.exec(strX))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function isConfirmPasswordValid(strX,strY)
{
    if (strX==strY)
    {
        //window.alert(strX);//confirm pass
        //window.alert(strY);
        return true;
    }
    else
    {
        //window.alert(strX);confirm pass
        //window.alert(strY);
        return false;
    }
}
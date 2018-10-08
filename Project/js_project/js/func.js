function registerUser()
{
    //validating the name
    st="";
    var val="";
    val=document.getElementById('name').value;
    if(val.length==0)
    {
        st="Please Enter A Name";
    }
    else if(val.search(/[^A-Za-z]/)>=0)
    {
        st="Inavlid Name, Name Can Have Only Alphabets"
    }
    if(st!="")
    {
        document.getElementById('nameerr').innerHTML=st;
        document.getElementById('name').focus();
        return false;
    }
    document.getElementById('nameerr').innerHTML="";
    //Validating The Email
    st=valEmail();
    if(st!="")
    {
        document.getElementById('emailerr').innerHTML=st;
        document.getElementById('email').focus();
        return false;
    }
    else
    {
        document.getElementById('emailerr').innerHTML=st;
    }
    //Now Validate The Password
    st="";
    val=document.getElementById('pass').value;
    if(val.length==0)
    {
        st="Please Provide A Password";
    }
    else if(val.length<8)
    {
        st="Password Must Be 8 Characters Long";
    }
    else if(val.search(/[A-Z]/)<0)
    {
        st="Please Include A Upper Case Letter In Your Password";
    }
    else if(val.search(/[a-z]/)<0)
    {
        st="Please Include A Lower Case Letter In Your Password";
    }
    else if(val.search(/[0-9]/)<0)
    {
        st="Please Include A Number In Your Password";
    }
    else if(val.search(/[^0-9A-Za-z]/)<0)
    {
        st="Please Include A Special Character In Your Password";
    }
    else if(val.indexOf(',')>0)
    {
        st="Sorry, Bu Password Can't Include A ',' (Comma) In It";
    }

    if(st!="")
    {
        document.getElementById('passerr').innerHTML=st;
        document.getElementById('pass').focus();
        return false;
    }
    val1=document.getElementById('cpass').value;
    if(val1!=val)
    {
        st="Passwords Don't Match";
    }
    if(st!="")
    {
        document.getElementById('passerr').innerHTML=st;
        document.getElementById('cpass').focus();
        return false;
    }
    document.getElementById('passerr').innerHTML="";
    //If Excution Come Here That Means All The Information has been Validated and you are good to store the values
    st=saveValues();
    if(st!="")
    {
        //Means Some Error Has Occured
    }
}
function valEmail()
{
    val=document.getElementById('email').value;
    var indexa=val.indexOf('@');
    var indexd=val.lastIndexOf('.');
    st="";
    if(val.length==0)
    {
        st="Please Enter An Email";
    }
    else if(indexa<0)
    {
        st="An Email Address Must Have An '@' Sign";
    }
    else if(indexa==0)
    {
        st="An Email Address Must Have A valid username before '@' Sign";
    }
    else if(indexa>indexd)
    {
        st="An Email Address Must Have A valid Domain Name after '@' Sign";
    }
    else if(indexd==val.length-1 || indexd-1==indexa)
    {
        st="Please Enter A Valid Doamin Name In The Email";
    }
    if(st!="")
    {
        return st;
    }
    //Now We'll Check The Equality B/w the email field and confirm email field
    val1=document.getElementById('cemail').value;
    if(val1!=val)
    {
        st="Email Addresses Don't Match";
    }
    delete(val1);
    return st;
}
function saveValues(mode)
{
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var pass=document.getElementById('pass').value;
    if(isUnique(email))
    {
        //Register The User
        emails=localStorage.getItem('emails');
        emails+=","+email;  //Email Has been saved
        passes=localStorage.getItem('passes');
        passes+=","+pass;  //Email Has been saved
        names=localStorage.getItem('names');
        names+=","+name;  //Email Has been saved
        //Updating the values In The Local Storage
        localStorage.setItem('emails',emails);
        localStorage.setItem('passes',passes);
        localStorage.setItem('names',names);
        document.getElementById('status').innerHTML="Thankyou for registering, please login to access the tutorial we made";
    }
    else
    {
        //Display The Error Message
        document.getElementById('emailerr').innerHTML="A user with the email : "+email+" is already registed with us";
        document.getElementById('status').innerHTML="";
    }
}
function isUnique(email)
{
    emails=localStorage.getItem('emails');
    if(emails!=null)
    {
        if(emails.indexOf(email)>=0)
        {
            //That means the email exists
            return false;
        }
        else
        {
            return true;
        }
    }
    else
    {
        return true;
    }
}
function clearError(id)
{
    document.getElementById(id).innerHTML="";
}

function LoginUser()
{
    email=document.getElementById('lemail').value;
    if(!isUnique(email))
    {
        //Registerd User
        emails=localStorage.getItem('emails');
        emails=emails.split(',');
        var pos=emails.indexOf(email);
        passes=localStorage.getItem('passes');
        passes=passes.split(',');
        pass=document.getElementById('lpass').value;
        if(passes[pos]==pass)
        {
            //User Validated
            names=localStorage.getItem('names');
            names=names.split(',');
            names=names[pos];
            // document.getElementById('user').style.color="green";
            // document.getElementById('user').innerHTML="Welcome "+names;
            window.location = "./loader.html";
          //   setInterval(function () {
          //   window.location = "./index.html"
          // }, 2000);
          //   setInterval(function () {
          //   window.location = "./index.html"
          // }, 5000);
        }
        else
        {
            //Invalid Password
            document.getElementById('lpasserr').innerHTML="Invalid Password";
        }
    }
    else
    {
        //Unregisterd User
        document.getElementById('lemailerr').innerHTML="No Users Registerd With This "+email;
    }
}
function showCode()
{
    document.getElementById('sourceCode').innerHTML="<pre>"+document.getElementsByTagName('script')[1].innerHTML.toString().trim()+"</pre>";
}
function getSuffix(num)
{
    num=parseInt(num);
    if(num==11)
        num="th";
    else
        num=num%10;
    switch(num)
    {
        case 1:
            num="st";
            break;
        case 2:
            num="nd";
            break;
        case 3:
            num="rd";
            break;
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            num="th";
            break;
    }
    return num;
}
function isNotEmpty(val)
{
    if(val.length==0)
        return false;
    else
        return true;
}
function reverse() {
    var x=document.getElementsByTagName('input');
    var arr=new Array();
    for(i=0;i<x.length;i++)
    {
        if(isNotEmpty(x[i].value))
        {
            arr.push(x[i].value)
        }
    }
    if(arr.length>2)
    {
        var n = arr.reverse();
        document.getElementById("theOutputString").innerHTML = "Reverse Of <b>"+n+"<b/> is <b>" + n +"</b>";
    }
    else
    {
        document.getElementById("theOutputString").innerHTML = "<font style='color:indianred'>Please Enter <b>Atleast</b> Two Values To Reverse</font>";
    }
}

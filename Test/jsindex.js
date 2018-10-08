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
    if(arr.length>1)
    {
        var n = arr;
        document.getElementById("theOutputString").innerHTML = "Reverse Of <b>" + n + " is " + n.reverse() +"</b>";
    }
    else
    {
        document.getElementById("theOutputString").innerHTML = "<font style='color:red'>Please Enter <b>Atleast</b> Two Values To Reverse</font>";
    }
}

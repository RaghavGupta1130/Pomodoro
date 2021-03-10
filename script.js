var sm,bm;
var id;
var seconds=59;
function s_m()
{
   var s=document.getElementById("session_time");
   st=parseInt(s.innerHTML);
   if(st>1)
   st=st-1;
   s.innerHTML=st;
}
function s_a()
{
   var s=document.getElementById("session_time");
   st=parseInt(s.innerHTML);
   if(st<60)
   st=st+1;
   s.innerHTML=st;
}
function b_m()
{
   var s=document.getElementById("break_time");
   st=parseInt(s.innerHTML);
   if(st>1)
   st=st-1;
   s.innerHTML=st;
}
function b_a()
{
   var s=document.getElementById("break_time");
   st=parseInt(s.innerHTML);
   if(st<60)
   st=st+1;
   s.innerHTML=st;
}

function reset()
{
    pause();
    document.getElementById("session_time").innerHTML="10";
    document.getElementById("break_time").innerHTML="5";
    document.getElementById("timer").innerHTML="00:00";
    document.getElementById("heading").innerHTML="Session 1";
    document.getElementById("start").style.display="";
    document.getElementById("pause").style.display="none";
}

function start()
{

   document.getElementById("start").style.display="none";
    document.getElementById("pause").style.display="";
    s=document.getElementById("session_time");
    b=document.getElementById("break_time");
    st=parseInt(s.innerHTML);
    bt=parseInt(b.innerHTML);
    sm=st-1;
    bm=bt-1;
    seconds=59;
id = setInterval(function(){
    
    if(sm>=0){
        if(seconds === -1)
    {
        seconds=59;
    }
    sms=sm.toString();
    ss=seconds.toString();
    sms = (sms < 10)? '0'+sms : sms;
    ss = (ss < 10)? '0'+ss : ss;
    if(seconds === 0)
    {
        sm=sm-1;
    }

    }

    else if(sm <0 && bm >=0)
    {
        document.getElementById("heading").innerHTML="Break!";
    if(seconds === -1)
    {
        seconds=59;
    }
    sms=bm.toString();
    ss=seconds.toString();
    sms = (sms < 10)? '0'+sms : sms;
    ss = (ss < 10)? '0'+ss : ss;
    if(seconds === 0)
    {
        bm=bm-1;
    }
    }
    document.getElementById("timer").innerHTML=sms+":"+ss;
    seconds=seconds-1;
    }, 1000);
}

function pause()
{
        clearInterval(id);
         
}



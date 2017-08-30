function pause(time)
{
    var date= new Date();
    while((new Date()-date)<=time)
    {

    }
}

function setTimeoutSync(callback,n)
{
pause( n *1000);
callback();
}
function callback()
{
    console.log("HELLO");
   setTimeoutSync(callback,5);

}
//setTimeoutSync(callback,5);
callback();
var arr=[2,3,5,6];
function callback(item)
{
    return (item*item);
}
function foreach(array, callback)
{
    var i=0;
    while(i<array.length)
    {
        console.log(callback(array[i]));
        i++;
    }
}

foreach(arr,callback);
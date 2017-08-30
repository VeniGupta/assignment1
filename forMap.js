var arr=[2,3,5,6];
function callback(item)
{
    return (item*item);
}
function forMap(array, callback)
{
    var second_array=[];
    var i=0;
    while(i<array.length)
    {
        second_array[i]=(callback(array[i]));
        i++;

    }
    return second_array;
}


var a =forMap(arr,callback);
console.log(a);
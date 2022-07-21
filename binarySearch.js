
searchElement=(arr,key,len)=>{
let start=0;
let end=len-1;
let mid=Math.floor(start + (end-start)/2);

while(start <= end)
{
    
    if(arr[mid] === key)
      {
        return mid;
      }

      if(key > arr[mid])
        {
            start=mid+1;
        }
       else
        {
            end=mid-1;
        } 

        mid=Math.floor(start + (end-start)/2);
}
return -1;
}
let arr=[10,12,14,16,18,20]
let len=arr.length;
let key=18;
let position= searchElement(arr,key,len);
if(position == -1)
{
    console.log("element not found")
}
else {
    console.log("element position", position);
}

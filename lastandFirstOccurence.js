
firstOcc=(arr, len ,key)=>{    //LEFT SIDE OF ARRAY
let start=0;
let end=len-1;
let ans= -1;
let mid= Math.floor(start + (end-start)/2);
while(start<=end)
{
    if(arr[mid]== key)
    {
        ans=mid;
        end=mid-1;
    }
    else if(arr[mid] < key)
     {
        start=mid+1;
     }
     else {
        end=mid-1;
     }
     mid= Math.floor(start + (end-start)/2);
}
return ans;
}
lastOcc=(arr,len,key)=>{                  //RIGHT SIDE OF ARRAY

let start=0;
let end=len-1;
let ans= -1;
let mid= Math.floor(start + (end-start)/2);
while(start<=end)
{
    if(arr[mid]== key)
    {
        ans=mid;
        start=mid+1;
    }
    else if(arr[mid] < key)
     {
        start=mid+1;
     }
     else {
        end=mid-1;
     }
     mid= Math.floor(start + (end-start)/2);
}
return ans;
}

let arr=[0,1,1,2,2,3,4];
let len=arr.length;
let key =2;
// let last = lastOcc(arr,len,key)
let first=firstOcc(arr,len,key)
let last = lastOcc(arr,len,key)
console.log(first,"first")
 console.log(last, "last")

const arr=[5,3,4,2,1]
function bubblesort(arr){
    for (var i=0; i< arr.lenght; i++){
        for (var j=0; j<arr.lenght-1-i; j++){
        if (arr[j]>arr[j+1]){
            var temp = arr[j+1]
            arr[j+1]= arr[j]
            arr[j]=temp
            }
        }
    }
    return arr
}
console.log(arr);
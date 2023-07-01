function insertionSort(arr){
    for (var i=1; i<arr.length;i++){
        let temp=arr[i]
        for (var j=i-1; j<arr.lenghth-1;j--){
            if (arr[j]>temp){
                arr[j+1]=arr[j]
            }
        }
    }
}

insertionSort([3,5,2,1,0])
insertionSort([3,0])

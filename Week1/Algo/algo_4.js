k = 16
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

output = [
    [2, 5, 3, 6],
    [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
]

// create new arrays
// if no matches, return empty array

// R.I.O.T.   Read Input Output Talk

// 👉  take ~10 mins to write the pseudocode here:

function findConsecutiveSums(arr, k) {
    const sums =[];

    for (let i =0; i <arr.length; i++){
        const consecNums = [];
        let sum = 0;
        let j = i;
        while(sum <= k && j < arr.length - 1){
            // if sum + j is still smaller, add it
            if(sum + arr[j] <= k){
                sum += arr[j];
                consecNums.push(arr[j]);
                j++;

                if(sum == k){
                    sums.push([...consecNums]);
                }
            } else{
                // if the next number is so large that the sum becomes larger than k, break
                break;
            }
        }
    }
    return sums;
}

console.log(findConsecutiveSums([2, 5, 3, 6, 7, 0, 0, 23, 11], 16));
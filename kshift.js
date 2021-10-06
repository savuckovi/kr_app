/*
Given two numbers N,K followed by an array of N elements, print the array after doing right shift K times (in cyclic manner).
Input Size : 1 <= N, K <= 100000
Sample Testcase :
INPUT
3 2
7 2 3
OUTPUT
2 3 7
*/

function outcome(arr, turns) {
     narray = [...arr];
    
    for (i = 1; i <= turns; i++){
        var temp = arr[arr.length - 1];
        console.log(temp);
        for (i = arr.length-1; i>0; i--){
            
            narray[i] = narray[i - 1];
        }
        narray[0] = temp;
    }
    console.log(narray);
  }

outcome([4, 3, 5], 1);

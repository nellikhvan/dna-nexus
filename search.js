'use strict';

const A = [1, 3, 6, 8, 9]
const x = 9

const search = (A, x) => {
    let left = 0
    let right = A.length-1
    while (left <= right) {
        // split the array to find the middle index
        let midIdx = (left+ right)//2
        let midVal = A[midIdx]

        // compare middle value with searchable value
        if (midVal < x) {
            // found the min index
            left = midIdx + 1
        } else if (midVal > x) {
            // found the max index
            right = midIdx - 1
        } else {
            console.log('Searchable index is: ' + midIdx)
            return
        }
    }
    console.log(-1)
    return
}

module.exports = search(A, x)


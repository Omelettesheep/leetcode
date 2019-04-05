// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

//     Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1(0 0 0 1)
// 4(0 1 0 0)
// ↑   ↑

// The above arrows point to positions where the corresponding bits are different.

// 思路：利用异或算1的个数
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    var sum = 0;
    var z = (x ^ y).toString(2);
    for (var i in z) {
        if (z[i] == 1) sum++;
    }
    return sum;
};
// Given an array of integers, find how many pairs in the array such that their sum is less than or equal
//  to a specific target number. Please return the number of pairs.

// Input: nums = [2, 7, 11, 15], target = 24. Output: 5. Explanation:
//  2 + 7 < 24 2 + 11 < 24 2 + 15 < 24 7 + 11 < 24 7 + 15 < 24

//Because I want to use two pointers so i need to sort it time complexity is O(N^2)

function test(nums, target){
    if(nums ==null || nums.length ==0){
        return 0;
    }
    const sortedNums = nums.sort((a, b)=> a-b)
    let start = 0
    let end  = sortedNums.length - 1
    let targetCount = 0
    while(start < end){
        let searchTarget = sortedNums[start] + sortedNums[end];
        if(searchTarget === target){
            targetCount += end - start
            Start++
        } else if (searchTarget < target){
            targetCount += end - start
            start++
        } else if (searchTarget > target){
            end--
        }
    }
    return targetCount;
}

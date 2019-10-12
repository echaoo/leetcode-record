// 回溯法，多做几遍
var combinationSum = function (candidates, target) {
  const result = [];

  for (let i = 0; i < candidates.length; i++) {
    backtrack(candidates, result, i, [], 0, target);
  }

  return result;
};

function backtrack(candidates, result, index, tempArr, tempSum, target) {
  const candidate = index < candidates.length ? candidates[index] : null;
  const newArr = [...tempArr, candidate];
  const newSum = tempSum + candidate;

  if (!candidate) {
    return;
  }

  if (newSum > target) {
    return;
  }

  if (newSum === target) {
    result.push(newArr);
    return;
  }

  backtrack(candidates, result, index, newArr, newSum, target);

  for (let i = index + 1; i < candidates.length; i++) {
    backtrack(candidates, result, i, newArr, newSum, target);
  }
}

const can = [3,2,5]
const target = 8
const a = combinationSum(can, target)
console.log(a)

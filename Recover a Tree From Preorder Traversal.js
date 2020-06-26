var recoverFromPreorder = function(S) {
  const arr = []
let tmp = S[0]
for(let i = 1; i < S.length; i++) {
  if(S[i] === '-') {
    if(S[i-1] === '-') {
       tmp += '-'
     } else {
       arr.push(tmp)
       tmp = '-'
     }
  } else {
    if(S[i-1] === '-') {
      arr.push(tmp)
      tmp = S[i]
    } else {
      tmp += S[i]
    }
  }
}
arr.push(tmp)
const resArr = []
helper(resArr, arr, 0)
return resArr[0]
};
// 화살표함수에서 사용할 경우 에러가 난다
const arrFunc = () => {
  console.log(arguments, arguments[0]); // arguments is not defined
}
arrFunc(1, 2, 3)

// 일반함수에서는 arguments의 사용이 가능하다
function regularFunc() {
  console.log(arguments, arguments[0]); //[1,2,3], 1
}
regularFunc(1, 2, 3)
출처: https://chaeyoung2.tistory.com/76 [공부하는 공작새:티스토리]
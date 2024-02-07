# js-function-declaration-arrow-function

``` ts
// ✅ function 키워드 함수는 함수 전체를 호이스팅한다:
main(); // 실행 전 호출 가능 main출력
function main() {
  console.log('main');
};

// ❌ 화살표 함수는 별도의 변수에 할당되어 호이스팅 영향 받지 않음:
main2() // Uncaught TypeErro: main is not a function
const main2 = () => {
  console.log('main2');
}
```

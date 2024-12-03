



// void type => 어떠한 값도 가지지 않겠다, 함수라면 어떤 값도 내보내지 않겠다.


function sayHi():string {


  return 'hahaha'
}



function printHa():void {
  console.log('hahaha');
}


printHa()

// 바닐라 JS라면 void 안해도 undefined를 내보낼테지만 ts는 언디파인드 내보내려면
// 함수 안에 진짜 return undefined를 써줘야 해서 아무짓도 하기 싫다면 저렇게 void를 적어서
// 명시적으로 표시해줘야한다.



// never type
// 존재하지 않는 / 불가능한 타입 / 어떤 값도 정의할 수 없는 타입

function showError(message:string):never {
  throw new Error(message)
}

showError('해당 함수는 에러가 발생했습니다.')



























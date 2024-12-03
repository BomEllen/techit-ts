


type Cat = {
  name:string,
  age:number
}


function f(x:number|string|Date|Cat) {

  // 타입 가드
  if (typeof x === 'string') {
    x.toUpperCase();
  }
  else if (typeof x === 'number') {
    x.toFixed()
  }
  else if ( x instanceof Date) {
    x.getTime()
  }
  else if ( 'age' in x ) {   // 객체는 타입 거르기가 잘 안되니까 이렇게 한다. 
    console.log(x.age);
  }


}































// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟generic type🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
// 니가 입력하는 값을 받아서 그 갑의 타입으로 하겠다~

function sumFunc<T>(value:T):T {
  return value;
}



const a = sumFunc(10);
const b = sumFunc("hahaha")


//  T : Type
// U : Unknown of Unique
// K : key
// V : Value
// E : Element
// R : Return



function swapAtoB<T,U>(a:T, b:U):(T|U)[] {
  return [b,a]
}


swapAtoB(1,true)   // [true,1]





function getLength<T extends {length:number}>(data:T):number {
  return data.length
}

const b1 = getLength([1,2,3])
const b2 = getLength('hahaha')















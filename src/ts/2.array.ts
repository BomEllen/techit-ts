// Array Type



let arr:number[] = [1, 2, 3];      // (1)



let str: string[] = ["a", "b"];



// generic type 타입 변수 => 함수
let _arr: Array<number> = [1, 2, 3]   // (1)번이랑 똑같은데 타입 써주는 방식만 다른거임.



// union type + array type
let multi:(string | number | boolean)[] = ["hello", 10, false];






// 자리를 정할순 없나??
// 빼먹으면 안되는거 아닌가????


// tupel type
// 길이가 고정되어 있다. 배열처럼 길이가 동적으로 변경되지 않는다.
// 자리 또한 정해져 있다.

let tupelA:[number, number] = [1, 2];


// 다차원 배열
const user:[string, number][] = [
  ['주연', 24],
  ['후추', 7]
]





















const user: {
  id?: number,  // optional Property 이렇게 물음표 쓰면 써도 그만, 안써도 그만.
  name: string,
  age:number
} = {
  id: 1,
  name: 'tiger',
  age: 40
}


const config: {
  readonly apiKey:string      // readonly = 읽기 전용 속성. 재할당 해서 값이 변경되는 불상사가 없게 만들기.
} = {
  apiKey: 'dpcnoeJDOnjp@'
}
















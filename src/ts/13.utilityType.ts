

//-----------------------------------------------
// Omit. => 지정한 속성만 빼고 타입을 주겠다.

type User = {
  id: number,
  name: string,
  email:string,
  
}

// User에서 email만 빼고 타입을 주겠다.
const user: Omit<User,'email'> = {
  id: 1,
  name: "huchu",
};





//---------------------------------------------
// Pick  => 내가 원하는 속성만 뽑아서 쓰겠다.

const user2:Pick<User, 'id'|'name'> = {
  id: 2,
  name: 'ju',
}





//-----------------------------------------------
// Partial  => 모든 옵션들이 ?넣은 것 처럼 옵셔널 즉 있어도 되고, 없어도 되는 속성이 됨. 

type Address = {
  lat: number;
  long: number;
};


type User3 = {
  id: number;
  name?: string;
  email?: string;
  address: Address;
};


const user3: Partial<User3> = {
  name: "seon",
};





//-----------------------------------------------
// Readonly => 모두 읽기 전용 속성으로 만들기!~ => 이후에 재할당 못하게 하기!

type User4 = {
  id: number,
  name: string,
  email:string
}




const user4:User4 = {
  id: 1,
  name: 'jucie',
  email:'jjjj200100@gmail.com'
}


// user4.id = 3; 이렇게 재할당하기 불가능!





//-----------------------------------------------
// Required => 타입의 모든 속성을 필수로 변경함! => 우리가 ? 넣어서 옵셔널로 설정해둔 속성도 필수로 만들어줌.
// 즉 모든 속성을 적지 않으면 에러가 남.

const user5:Required<User3> = {
  id:1,
  name:'tiger',
  email:'tiger@naver.com',
  address:{
    lat:20,
    long:33.5
  }
}





type ShallowPartial<T> = {
  [K in keyof T]? : T[K]
}


const user6:ShallowPartial<User3> = {
  name:'tiger',
  address:{
    lat:20,
    long:33.5
  }
}












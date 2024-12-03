



// alias type => 별칭 지정해두기



//type 방식


type User = {
  
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
}

type User1 = {
  address:string
}

type mixed = User & User1
// 이렇게 타입을 섞을수도 있음



const user1:User = {
  id: 1,
  name: "ju",
  auth: "admin",
  isPaid: true,
};
const user2:User = {
  id: 2,
  name: "ju",
  auth: "admin",
  isPaid: true,
};




// interface 방식

interface _User {

  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
}

const user3:_User = {
  id: 1,
  name: "ju",
  auth: "admin",
  isPaid: true,
};
const user4:_User = {
  id: 2,
  name: "ju",
  auth: "admin",
  isPaid: true,
};




// index signature
// 객체의 키가 동적으로 결정될 때 유용하게 사용 가능. 


type Person = {
  name: string,
  age: number,
  [key:string]: string | number
};



const person:Person = {
  name: "ju",
  age: 20,
  email: 'jjjj200100@gamil.com',
  address: '경기도 의정부시'
}




















// union type  합집합

let str: "name" | "age" | "address";




type CompanyA = {
  companyName: string,
  since:number
}

type CompanyB = CompanyA & {
  ceo:string
}




const company1:CompanyA = {
  companyName: 'ju-studio',
  since:2022,
}

const company2:CompanyB = {
  companyName: 'apple',
  ceo: 'steve',
  since: 3333
}



// intersection type 교집합
































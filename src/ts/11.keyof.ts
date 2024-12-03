

type Person = {
  name: string,
  age:number, 
}

const person:Person = {
  name: 'ju',
  age: 24
}


// keyof = type의 키만 뽑아서 비교
function getProperty(obj:Person, key: keyof Person) {


  return obj[key]

}

getProperty(person,'name')





// ---------------------------------------------------------------------------




// CSSStyleDeclaration  => 이런걸 잘 알고 사용하는 능력도 중요. 저런걸 유틸리티 타입이라고 함.


function validCssProperty<T extends keyof CSSStyleDeclaration>(prop:T):boolean {


  return prop in document.body.style
}


validCssProperty('color')  // true





//-----------------------------------------------------------------------







const product = {
  id: 1,
  name: 'LG gram',
  price: 120
}



function setProperty<T, K extends keyof T>(product:T, key: K, value:T[K]):T {
  product[key] = value;
  return product
}

setProperty(product, 'price', 100) // { id:1, name:'LG gram', price:100 }






// -------------------------------------------------------------------------


const products = [
  {name:'mac', price:500},
  {name:'iPhone', price:300},
  {name:'iPad', price:300},
]



function getProperties<T,K extends keyof T>(arr:T[],key:K):T[K][]{
  return arr.map(p => p[key])
}


getProperties(products,'name') // ['mac','iPhone','iPad']


























// 문제: Days라는 enum을 정의하고 숫자를 1부터 7까지 할당하세요.

enum Days {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}




// 숫자형 enum 정의


console.log(Days.Sunday);    // 1
console.log(Days.Saturday);  // 7







// 문제: TrafficLight enum 정의후 switch case를 사용한 비교



enum TrafficLight {
  Red = 'Red',
  Green = 'Green',
  Yellow = 'Green'
}






// 신호등 색상에 따라 동작을 변경하는 함수
function setTrafficLight(light: TrafficLight) {
  switch (light) {
    case TrafficLight.Red:
      console.log("Stop!"); 
      break;
    case TrafficLight.Green:
      console.log("Go!"); 
      break;
    case TrafficLight.Yellow:
      console.log("Yellow!"); 
      break;
  }
}







// 사용 예시
setTrafficLight(TrafficLight.Red);    // Stop!
setTrafficLight(TrafficLight.Green);  // Go!


























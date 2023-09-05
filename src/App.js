import "./App.css";

function App() {
  //  function Deep(param1, param2) {
  //    var a = param1 + "love" + param2;
  //    return a;
  //  }
  //  console.log(Deep("Me", "You"));;

  //   var a = "global";
  //   function first() {
  //     var a = "fresh";
  //     return a;
  //     function second() {
  //       console.log(a);
  //     }
  //   }
  //   console.log(first(a));
  //   console.log(a);
  //

  // var a;
  // a = "me";
  // a = 12;
  // console.log(a);
  // var a = "me";

  // var a;
  // a = 2 + "7";
  // a = 2 + +"7";
  // console.log(a);

  // var a = 12;
  // var b ="12"
  // console.log(a = b);
  // 12
  // console.log(a == b);
  // true
  // console.log(a === b);
  // false

  // var a;
  // a = true - 100;
  // console.log(a);

  //   const time = data.Hourly
  //   var a = 12;

  //   if (a > 10) {
  //     time = "good morning";
  //   }
  //   // else if (a > 20) {
  //   //   time = "good afternoon";
  //   // } else {
  //   //   time = "good night";
  //   // }
  //   console.log(data.Hourly);
  //

  // function Deep(a) {
  //   var result;
  //   if (a > 0) {
  //     result = "positive";
  //   }
  //   else {
  //     result="negative"
  //   }
  //   return result;
  // }
  // console.log(Deep(-2));
  // console.log(Deep(2));

  //1st- negative
  //2nd-positive

  const Sdata = [
    {
      id: 1,
      name: "Deepak",
      degree: "bCom",
    },
    {
      id: 2,
      name: "Pardeep",
      degree: "Bsc",
    },
    {
      id: 3,
      name: "Robin",
      degree: "BA",
    },
  ];
  // console.log(Sdata[2]);
  // console.log(Sdata[0].name);

  const NewData = Sdata.map((cvalue) => {
    return `My name is ${cvalue.name}. My higher Education is ${cvalue.degree}` ;
  });
  document.getElementById("ShowData").innerHTML=NewData;
  console.log(NewData); 
  
  
}

export default App;

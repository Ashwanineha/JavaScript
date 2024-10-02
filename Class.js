// class car {
//     start(){
//         console.log("Start Car");
        
//     }

//     stop(){
//         console.log("stop Car");
        
//     }
// }

// let maruti = new car();
// const shift = new car();


function Person(firstName, lastName, age) {
    // Properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  
    // Methods
    // this.greet = function() {
    //   console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
    // };

  }

  const fullName = (Person.firstName + Person.lastName);

  // const person1 = new Person("Alice", "Smith", 30);
  console.log(fullName);
  

  

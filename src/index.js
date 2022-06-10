import "./styles.css";
//Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out "Fizz"; when its divisible by 3, print out "Buzz"; when it's divisible by both 2 and 3, Print out "Fizz Buzz"

//Divisible by 2 means that it would have a remainder of 0
//  2 /2 = 1 remainder of 0
//  3/2 = 1.5 remainder of 1.5 (Not divisible by 2)
// Use a Modulus Operator "%"

function fizzBuzz(num) {
  for(let i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 === 0)
    console.log("Fizz Buzz");
    else if (i % 3 === 0)console.log("Buzz");
    else if( i % 2 === 0)console.log("Fizz");
    else console.log(i);
  }
}

fizzBuzz(8);









document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

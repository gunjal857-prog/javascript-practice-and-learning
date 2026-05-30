
// ========= 1.take a number using prompt() and check even or odd using if-else

// let n1 = Number(prompt("Enter a number"));

// if (n1 % 2 === 0) {
//     console.log(`${n1} is even`);
// }
// else {
//     console.log(`${n1} is odd`);
// }


//2.take a student marks from prompt() and display pass or fail and student gread.

// let marks = Number(prompt("enter your marks"))

// if(marks >= 45){
//     console.log(marks + "=pass")
// }
// else {
//     console.log(marks + "=fail")
// }

// 3.create age verification system using prompt() and if-else.

// let age = Number(prompt ("enter your age"))
// if(age >= 18){
//     console.log(age +"verified")
// }else{
//     console.log(age + " your not able because your age is  less than 18")
// }

//4. make a simple login form using username and password with prompt().

let username = String(prompt("enter user name"))
let password = String (prompt("enter password"))
if
(username.includes("@gmail.com")
&& /\d/.test(username)  ) && /[!@#$%^&*]/.test(username)
{
    let loginUser = prompt("Enter username");
    let loginPass = prompt("Enter password");
      if (username === loginUser && password === loginPass) {
        console.log("Login Successful");
    } else {
        console.log("Wrong username or password");
    }
} else {
    console.log("Username must contain:");
    console.log("@ symbol");
    console.log("number");
    console.log("special symbol");
}





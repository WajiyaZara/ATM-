import inquirer from "inquirer";

let myBaklance = 10000; // Dollar
let mypin = 1234;

let pinAnswer = await inquirer.prompt(
    [   
        {
            name: "q1",
            message:"enteryour pin",
            type:"number"


        }
    ]
);
// 12345    === 1234 - fales
if (pinAnswer.pin === mypin) {
    console.log("Corret pin code!!!")
}
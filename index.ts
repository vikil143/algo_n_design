import { qOneMain } from "./src/algorithm/easy/Q1"
import { reverseStringMain } from "./src/algorithm/easy/Q2";
import { mediumQOneMain } from "./src/algorithm/medium/Q1";
import { mediumQTwoMain } from "./src/algorithm/medium/Q2";

function main() {
    console.log("-----------------------");
    qOneMain();
    console.log("-----------------------");
    reverseStringMain();
    console.log("-----------------------");
    console.log("End of Program Execution");
    console.log("-----------------------");
    console.log("Medium Level Questions:");
    mediumQOneMain();
    console.log("-----------------------");
    mediumQTwoMain();
    // You can add calls to medium level question main functions here
    console.log("-----------------------");
}

main();
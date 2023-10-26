const summonPuzzleInput = async () => {
    const response = await fetch("https://adventofcode.com/2022/day/1/input");
    const responseText = await response.text();
    return responseText;
}

const puzzleInput = await summonPuzzleInput();
//Split the group in arrays


//Find the sum of each Elv
const sampleGroup = '1000\n2000\n3000';
const sumElv = (group) =>
    group
        .split("\n")
        .map(Number)
        .reduce((sum, num) => sum + num, 0);

const numberGroups = data.split("\n\n");

const groupSums = numberGroups.map(sumElv);

console.log(sumElv(groupSums));

//Find the largest sum
const maxSum = Math.max(...groupSums);
// for (const dataKey in data) {
//     console.log(dataKey);
// }



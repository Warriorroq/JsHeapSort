var arrayLength = 0;
var array = []; //= [4, 2, 3, 1, 54, 10, 35, 28, 19, 31, 97, 64, 51, 62, 44];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function swap(firstIndex, secondIndex) {
    var helper = array[firstIndex];

    array[firstIndex] = array[secondIndex];
    array[secondIndex] = helper;
}

function pushMaxNumToStart(index) {
    var lastLeftIndex = 2 * index + 1;
    var lastRightIndex = 2 * index + 2;
    var HigherNumIndex = index;

    if (lastLeftIndex < arrayLength && array[lastLeftIndex] > array[HigherNumIndex]) {
        HigherNumIndex = lastLeftIndex;
    }

    if (lastRightIndex < arrayLength && array[lastRightIndex] > array[HigherNumIndex]) {
        HigherNumIndex = lastRightIndex;
    }

    if (HigherNumIndex != index) {
        swap(index, HigherNumIndex);
        pushMaxNumToStart(HigherNumIndex);
    }
}

function sort() {
    arrayLength = array.length;

    for (var i = Number.parseInt(arrayLength / 2); i >= 0; i -= 1) {
        pushMaxNumToStart(i);
    }

    for (var i = array.length - 1; i > 0; i--) {        
        arrayLength--;
        swap(0, i);
        pushMaxNumToStart(0);
    }
}

function main() {

    for (var i = 0; i < 100; i++)
        array[i] = getRandomInt(101);

    console.log(`Array there ${array}! \n`);

    sort();

    console.log(`New there ${array}! \n`);

    readline.question('', name => {});
}

main();
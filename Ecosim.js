const ecosystem = {
    weatheravg: 70, //average temperature throughout year
    weathervari: 30, //amount it deviates: weatheravg - weathervari is lowest temp, weatheravg + weathervari is highest temp
    weatherdevi: 10, //amount weathervari can deviate by, this number is the max deviation, therefore 30 is lowest temp and 110 is highest temp
    food: 70, //how much local food is around in the environment (0 meaning nonexistent, 100 meaning everything edible)
    foodvari: 40, //amount food deviates: same formula for weathervari
    fooddevi: 5, //amount foodvari can deviate by, same formula for weatherdevi, therefore lowest food is 25 and maximum food is 
    water: 30, //how much water is in environment (0 meaning desert, 100 meaning ocean)
    freezetemp: 25 //what temp it freezes at (lower due to planet heat)
    // trees: 40 //how many trees are in environment (0 meaning desert, 100 meaning jungle)
}

const animal = {
    population: 200,
    insul: 20, //how insulated it is (weather score is insul + temperature)
    cool: 30, //how cooling it is (weather score is temperature - cool)
    // note that insul and cool only kick in if it keeps them alive e.g. it will not insulate if at 100 degrees
    maxheat: 95, //maximum heat it can sustain (including cooling)
    maxcool: 45, //minimum heat it can sustain (including insulation)
    foodreq: 30, //how much food it needs
    watereq: 15 //how much water it needs
}

const monthCount = 12;
let monthTemp = [];

function generateYearTemp () {
    for (let i = 0; i < monthCount; i++) {
        monthTemp.push(0);
    }
    // monthTemp[Math.floor(monthCount / 2)] = weatheravg + (Math.floor(Math.random() * 10) - 5);
    let middleMonth = Math.floor(monthCount / 2);
    let monthOffset = 2 * ecosystem.weathervari / middleMonth;
    for (let i = 0; i < monthTemp.length; i++) {
        let currentOffset = Math.abs(i - (middleMonth)) * monthOffset * -1;
        let currentDevi = Math.floor(Math.random() * (ecosystem.weatherdevi * 2 )) - ecosystem.weatherdevi;
        monthTemp[i] = ecosystem.weatheravg + ecosystem.weathervari + (currentOffset + currentDevi);
    }
}

const iterateTempThruYear = () => {
    for (let i = 0; i < monthTemp.length; i++) {
        if (monthTemp[i] < animal.maxcool) {
            let diffTemp = animal.maxcool - monthTemp[i];
            // console.log(diffTemp);
            let randDead = (Math.floor(Math.random() * diffTemp * 2) - diffTemp);
            // console.log(randDead);
            let squareDead = diffTemp * diffTemp;
            // console.log("Square: " + squareDead);
            let popDead = squareDead - randDead;
            animal.population -= popDead;
        }
    }
}

generateYearTemp();
iterateTempThruYear();
console.log(monthTemp);
console.log("Population: " + animal.population);
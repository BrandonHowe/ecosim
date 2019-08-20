public class Ecosystem1
{
    int weatheravg = 70; //average temperature throughout year
    int weathervari = 30; //amount it deviates: weatheravg - weathervari is lowest temp, weatheravg + weathervari is highest temp
    int weatherdevi = 10; //amount weathervari can deviate by, this number is the max deviation, therefore 30 is lowest temp and 110 is highest temp
    int food = 70; //how much local food is around in the environment (0 meaning nonexistent, 100 meaning everything edible)
    int foodvari = 40; //amount food deviates: same formula for weathervari
    int fooddevi = 5; //amount foodvari can deviate by, same formula for weatherdevi, therefore lowest food is 25 and maximum food is 
    int water = 30; //how much water is in environment (0 meaning desert, 100 meaning ocean)
    int freezetemp = 25; //what temp it freezes at (lower due to planet heat)
    // trees: 40 //how many trees are in environment (0 meaning desert, 100 meaning jungle)
}
public class Species1
{
int insul = 20; //how insulated it is (weather score is insul + temperature)
int cool = 30; //how cooling it is (weather score is temperature - cool)
// note that insul and cool only kick in if it keeps them alive e.g. it will not insulate if at 100 degrees
int maxheat = 75; //maximum heat it can sustain (including cooling)
int maxcool = 40; //minimum heat it can sustain (including insulation)
int foodreq = 30; //how much food it needs
int watereq = 15; //how much water it needs
}
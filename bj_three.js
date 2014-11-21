var range = [ "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "King", "Queen"];
var suit = ["spades" , "clubs" , "diamonds" , "hearts"];
var spades = range
var clubs = range
var diamonds = range
var hearts = range
var x = 0;
var deal = [];
var pull ="";
var rv = Math.floor(Math.random()*13)
var sv = Math.floor(Math.random()*4)
var check = 0

for(x=0; deal.length < 52; x++){

rv = Math.floor(Math.random()*13);
sv = Math.floor(Math.random()*4);

pull = range[rv] + " of " + suit[sv];
deal[x] = pull

check = 0

while (check < deal.length){

if (deal[check-1] === pull){
//  console.log(deal[check].toString())
 deal.pop()
   x = x-1
console.log(deal[check-1] + " RESHUFFLE " + pull)
 }
check ++

}
}
console.log(deal);


while

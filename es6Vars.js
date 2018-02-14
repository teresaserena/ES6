/*Define a constant called "foodRations" with some number, and find a way to pass the variable numberOfPotions to letsReturn.
 */
function letsGiveSupplies(){
	let numberOfPotions = 5;
	return letsReturn(foodRations, numberOfPotions);
}
function letsReturn(foodRations, numberOfPotions){
	return "Potions given: " + numberOfPotions + "<br>" + 
	"Food rations given:" + foodRations;
}
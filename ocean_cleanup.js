function footprintCalculation(){
//retriving values from the html user input 

	var plasticBottle = document.getElementById("plasticBottle").value || 0;
	var plasticBags = document.getElementById("plasticBags").value || 0;
	var foodWrapping = document.getElementById("plasticBags").value;
	var yougurtContainer = document.getElementById("foodWrapping").value || 0;
	var takeAwayBox = document.getElementById("takeAwayBox").value || 0;
	var takeAwayCups = document.getElementById("takeAwayCups").value || 0;
	var plasticPackage = document.getElementById("plasticPackage").value || 0;
	var detergentBottle = document.getElementById("detergentBottle").value || 0;
	var shampooBottle = document.getElementById("shampooBottle").value || 0;
	var toothBrush = document.getElementById("toothBrush").value || 0;
	var toothPaste = document.getElementById("toothPaste").value || 0;
	var houseSize = document.getElementById("houseSize").value || 0;

//unit conversion values for each type of plastic

	var UnitplasticBottle = 0.73;
	var UnitplasticBags = 0.417;
	var UnitfoodWrapping = 0.583;
	var UnityougurtContainer = 0.383;
	var UnittakeAwayBox = 0.383;
	var UnittakeAwayCups = 0.240;
	var UnitplasticPackage = 0.834;
	var UnitdetergentBottle = 0.120;
	var UnitshampooBottle = 0.080;
	var UnittoothBrush = 0.020;
	var UnittoothPaste = 0.015;
	
	var total = plasticBottle * UnitplasticBottle
	+ plasticBags * UnitplasticBags
	+ yougurtContainer * UnityougurtContainer
	+ foodWrapping * UnitplasticBags
	+ takeAwayBox * UnittakeAwayBox
	+ takeAwayCups * UnittakeAwayCups
	+ plasticPackage * UnitplasticPackage
	+ detergentBottle * UnitdetergentBottle
	+ shampooBottle * UnitshampooBottle 
	+ toothBrush * UnittoothBrush
	+ toothPaste * UnittoothPaste;
	var foot_print = total / (houseSize + 1);

	if (foot_print == 0)
        document.getElementById("plastic_foot_print").innerHTML = 0;
    else
        document.getElementById("plastic_foot_print").innerHTML = foot_print.toFixed(3);
        
        
    const array = [
    plasticBottle * UnitplasticBottle,
	plasticBags * UnitplasticBags,
	yougurtContainer * UnityougurtContainer,
	foodWrapping * UnitplasticBags,
	takeAwayBox * UnittakeAwayBox,
	takeAwayCups * UnittakeAwayCups,
	plasticPackage * UnitplasticPackage,
	detergentBottle * UnitdetergentBottle,
	shampooBottle * UnitshampooBottle, 
	toothBrush * UnittoothBrush,
	toothPaste * UnittoothPaste
       
    ]; 
    const max = Math.max(...array); 
    const index = array.indexOf(max);
    if (index === 0)
    {	document.getElementById('waste_source').innerHTML=" Plastic Bottle. ";
		document.getElementById('tips').innerHTML="Many beverages can be purchased in glass bottles. Consider to bring reusable bottles for waters and hot beverages when you are out and about"; }
    if (index === 1)
    {   document.getElementById('waste_source').innerHTML="PLastic Bags. ";
		document.getElementById('tips').innerHTML="Bring reusable fabric totes for shopping and refuse plasti bags when offered";}    
    if (index === 2)
    {   document.getElementById('waste_source').innerHTML="Yougurt container. ";
		document.getElementById('tips').innerHTML="Some places offer dairy in glass containers. You could even explore recipes to make your own yogurt";}
    if (index === 3)
    {   document.getElementById('waste_source').innerHTML="Food wrapping. ";
		document.getElementById('tips').innerHTML="Consider to buy more unpackaged food at local markets.";}
    if (index === 4)
    {   document.getElementById('waste_source').innerHTML="Take away box. ";
		document.getElementById('tips').innerHTML="Cut down on take-out packaging by preparing more meals at home";}
    if (index === 5)
    {   document.getElementById('waste_source').innerHTML="Take away cups. ";
		document.getElementById('tips').innerHTML="Bring your own tumbler when ordering hot beverages to do ";}
    if (index === 6)
    {   document.getElementById('waste_source').innerHTML="Plastic Package. ";
		document.getElementById('tips').innerHTML="Try to purchase more products inshops rather than online";}
    if (index === 7)
    {   document.getElementById('waste_source').innerHTML="Detergent Bottle. ";
		document.getElementById('tips').innerHTML="Explore refill station in your neighborhood to cut down on bottle from detergent and cleaning products";}
    if (index === 8)
    {   document.getElementById('waste_source').innerHTML="Shampoo Bottle. ";
		document.getElementById('tips').innerHTML="Explore refill station in your neighborhood to cut doen on plastic waste from tolitries";}
    if (index === 9)
    {   document.getElementById('waste_source').innerHTML="Tooth Brush. ";
		document.getElementById('tips').innerHTML="Seriously How often do you brush your teeth";}
    if (index === 10)
    {   document.getElementById('waste_source').innerHTML="Tooth Paste. ";
		document.getElementById('tips').innerHTML="Seriously, How uch toothpaste do you often use?";}
    
}

function reset(){
	document.getElementById('calc').reset();
	document.getElementById('waste_source').innerHTML = 'unknown sources';	
	}

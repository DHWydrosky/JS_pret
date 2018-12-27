/*let p=document.querySelector('.para');
console.log(p);
p.style.background= "#ccc"
document.getElementById('text').textContent="this really"

// change style
p.style.fontSize="60px";
let val = document.getElementsByClassName('para');
let valarr= Array.from(val);

console.log(val);
console.log(valarr);
valarr.forEach(function(elem){elem.style.color= "#afdfee"})*/





 let calcul = document.querySelector('input.btn-calculate');

 
 calcul.addEventListener('click', function(e){
	  e.preventDefault();
	  let pret = document.querySelector('#pret').value;
let Npret=Number(pret);
let period = document.querySelector('#period').value;
let Nperiod=Number(period);
let interet = document.querySelector('#interet').value;
let Ninteret = Number(interet);
	  
	  console.log(Npret);
      console.log(Nperiod);
       console.log(Ninteret);
  
	  
	
	if(!isNaN(Npret) && !isNaN(Nperiod) && !isNaN(Ninteret)){
		 let tint = Npret*Ninteret/100;
		 let somm = tint*Nperiod;
		 let total= (Npret + tint*Nperiod);
		 let mwa= total /(Nperiod*12);
		 
		 document.querySelector('#mois').innerHTML= mwa;
		 document.querySelector('#total').innerHTML= total;
		 document.querySelector('#som').innerHTML=  somm;
		 
		 
	 }
	   
	   
});
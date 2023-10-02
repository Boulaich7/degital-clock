function clock() {
var sitData = new Date();
var hrt = sitData.getHours();
var minuts = sitData.getMinutes();
var sogount = sitData.getSeconds();
var ap = document.getElementById('am');



if(hrt >= 12) {
	ap.innerHTML = 'PM';
}else{
	ap.innerHTML = 'AM';
}


document.getElementById('hours').innerHTML = hrt;
document.getElementById('menuts').innerHTML = minuts;
document.getElementById('secound').innerHTML = sogount;


}
setInterval(clock, 10);
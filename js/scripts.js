var elCheckRunForm = document.querySelector('.checkRun-form');
var elCheckTemp = elCheckRunForm.querySelector('.temp-input');
var elCheckRain = elCheckRunForm.querySelector('.check-rain');
var elCheckSimulator = elCheckRunForm.querySelector('.check-simulator');
var result = document.querySelector('.result');

elCheckRunForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  
  var elCheckTempValue = parseFloat(parseFloat((elCheckTemp.value.trim()) , 10).toFixed(2) , 10);
  if (isNaN(elCheckTempValue)){
    alert('Tekshirib charchamaydigan programmistlar');
    elCheckTemp.value = "" ;
  }
  var checkTemp = elCheckTempValue >= 15 && elCheckTempValue <= 30;
  
  // var checkRain  = elCheckRain.checked();
  // var checkSimulator  = elCheckSimulator.checked();
  
  var firstChecking = checkTemp ;
  
  // var secondChecking =  checkTemp && checkRain === true && checkSimulator === true ; 
  
  if(firstChecking){
    result.textContent = "Ha";
  }else{
    result.textContent = "Yo'q";
  }
  
})
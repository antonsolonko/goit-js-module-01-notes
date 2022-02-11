const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

var select = document.querySelector('select');
var para = document.querySelector('.js-output-weather');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженое.';
  } else if (choice === 'rainy') {
    para.textContent = 'Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.';
  } else if (choice === 'snowing') {
    para.textContent = 'Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.';
  } else if (choice === 'overcast') {
    para.textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
  } else {
    para.textContent = '';
  }
}

var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
console.log("Value by default : ",myData);
var myArray = myData.split(',');

console.log("Formatted string become an array, with the .split method : ",myArray);

console.log(null && "false" && "mango"); // null - 1st false
console.log(null || "false" || "mango"); // "false" - 1st true
console.log(("false" && "Mango") || null); // Mango
console.log("Mango" && null || false); // Mango && null - > null;  null || false -> false 
console.log(null && false); 

if (!isNaN(age)) {
}

//Значение привести в булевый тип данных Boolean(name) или !!name 
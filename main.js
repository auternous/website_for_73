const calories = document.querySelector(".bmr-calculator .result .B");
const calories1 = document.querySelector(".bmr-calculator .result .M");
const calories2 = document.querySelector(".bmr-calculator .result .R");
const calculateBtn = document.querySelector(
  ".bmr-calculator .result .calculate-btn"
);
const age = document.querySelector(".bmr-calculator form #age");
const height = document.querySelector(".bmr-calculator form #height");
const weight = document.querySelector(".bmr-calculator form #weight");
const errorMessage = document.querySelector(
  ".bmr-calculator .result .error-message"
);
/*
window.onload=function(){//Как только окно загрузилось или перезагрузилось чистим все видосы
  
var vidos=document.getElementsByClassName("video");
for(let i=0;i<vidos.length;i++){
  vidos[i].style.display="none";
}};*/
// BMR = 10*weight + 6.25*height - 5*age + 5
// BMR = 10*weight + 6.25*height - 5*age - 161;

//15 65 20

const calculateBMR = (weight, height, age, gender) => {
  if (gender == "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }

  return 10 * weight + 6.25 * height - 5 * age - 161;
};

calculateBtn.addEventListener("click", () => {
  if (
    age.classList.contains("invalid") ||
    height.classList.contains("invalid") ||
    weight.classList.contains("invalid")
  ) {
    errorMessage.classList.add("active");
    return;
  }
  showVids();
  errorMessage.classList.remove("active");

  let genderValue = document.querySelector(
    ".bmr-calculator form input[name='gender']:checked"
  ).value;

  let BMR = calculateBMR(weight.value, height.value, age.value, genderValue);

  calories.innerHTML = (BMR*0.15).toLocaleString("en-US");
  calories1.innerHTML = (BMR*0.20).toLocaleString("en-US");
  calories2.innerHTML = (BMR*0.65).toLocaleString("en-US");
  
});

// Input Validation

age.addEventListener("input", (e) => {
  let ageValue = e.target.value;

  if (!ageValue || isNaN(ageValue) || ageValue < 10 || ageValue > 100) {
    age.classList.add("invalid");
  } else {
    age.classList.remove("invalid");
  }
});

height.addEventListener("input", (e) => {
  let heightValue = e.target.value;

  if (!heightValue || isNaN(heightValue) || heightValue < 0) {
    height.classList.add("invalid");
  } else {
    height.classList.remove("invalid");
  }
});

weight.addEventListener("input", (e) => {
  let weightValue = e.target.value;

  if (!weightValue || isNaN(weightValue) || weightValue < 0) {
    weight.classList.add("invalid");
  } else {
    weight.classList.remove("invalid");
  }
});
function showVids(){
  document.getElementById("exerciseHeader").style.display="block";//выводим заголовок
  var vid=document.getElementsByClassName("video");// массив всех элементов video
  for(let i=0;i<vid.length;i++){
    vid[i].style.display="none";
  }
  if(document.getElementById("male").checked){ //набор массы для Мужчин
    if(document.getElementById("gain").checked){
      if ((document.getElementById('weight').value >= 55) && (document.getElementById('weight').value < 60)){
        vid[6].style.display="block";
        vid[4].style.display="block";
        vid[2].style.display="block";
        vid[14].style.display="block";
      }
      if ((document.getElementById('weight').value >= 60) && (document.getElementById('weight').value <= 70)){
        vid[3].style.display="block";
        vid[2].style.display="block";
        vid[14].style.display="block";
        vid[11].style.display="block";
      }
      if ((document.getElementById('weight').value > 70) && (document.getElementById('weight').value <= 80)){
        vid[6].style.display="block";
        vid[2].style.display="block";
        vid[14].style.display="block";
        vid[11].style.display="block";
      }
      if ((document.getElementById('weight').value > 80)){
        alert("вес некорректен")
      }
      if ((document.getElementById('weight').value < 55)){
        alert("вес некорректен")
      }
      //vid[1].style.display="block";
      //vid[2].style.display="block";
      //vid[5].style.display="block";
    }
    if(document.getElementById("lose").checked){ //похудение для мужчин
      if ((document.getElementById('weight').value < 70)){
        alert("вес некорректен")
      }
      if ((document.getElementById('weight').value >= 70) && (document.getElementById('weight').value <= 80)){
        vid[12].style.display="block";
        vid[15].style.display="block";
        vid[14].style.display="block";
        vid[8].style.display="block";
        vid[13].style.display="block";
      }
      if ((document.getElementById('weight').value > 80) && (document.getElementById('weight').value <= 90)){
        vid[6].style.display="block";
        vid[2].style.display="block";
        vid[3].style.display="block";
        vid[7].style.display="block";
        vid[11].style.display="block";
      }
      if ((document.getElementById('weight').value > 90) && (document.getElementById('weight').value <= 100)){
        vid[6].style.display="block";
        vid[3].style.display="block";
        vid[2].style.display="block";
        vid[12].style.display="block";
        vid[11].style.display="block";
      }
      if ((document.getElementById('weight').value > 100)){
        alert("вес некорректен")
      }
    }   

  }
  if(document.getElementById("female").checked){
   
    
    if(document.getElementById("gain").checked){   //набор массы для Девушек
      if ((document.getElementById('weight').value < 40)){
        alert("вес некорректен")
      }
      if ((document.getElementById('weight').value >= 40) && (document.getElementById('weight').value <= 45)){
        vid[3].style.display="block";
        vid[2].style.display="block";
        vid[17].style.display="block";
        vid[17].style.display="block";
        vid[12].style.display="block";
      }
      if ((document.getElementById('weight').value > 45) && (document.getElementById('weight').value <= 55)){
        vid[3].style.display="block";
        vid[2].style.display="block";
        vid[17].style.display="block";
        vid[8].style.display="block";
        vid[5].style.display="block";
      }
      if ((document.getElementById('weight').value > 55) && (document.getElementById('weight').value <= 65)){
        vid[10].style.display="block";
        vid[2].style.display="block";
        vid[16].style.display="block";
        vid[15].style.display="block";
        vid[4].style.display="block";
      }
      if ((document.getElementById('weight').value > 65) && (document.getElementById('weight').value <= 75)){
        vid[8].style.display="block";
        vid[2].style.display="block";
        vid[7].style.display="block";
        vid[17].style.display="block";
        vid[13].style.display="block";
      }
      if ((document.getElementById('weight').value > 75)){
        alert("вес некорректен")
      
      
    }
    if(document.getElementById("lose").checked){ //похудение для Женщин
      if ((document.getElementById('weight').value < 50)){
        alert("вес некорректен")
      }
      if ((document.getElementById('weight').value >= 50) && (document.getElementById('weight').value <= 60)){
        vid[16].style.display="block";
        vid[3].style.display="block";
        vid[2].style.display="block";
        vid[17].style.display="block";
        vid[6].style.display="block";
      }
      if ((document.getElementById('weight').value > 60) && (document.getElementById('weight').value <= 70)){
        vid[16].style.display="block";
        vid[3].style.display="block";
        vid[2].style.display="block";
        vid[17].style.display="block";
        vid[5].style.display="block";
      }
      if ((document.getElementById('weight').value > 70) && (document.getElementById('weight').value <= 80)){
        vid[16].style.display="block";
        vid[3].style.display="block";
        vid[2].style.display="block";
        vid[17].style.display="block";
        vid[5].style.display="block";
      }
      if ((document.getElementById('weight').value > 80) && (document.getElementById('weight').value <= 90)){
        vid[16].style.display="block";
        vid[3].style.display="block";
        vid[2].style.display="block";
        vid[17].style.display="block";
        vid[5].style.display="block";
      }
      if ((document.getElementById('weight').value > 90) && (document.getElementById('weight').value <= 100)){
        vid[16].style.display="block";
        vid[3].style.display="block";
        vid[2].style.display="block";
        vid[17].style.display="block";
        vid[5].style.display="block";
      }
      if ((document.getElementById('weight').value > 90) && (document.getElementById('weight').value <= 100)){
        vid[16].style.display="block";
        vid[3].style.display="block";
        vid[2].style.display="block";
        vid[17].style.display="block";
        vid[5].style.display="block";
      }
      if (document.getElementById('weight').value > 100){
        alert("вес некорректен")
      }
    }
  }
}
};
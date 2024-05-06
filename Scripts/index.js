"use strict";


window.onload = init;


function hideShowDiv(val) {
    if(val == 1) {
        document.getElementById("toppingsOptionList").style.display="none";
    }
    if(val == 2) {
        document.getElementById("toppingsOptionList").style.display="block";
    }
}

let onSubmitOrderBtnClicked = document.getElementById("submitBtn");


function init() {
    onSubmitOrderBtnClicked.onclick = showPrice;
}

function showPrice() {

  let numberOfScoops = document.getElementById("numberOfScoops").value;

  let basePrice;
  let basePriceResultBox = document.getElementById("basePriceResultBox");
  let taxResultBox = document.getElementById("taxResultBox");
  let totalDueResultBox = document.getElementById("totalDueResultBox");

  if (numberOfScoops > 1) {
    basePrice = 2.25 + (numberOfScoops - 1)*1.25
  } else if (numberOfScoops == 1) {
    basePrice = 2.25
}

  if (document.getElementById("cupCheckBox").checked) {
    if(document.getElementById("sprinklesTopping").checked){
                basePrice += 0.5
    }else if(document.getElementById("hotFudgeTopping").checked){
                 basePrice += 1.25
    }else if(document.getElementById("whippedCreamTopping").checked){
                basePrice += 0.25
    }else if(document.getElementById("cherryTopping").checked){
                 basePrice += 0.25
    };
}

// if (document.getElementById("cupCheckBox").checked) {
//     if(document.getElementById("sprinklesTopping").checked){
//                 basePrice += 0.5
//     }else if(document.getElementById("hotFudgeTopping").checked){
//                  basePrice += 1.25
//     }else if(document.getElementById("whippedCreamTopping").checked){
//                 basePrice += 0.25
//     }else if(document.getElementById("cherryTopping").checked){
//                  basePrice += 0.25
//     }else if(document.getElementById("sprinklesTopping").checked && document.getElementById("hotFudgeTopping").checked) {
//         basePrice +=1.75
//     }else if(document.getElementById("sprinklesTopping").checked && document.getElementById("whippedCreamTopping").checked) {
//         basePrice +=0.75
//     };
// }

let tax = 0.08 * basePrice;
let totalDue = basePrice + tax;

basePriceResultBox.innerHTML = "Base Price: $" + basePrice.toFixed(2);
taxResultBox.innerHTML ="Tax: $" + tax;
totalDueResultBox.innerHTML ="Total Due: $" + totalDue.toFixed(2);


}

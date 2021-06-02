function add() {
  let names = ["jksk", "hjsdh", "jdhjjh"];
  console.log(names);
}

function bmi(weight, height) {
  let bmi = weight / height ** 2;
  let wbmi = Math.round(bmi);

  if (wbmi < 18.5) {
    return "Your BMI is " + wbmi + ", so you are underweight.";
  } else if (wbmi < 25) {
    return "Your BMI is " + wbmi + ", so you have a normal weight.";
  } else if (wbmi < 30) {
    return "Your BMI is " + wbmi + ", so you are overweight.";
  } else if (wbmi < 35) {
    return "Your BMI is " + wbmi + ", so you are obese.";
  }
  else   {
    return "Your BMI is " + wbmi + ", so you are extremely obese.";
  }
}
 

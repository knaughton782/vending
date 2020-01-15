function candyPicker(location, payment) {
  // let location = document.getElementById('location').value;
  // let payment = document.getElementById('payment').value;
  let price;
  // let display;

  if (location == "A1") {
    price = 2.0;
    let calcChange = payment - price;
    console.log("your change is: " + calcChange);
    return calcChange;
  } else if (location == "B1") {
    price = 3.5;
    let calcChange = payment - price;
    console.log("your change is: " + calcChange);
    return calcChange;
  } else if (location == "C1") {
    price = 4.0;
    let calcChange = payment - price;
    console.log("your change is: " + calcChange);
    return calcChange;
  } else if (location == "C2") {
    price = 1.5;
    let calcChange = payment - price;
    console.log("your change is: " + calcChange);
    return calcChange;
  } else if (location == "D1") {
    price = 3.5;
    let calcChange = payment - price;
    console.log("your change is: " + calcChange);
    return calcChange;
  } else {
    return `Your selection was invalid please try again`;
  }
}
candyPicker("B1", 6);
candyPicker("D1", 4);
candyPicker("C1", 4);

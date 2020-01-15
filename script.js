function candyPicker(location, payment) {
    console.log(location);
    // let location = document.getElementById('location').value;
    // let payment = document.getElementById('payment').value;
    console.log(payment);
    let price;
    // let display;
    
    if (location == 'A1') {
        price = 2.00;
        let calcChange = payment - price;
        console.log('your change is: ' + calcChange);
        return calcChange;
        
    }


}
candyPicker('A1', 4);

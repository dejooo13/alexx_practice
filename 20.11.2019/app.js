function factorial (number) {
    var fact = number;
    var i = number-1;
    while(i > 0) {
        fact *= i;
        i--
    }
    console.log(fact);
}

factorial (10);
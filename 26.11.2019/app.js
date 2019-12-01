/**
 * Napravi "duplify" prototype na String objektu koji treba da datu rijec duplira onoliku puta koliko mu
 *  se proslijedi kao argument npr. "hello".duplify(5) -> hellohellohellohellohello
 * @param {number} times How many times to duplicate string
 */

/* String.prototype.duplify = function (times) {
    let w = "";
    while(times > 0){
        w += this;
        times--;
    }
    console.log(w);
};

'hello'.duplify(5);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /**
  * Napraviti "Wallet" konstruktor funkciju koja za argument prima inicijalno stanje racuna
  * @param {number} ammount How much money you have in your wallet
  */

/*  function Wallet(ammount) {
     this.ammount = ammount;
 } */

/**
 * Napraviti prototip na Walletu koji se zove "deposit" koji za argument prima iznos koji se dodaje na ukupno stanje racuna 
 * (uvecava se njegovo stanje) @param {number} depo How much you want to add to your wallet
 */
/*   Wallet.prototype.deposit = function(depo){
        this.ammount += depo
        console.log(this.ammount);
  } */

/**
 * Napraviti prototip na Walletu koji se zove "withdraw" koji za argument prima iznos koji se oduzima od ukupnog stanja racuna 
 * (umanjuje se njegovo stanje) @param {number} wdr How much money you want to take from wallet
 */

/*   Wallet.prototype.withdraw = function(wdr){
        this.ammount -= wdr;
        console.log(this.ammount);
  }

  var stanje = new Wallet(500);
  stanje.deposit(60);
  stanje.withdraw(30);  */


/* class Wallet {
    constructor(amount) {
        this.amount = amount;
    }

    deposit(depo) {
        this.amount += depo
        console.log(this.amount);
    }

    withdraw(wdr) {
        if (wdr > this.amount) {
            console.log("Nemate dovoljno na racunu")
        } else {
            this.amount -= wdr;
            console.log(this.amount);
        }
    }
}

var stanje = new Wallet(200);
stanje.deposit(10);
stanje.withdraw(20);
stanje.withdraw(220); */

/* У банкомату се налазе новчанице од 10, 20, 50 и 100 КМ. Уколико клијент жели одређену суму,банкомат 
прво одредити да ли је ту суму могуће уплатити помоћу новчаница које има.Нпр.Ако има 1х10, 1х20, 1х50 и
1х100, то је укупно 180 КМ. Међутим ако клијент тражи мању суму, од 140 КМ, без обзира што је oна мања, 
немогуће је исплатити помоћу новчаница на располагању.Суму од 150 КМ је могуће исплатити
Потребно је написати функцију canWithdraw(amount, banknotes[]), која враћа булеан вриједност кoја
представља да ли jе могуће исплатити суму amount, помоћу новчаница у низу banknotes. У том низу се 
налазе 4 броја, кoја представљају количину новчаница од 10, 20, 50 и 100 КМ, респективно. */

<<<<<<< HEAD
/* function canWithdraw(amount, banknote) {
    var money = [10, 20, 50, 100];
    i = banknote.length - 1;
    while(i >= 0){
        amount = remainder(amount, money[i], banknote[i]);
        i--;
    }
    if(amount == 0){
        console.log(true)
        return true;
    }else{
        console.log("Ne mozemo da isplatimo dati iznos")
        return false;
    }
}

function remainder(sum, novcanice, koliko){
    var manji = Math.min(Math.floor(sum/novcanice), koliko);
    return sum-(novcanice*manji)
} */
///////////Moje rijesenje///////////////
function canWithdraw(amount, banknote) {
    var money = [10, 20, 50, 100];
    i = banknote.length - 1;
    function recursive(amount, i) {
        let remainingAmount = remainder(amount, money[i], banknote[i]);
        if(remainingAmount == 0){
            return true;
        }else if(i==0){
            return false
        } else if(recursive(remainingAmount, i-1) == true) {
            return true;
        } else {
          return recursive(amount, i-1);
       }
    }

    amount = recursive(amount, banknote.length - 1);
    if(amount == true){
        return true;
    }else{ 
        console.log("Ne mozemo da isplatimo dati iznos")
        return false;
    }
}

function remainder(sum, novcanice, koliko){
    var less_of = Math.min(Math.floor(sum/novcanice), koliko);
    return sum-(novcanice*less_of)
}

//////////////Markovo rijesenje///////////////////
/* function canWithdraw(amount, banknotes) {
    var money = [10, 20, 50, 100];

    function recursive(amount, i) {
        // Dosli smo do kraja, nema dalje, vracamo false.
        if(i < 0){
            return false;
        } else {
          // Nismo dosli do kraja, i je makar 0, a 0 je prva novcanica od 10.
          // Za trenutno i, probamo maks broj novcanica, pa za jedan manje,
          // pa za dva manje, pa sve tako do nule. Nula znaci da trenutnu novcanicu
          // uopste ne iskoristavamo, preskacemo je. Na taj nacin probavamo, sve
          // komabinacije, da uopste ne iskoristimo novacnicu, da iskoristimo samo neke,
          // ili da iskoristimo sve.
          for (let j = banknotes[i]; j >= 0; --j) {
            // j znaci koliko novcanica koristimo (od maks raspolizvog broja, do 0).
            // remaining ce sadrzati koliko nam ostaje sume nakon sto iskoritimo j novacanica.
            // Ako je remaining manje od 0, znace uopste ne moze iskoristiti j novcanica,
            // pa nastavljamo dalje, probamo manje j.
            let remaining = amount - j * money[i];
            if (remaining < 0) {
              continue;
            } else if (remaining == 0) {
              // Ako je remaining 0 znaci da sa j novcanica ubadamo tacno sumu koja treba.
              return true;
            } else {
              // remaining je vece od 0, probavamo da to sto je ostalo
              // iskombinujemo sa ostalim novcanicama.
              // Pozivamo rekurzivno za sledecu novacnicu.
              let success = recursive(remaining, i - 1);
              if (success == true) {
                // Ako je rekurzivni poziv uspio, to je to,
                // nema potrebe dalje da trazimo.
                return true;
              }
            }
          }
          // Ako je citava for petlja prosla bez da smo vratili true,
          // onda smo dosli ovde, a to je kraj pretrage, nismo nasli kombinaciju,
          // vracamo false.
          return false;
        }
    }

    return recursive(amount, banknotes.length - 1);
} */

if (canWithdraw(110, [1, 1, 3, 1]) != true) { console.log('Test 1 failed') }else{console.log(true)}
if (canWithdraw(210, [1, 1, 2, 1]) != true) { console.log('Test 2 failed') }else{console.log(true)}
if (canWithdraw(212, [1, 1, 2, 0]) != false) { console.log('Test 3 failed') }else{console.log(true)}
if (canWithdraw(212, [1, 1, 2, 1]) != false) { console.log('Test 4 failed') }else{console.log(true)}
if (canWithdraw(13, [1, 1, 2, 0]) != false) { console.log('Test 5 failed') }else{console.log(true)}
if (canWithdraw(590, [1, 1, 2, 6]) != false) { console.log('Test 6 failed') }else{console.log(true)}
if (canWithdraw(590, [1, 4, 2, 9]) != true) { console.log('Test 7 failed') }else{console.log(true)}
if (canWithdraw(1273, [4, 7, 2, 10]) != false) { console.log('Test 8 failed') }else{console.log(true)}
if (canWithdraw(70, [8, 0, 0, 0]) != true) { console.log('Test 9 failed') }else{console.log(true)}
if (canWithdraw(70, [7, 0, 0, 0]) != true) { console.log('Test 10 failed') }else{console.log(true)}
if (canWithdraw(110, [0, 3, 1, 1]) != true) { console.log('Test 11 failed') }else{console.log(true)}
if (canWithdraw(70, [0, 0, 0, 10]) != false) { console.log('Test 12 failed') }else{console.log(true)}
if (canWithdraw(110, [0, 3, 2, 0]) != true) { console.log('Test 13 failed') }else{console.log(true)}
 
=======

// function canWithdraw(amount, banknote) {
//     var rest = remainder(amount, 100, banknote[3])
//     if(rest == 0){
//         return true;
//     } else {
//         rest = remainder(rest, 50, banknote[2])
//         if(rest ==0){
//             return true
//         }else{
//             rest = remainder(rest, 20, banknote[1])
//             if(rest == 0){
//                 return true
//             }else{
//                 rest = remainder(rest, 10, banknote[0])
//                 if(rest == 0){
//                     return true
//                 }else{
//                     console.log("Ne mozemo isplatiti dati iznos")
//                     return false
//                 }
//             }
//         }
//     }
// }

// function remainder(sum, novcanice, koliko){
//     var manji = Math.min(Math.floor(sum/novcanice), koliko);
//     return sum-(novcanice*manji)
// }

// if (canWithdraw(110, [1, 1, 3, 1]) != true) { console.log('Test 1 failed') }else{console.log(true)}
// if (canWithdraw(210, [1, 1, 2, 1]) != true) { console.log('Test 2 failed') }else{console.log(true)}
// if (canWithdraw(212, [1, 1, 2, 0]) != false) { console.log('Test 3 failed') }else{console.log(true)}
// if (canWithdraw(212, [1, 1, 2, 1]) != false) { console.log('Test 4 failed') }else{console.log(true)}
// if (canWithdraw(13, [1, 1, 2, 0]) != false) { console.log('Test 5 failed') }else{console.log(true)}
// if (canWithdraw(590, [1, 1, 2, 6]) != false) { console.log('Test 6 failed') }else{console.log(true)}
// if (canWithdraw(590, [1, 4, 2, 9]) != true) { console.log('Test 7 failed') }else{console.log(true)}
// if (canWithdraw(1273, [4, 7, 2, 10]) != false) { console.log('Test 8 failed') }else{console.log(true)}
// if (canWithdraw(70, [8, 0, 0, 0]) != true) { console.log('Test 9 failed') }else{console.log(true)}
// if (canWithdraw(70, [7, 0, 0, 0]) != true) { console.log('Test 10 failed') }else{console.log(true)}
// if (canWithdraw(110, [0, 0, 0, 1]) != false) { console.log('Test 11 failed') }else{console.log(true)}
// if (canWithdraw(70, [0, 0, 0, 10]) != false) { console.log('Test 12 failed') }else{console.log(true)}
>>>>>>> bec6f35b5d150bad4f4d3a94baff2b1125e3ada9

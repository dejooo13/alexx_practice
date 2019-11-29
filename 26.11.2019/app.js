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


class Wallet {
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
stanje.withdraw(220);

/* У банкомату се налазе новчанице од 10, 20, 50 и 100 КМ. Уколико клијент жели одређену суму,банкомат 
прво одредити да ли је ту суму могуће уплатити помоћу новчаница које има.Нпр.Ако има 1х10, 1х20, 1х50 и
1х100, то је укупно 180 КМ. Међутим ако клијент тражи мању суму, од 140 КМ, без обзира што је oна мања, 
немогуће је исплатити помоћу новчаница на располагању.Суму од 150 КМ је могуће исплатити
Потребно је написати функцију canWithdraw(amount, banknotes[]), која враћа булеан вриједност кoја
представља да ли jе могуће исплатити суму amount, помоћу новчаница у низу banknotes. У том низу се 
налазе 4 броја, кoја представљају количину новчаница од 10, 20, 50 и 100 КМ, респективно. */


function canWithdraw(amount, banknote) {
    var rest = remainder(amount, 100, banknote[3])
    if(rest == 0){
        return true;
    } else {
        rest = remainder(rest, 50, banknote[2])
        if(rest ==0){
            return true
        }else{
            rest = remainder(rest, 20, banknote[1])
            if(rest == 0){
                return true
            }else{
                rest = remainder(rest, 10, banknote[0])
                if(rest == 0){
                    return true
                }else{
                    console.log("Ne mozemo isplatiti dati iznos")
                    return false
                }
            }
        }
    }
}

function remainder(sum, novcanice, koliko){
    var manji = Math.min(Math.floor(sum/novcanice), koliko);
    return sum-(novcanice*manji)
}

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
if (canWithdraw(110, [0, 0, 0, 1]) != false) { console.log('Test 11 failed') }else{console.log(true)}
if (canWithdraw(70, [0, 0, 0, 10]) != false) { console.log('Test 12 failed') }else{console.log(true)}
 

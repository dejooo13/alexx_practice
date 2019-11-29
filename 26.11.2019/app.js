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

    total = banknote[3] * 100 + banknote[2] * 50 + banknote[1] * 20 + banknote[0] * 10;

    if (amount > total) {
        console.log(false)
        return false
    } else {
        if (Math.trunc(amount / 100) <= banknote[3]) {
            amount %= 100
        }
        if (Math.trunc(amount / 50) <= banknote[2]) {
            amount %= 50
        }
        if (Math.trunc(amount / 20) <= banknote[1]) {
            amount %= 20
        }
        if (Math.trunc(amount / 10) <= banknote[0]) {
            amount %= 10
        }

        if (amount > 0) {
            console.log(false);
            return false
        } else {
            console.log(true)
        }
    }
}

canWithdraw(260, [4, 2, 1, 3])

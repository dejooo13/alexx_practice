/**
 * Napravi "duplify" prototype na String objektu koji treba da datu rijec duplira onoliku puta koliko mu
 *  se proslijedi kao argument npr. "hello".duplify(5) -> hellohellohellohellohello
 * @param {number} times How many times to duplicate string
 */

String.prototype.duplify = function (times) {
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

  function Wallet(ammount) {
      this.ammount = ammount;
  }

 /**
  * Napraviti prototip na Walletu koji se zove "deposit" koji za argument prima iznos koji se dodaje na ukupno stanje racuna 
  * (uvecava se njegovo stanje) @param {number} depo How much you want to add to your wallet
  */
  Wallet.prototype.deposit = function(depo){
        this.ammount += depo
        console.log(this.ammount);
  }

 /**
  * Napraviti prototip na Walletu koji se zove "withdraw" koji za argument prima iznos koji se oduzima od ukupnog stanja racuna 
  * (umanjuje se njegovo stanje) @param {number} wdr How much money you want to take from wallet
  */

  Wallet.prototype.withdraw = function(wdr){
        this.ammount -= wdr;
        console.log(this.ammount);
  }

  var stanje = new Wallet(500);
  stanje.deposit(60);
  stanje.withdraw(30);


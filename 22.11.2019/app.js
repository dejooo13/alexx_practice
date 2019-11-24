/**
 * Napisi funkciju koja za argument prima mjesec i godinu i treba da vrati sve dane za dati mjesec i godinu
 * @param {number} month 
 * @param {number} year
 * @returns {number[]} days
 */
function solution(month, year) {
    let d =new Date(year, month, 0);
    let days_in_month = d.getDate();
    let days = [];
    for(let i=1; i <= days_in_month; i++){
        days.push(i);
    }
    console.log(days);
    return days;
}

solution(9, 2019);


/**
 * Napisi funkciju koja za argument prima recenicu a vraca najduzu rijec unutar nje
 * @param {string} str 
 * @returns {string} reversed
 */
function reverseString(str) {
    words = str.split(" ");
    var i = 0;
    var reversed = "";
    while(i < words.length) {
        letters = words[i].split('');
        if(reversed == '') {
            reversed = words[i];
        }else if(reversed.split('').length <= words[i].split('').length){
            reversed = words[i];
        }
        i++;
    }
    console.log(reversed);
    return reversed;
}

reverseString('I love to code in javaScript !')
/**
 * Array A se sastoji on N brojeva koje treba pomjeriti za po jedan index u desno (broj koji je zadnji
 *  prelazi na prvo mjesto).
 * Zadatak je da se napiše funkcija function solution(A, K), gdje je A array, a K broj koliko puta će 
 * se pomjeriti određeni broj unutar arraya. 
 * Na primjer: A = [3, 8, 9, 7, 6] za pomjeranje od K = 6 rezultat će biti [6, 3, 8, 9, 7].
 * Array mora imati minimalno 5 brojeva (ukoliko se prosljedi manje od 5 funkcija treba da vrati 0).
 * @param {number[]} A 
 * @param {number} K
 * @returns {number[]} days
 */
function solution(A, K) {
    let ar =[];
    if(A.length < 5){
        return 0;
    }
    for(let i = 0; i < A.length; i++){
            new_index =(i + K) % A.length;
            ar[new_index] = A[i]
    }
    console.log(ar)
}
solution([3, 8, 9, 7, 6], 6) // -> [6, 3, 8, 9, 7]

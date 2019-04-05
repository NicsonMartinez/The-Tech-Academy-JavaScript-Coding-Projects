/* 
This is my first working code attempt that finds prime numbers.
NOTE: My code will only work for the prime numbers found between 0 and 200 (the first 46 prime numbers) 
*I am aware there is definitely a better way to do accomplish this, but at least my code works.

The idea that tried to follow is explained in this list (following Sieve of Eratosthenes' algorithim):
Prime Number: Prime numbers are numbers greater than 1, and are only divisible by itself and 1 (Has 1 and itself as factors eg. 2, 3, 7, 11)
1. Prime numebers can't be perfect squares (eg. 1, 4, 9, 16, 36, and so on) 
2. Even number can't be prime number or divisible by 2 (except 2)
3. After norrowing down to odd numbers, numbers divisible by 3 (after 3 itself) are not prime number.
4. After nowwowing down to numbers that aren't divisible by 3, further narrow down by excluding numbers divisible by 7
5. Then excluding numbers divisible by 11, then 13 and so on ..

Nicson Martinez
4/4/2019
*/

function printNPrimes(howManyPrimes){
    let num = 0;
    let primes = [];
    while (num < howManyPrimes) {
        if(num === 2 || num === 3 || num === 5 || num === 7 || num == 11 || num === 13) { //These numbers get skipped with the logic below so..
            primes.push(num);
        }
        if (!Number.isInteger(Math.sqrt(num))) { //If num's square root is a whole number, don't continue (If num is a perfect square, it's not a prime number)
            if (num % 2 === 1){ //If a number is odd number proceed
                if (num % 3 > 0 && num % 5 > 0 && num % 7 > 0 && num % 11 > 0 && num % 13 > 0){ //if numbers are divisible by 3, 5, 7, 11, and 13
                    
                        primes.push(num);
                }
            }
        }
        num++;
    }
    return primes;
}
console.log(printNPrimes(100));
/*
This code finds prime number between 0 and 100. One can change the range of the list by simply editing the counter values in the for loop.
This algorithm follows following Sieve of Eratosthenes' algorithim by paying attention to numbers that are not divisible to the next? (because prime 
numbers are numbers that are only divisible by itself - and 1).*/

for (var counter = 0; counter <= 100; counter++){           //Sets up the counter (0-100 right now)
    var not_prime = false;                                  //Creates a variable called not_prime and automatically sets it to false for each of the counter numbers 

    if (!Number.isInteger(Math.sqrt(counter))) {            //If counters's square root is a whole number, don't continue (If num is a perfect square, it's not a prime number) Gets rid of 0 and 1 to start.
        for (var div = 2; div < (counter - 1); div++){      //Creates a for loop with a variable called div. The loop increases by one each time until it gets to one less than the counter.
            if (counter % div === 0){                       //If the current number divided by the "div"ider number has a remainder of 0, then it's not a prime number and not_prime is set to true.
            not_prime = true;                               
            }
        }
                                                                        
        if (not_prime === false){                           //If after going through all the numbers between 2 and one less than the number and none of them were evenly divided (no remainder) not_prime will still be false and the console will print the number.       
            console.log(counter);
        }
    }
}   




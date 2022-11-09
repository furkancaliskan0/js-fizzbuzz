// stampare numeri da 1 a 100
//i multipli di 3 stampi Fizz
//i multipli di 5 stampi Buzz
//i multipli di 3 che di 5 stampi FizzBuzz




const container = document.getElementById("container");

for (let index = 1; index <= 100; index++) {

    if (index % 3 == 0 && index % 5 == 0) {
        console.log('FizzBuzz');
        container.innerHTML += '<div class="box Fizzbuzz">FizzBuzz</div>';

    }else if (index % 5 == 0) {
        container.innerHTML += '<div class="box Buzz">Buzz</div>';
        console.log('Buzz');
    
    }else if (index % 3 == 0) {
        container.innerHTML += '<div class="box Fizz">Fizz</div>';
        console.log('Fizz');

    } else {
        container.innerHTML += '<div class="box">' + index + '</div>';
        console.log(index);
    }
}

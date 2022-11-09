// stampare numeri da 1 a 100
//i multipli di 3 stampi Fizz
//i multipli di 5 stampi Buzz
//i multipli di 3 che di 5 stampi FizzBuzz




const container = document.getElementById("container");

for (let index = 1; index <= 100; index++) {

    if (index % 3 == 0 && index % 5 == 0) {
        console.log('fizzbuzz');
        container.innerHTML += '<div class="box fizzbuzz">fizzbuzz</div>';

    }else if (index % 5 == 0) {
        container.innerHTML += '<div class="box buzz">buzz</div>';
        console.log('buzz');
    
    }else if (index % 3 == 0) {
        container.innerHTML += '<div class="box fizz">fizz</div>';
        console.log('fizz');

    } else {
        container.innerHTML += '<div class="box">' + index + '</div>';
        console.log(index);
    }
}

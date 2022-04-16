//2
let numbers = [2, 5, 9, 10, 15, 17, 12]; 

for (let x=0; x<numbers.length; x++){
    console.log(numbers [x]);
}
for (let item of numbers) {
    console.log(item);
    }

//4
    let user = {
        name: 'giorgi',
        age:  20,
        studentstatus: 'active'
    }
    
if (user.age < 18) {
        console.log('Hello');
    } else if (user.name === 'giorgi') {
        console.log('Hello Giorgi!');
    } else if (user.studentstatus === 'active' || user.age < 25) {
        console.log('Hello World!');
    } else {
        console.log('error')
    }

//6
let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

for (let x of array){
    for (let item of x){
    if(item > 0) {
        console.log (item); 
    }
}

}

let array1 = [32, 10, "hello", null, "hello2", 50]

for (let z of array1) {
        if(z % 5 == 0) {
            console.log (z); 
    }
}

//Funcations



    
    


    
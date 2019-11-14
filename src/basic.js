class Car{
    constructor(){

    }
}
const car1 = new Car();
const car2 = new Car();
if(car1 instanceof Car){
    console.log('car instance');
}
if(car2 instanceof Array){
    console.log('array instance');
}

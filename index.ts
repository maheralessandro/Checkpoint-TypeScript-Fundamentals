


interface Vehicle {
    make : string ,
    model : string ,
    year : number ,
    start :()=> void
    
}


class Car implements Vehicle{
    make : string = "" 
    model : string = ""
    year : number = 1 
    
    constructor(make : string , model : string , year : number){
      this.make = make 
      this.model = model
      this.year = year
       
    }
    start = ()=> console.log( "Car engine started");
}


let voiture = new Car("fiat" , "panda" , 1800);
voiture.start()
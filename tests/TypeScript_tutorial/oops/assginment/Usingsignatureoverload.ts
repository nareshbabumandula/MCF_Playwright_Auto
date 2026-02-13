class Employee8 {

//overload signature
caluclatepay (salary:number):number;
caluclatepay (hours:number,rate:number):number;

// single implementation
caluclatepay (param1:number,param2?:number):number{
    
    //case 1 full time employee
    if(param2 === undefined){
        return param1;
    }

    //case 2 part time employee
    return param1*param2;
}
}

const emp8 = new Employee8();
console.log(emp8.caluclatepay(10000)); // full time employee 10000
console.log(emp8.caluclatepay(10,500)); // part time employee 5000

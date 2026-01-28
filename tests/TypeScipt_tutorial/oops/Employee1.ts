export class employee1{

    // public access modifier makes the property accessible from outside the class
    public name: string;
    public id: number;

    constructor(name: string, id: number){
        this.name= name;
        this.id=id;
    }

    printid(){
        console.log(`Employee ID is: ${this.id}`);// accessible within the class
    }
}
 const emp1 =new employee1('Aniket' , 123);    
 console.log(emp1.name);// output: Aniket
 console.log(emp1.id);// output: 123
 emp1.printid();// output: Employee ID is: 123
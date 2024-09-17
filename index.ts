import inquirer from "inquirer"


class Student {
    name:string
    constructor(n:string){
        this.name=n
    }
    
}
class person {
    students:Student[]=[]
    addStudent(objec:Student){
        this.students.push(objec)
    }
}

const persons =new person

const  progstart = async(persons :person) => {
    do{
    console.log("Welcome!");

    const ans = await inquirer.prompt([
        {
            name:"select",
            type:"list",
            message:"whom would you like to interact with",
            choices:["staff","student","Exit"]

        }
    ])
    if (ans.select=="staff") {
        console.log("you approach the staff room,Please feel free to ask any qurey");    
    }
    else if (ans.select=="student") {
        const ans =await inquirer.prompt([
            {
                name:"student",
                type:"input",
                message:"Enter the student's name you wish to engage with",

            }
        ])
        const student=persons.students.find(val => val.name==ans.student)
        if (!student) {
            const name = new Student (ans.student)
            persons.addStudent(name)
            console.log(`HELLO i m ${name.name} Nice to  meet you`);
            console.log("New student Added");
            console.log("Current Student List");
            console.log(persons.students);    
        }else{
            console.log(`HELLO i m ${student.name} Nice to see you again`);
            console.log("Exiting student list:");
            console.log(persons.students);

        
        }  
}else if (ans.select=="Exit"){
    console.log("EXITING THE PROGRAM....");
    process.exit()
    

}
    }while (true) 
        
    
}
progstart(persons)
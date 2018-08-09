// Problem 1 - Creating an object w/ two methods


// function Multiplier(){
//     this.numSupplied = 1;

//     this.multiply = function(argument){
//         this.numSupplied = argument * this.numSupplied;
//         console.log(this.numSupplied);
//     }

//     this.getCurrentValue = function (){
//         return this.numSupplied;

//     }
    
// }

// var result = new Multiplier();
// result.multiply(10);
// result.multiply(15);
// console.log(result.getCurrentValue()) // Checks to make sure code is working properly


// Problem 2 - Creating object that stores strings that represent a photo



// function Album(photos){ // Class or Function
//     this.photos = []; // Attribute

//     this.addPic = function(photo_instance){ // Method
//         this.photos.push(photo_instance);
//     }
//     this.getPic = function(){ // Method
//         for(let image of this.photos){
//             console.log(image.fileName+ " " + image.locTaken); // List of all the photos
//         }
//     }
//     this.getIndex = function(photo_index){ // Method
//         this.photo_index = []; // Making an array
//         console.log(this.photos[photo_index]);
//     }

// }

// function Photo(fileName, locTaken){ // Class or Function
//     this.fileName = fileName; // Attribute
//     this.locTaken = locTaken; // Attribute
// }

// var picture = new Album(); // Creating instance
// var picture1 = new Photo("Canada", "Lake of the fish"); // Instance
// var picture2 = new Photo("Maine Vacation", "Northern Maine"); // Instance
// var picture3 = new Photo("Disney World", "Space Mountain"); // Instance

// picture.addPic(picture1); // Adding
// picture.addPic(picture2); // Adding
// picture.addPic(picture3); // Adding

// picture.getPic(); // Invoking the log function (looping function)

// picture.getIndex(0); // Calling the array


// Problem 3


function Person(fname, lname, age, gender){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.gender = gender;
}

function Teacher(fname, lname, age, gender, subject){
    Person.call(this, fname, lname, age, gender);

    this.subject = subject;
}

function Student(fname, lname, age, gender, favClass){
    Person.call(this, fname, lname, age, gender)
    this.favClass = favClass;
}

function School(){
    this.Professor = [];
    this.Child = [];
    this.addTeacher = function(Teacher1){
        this.Professor.push(Teacher1)
    }
    this.addStudent = function(Student1){
        this.Child.push(Student1)
    }
    this.listTeacher = function(){
        for(let info of this.Professor){
        console.log(info)
        }
    }
    this.listStudent = function(){
        for(let information of this.Child){
            console.log(information)
        }
    }
}

// instances to add parties
var educator = new Teacher("Betty", "Cianchetti", 45, "female", "math");
var youth = new Student("Mark", "Foo", 16, "male", "history");
var building = new School();

building.addTeacher(educator);
building.listStudent();
building.listTeacher();





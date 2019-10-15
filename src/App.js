import React from 'react'

const data = [{
        teacherName: "Jan Nowak",
        teacherAge: 36,
        active: true,
        students: [
            {
                name: "Maciej Janosz",
                age: 12
            },
            {
                name: "Wojciech Kowalski",
                age: 15
            },
            {
                name: "Wioletta PoznaĹska",
                age: 1000000
            }
        ]
    },
    {
        teacherName: "Mariusz Flasinski",
        teacherAge: 56,
        active: true,
        students: [
            {
                name: "Jan Kot",
                age: 12
            },
            {
                name: "Jan Ziobro",
                age: 15
            },
            {
                name: "Adam Malysz",
                age: 41
            }
        ]
    },
    {
        teacherName: "Wojciech Kuzak",
        teacherAge: 44,
        active: false,
        students: [
            {
                name: "Janina Wronska",
                age: 22
            },
            {
                name: "John Dover",
                age: 7
            },
            {
                name: "Emil Petterson",
                age: 46
            }
        ]
    }
];

function App() {
    return(
        <div>
            <button
                className="btn" onClick={onClickAllStudents}>All students</button>
            <button
                className="btn" onClick={onClickAllStudentsAlpabetically}>Sort students</button>
            <button
                className="btn" onClick={onClickListOldStudents}>Old students</button>
        </div>

    );
}

function onClickAllStudents() {
    const array = []
    for(let i = 0; i < data.length ; i++) {
        for(let j = 0; j < data[i].students.length ; j++) {
            array.push(data[i].students[j]);
        }
    }
    const listItems = array.map((number) =>
        <li>{number}</li>
    );
    console.log(array);
}

function onClickAllStudentsAlpabetically() {
    const array = []
    for(let i = 0; i < data.length ; i++) {
        for(let j = 0; j < data[i].students.length ; j++) {
            array.push(data[i].students[j]);
        }
    }
    array.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })

    console.log(array);
}

function onClickListOldStudents() {
    const array = []
    let student = {}
    for (let i = 0; i < data.length; i++) {
        if (data[i].active) {
            for (let j = 0; j < data[i].students.length; j++) {
                student = data[i].students[j]
                if (student.age > 20)
                    array.push(student);
            }
        }
    }
   console.log(array);
}

export default App
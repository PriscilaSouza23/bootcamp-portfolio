const classA = [
    {
        name: 'Priscila',
        grade: 10,
    },
    {
        name: 'Andressa',
        grade: 10
    },
    {
        name: 'Vinicius',
        grade: 5
    },
    {
        name: 'Thales',
        grade: 4
    }
]

const classB = [
    {
        name: 'Thiago',
        grade: 10
    },
    {
        name: 'Lucas',
        grade: 4
    },
    {
        name: 'Well',
        grade: 10
    },
    {
        name: 'Carioca',
        grade: 8
    },
]


function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.lenght; i++) {
        sum = sum + students[i].grade
    }
    const average = sum / students.lenght
    console.log(average)
    return (students[0].grade + students[1].grade + students[2].grade) / 3
}


const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)


//se a média for maior que 5, parabenizar a turma 
function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} avarage: ${average}. Congratulations`)
    } else {
        console.log(`${turma} avarage: ${avarage}. Is not good.`)
    }
}


sendMessage(average1, "class A")
sendMessage(average2, "class B")

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const average = sum / students.length
    return average
}
//Marcar student como reprovado se a grade for menos que 5, e enviar uma mensagem

function markAsflunked(student) {
    student.flunked = false;
    if (student.grade < 5) {
        student.flunked = true;
    }
}


function sendflunkedMessage(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function turma(students) {
    for (let student of students) {
        markAsflunked(student);
        sendflunkedMessage(student)
    }
}

turma(classA)
turma(classB)
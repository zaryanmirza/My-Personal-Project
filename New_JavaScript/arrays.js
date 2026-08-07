const students = [10, 20, 45, 78, 35, 26, 49]
for (let i = 0; i < students.length; i++) {
    if (students[i] % 2 === 0) {
        // console.log(students[i]**2)
    }
}

//for of
//for in
//for each

for (let i of students) {
    if (i % 2 === 0) {
        // console.log(i**2)
    }
}

for (let i of students) {
    // console.log(i)
}

students.forEach((student) => {
    // console.log(student)
})

let total = 0
for (student of students) {
    total += student
} {
    // console.log(total)
}

//Array Map

const marks = [12, 23, 52, 32, 16, 24, 29, 38, 65, 78, 96, 46]
marks.map((mark) => {
    if (mark < 40) {
        console.log(mark ** 2)
    }
})

//Array Filter

const colors = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white", "pink", "grey"]
const newColors = colors.filter((color) => {
    return color[0] === "p"
})
console.log(newColors)
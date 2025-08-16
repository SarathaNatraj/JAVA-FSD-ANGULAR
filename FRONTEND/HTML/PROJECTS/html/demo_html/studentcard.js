// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
const result = () => {
    const studentList = [
        { name: 'Swetha', subject: [{ course: 'Grammer', marks: 70 }, { course: 'Accounts', marks: 56 }] },
        { name: 'Randeep', subject: [{ course: 'Grammer', marks: 80 }, { course: 'Accounts', marks: 67 }] },
        { name: 'Rajesh', subject: [{ course: 'Grammer', marks: 45 }, { course: 'Accounts', marks: 88 }] },
        { name: 'Sandhya', subject: [{ course: 'Grammer', marks: 60 }, { course: 'Physics', marks: 97 }] },
        { name: 'Vinayak', subject: [{ course: 'Grammer', marks: 98 }, { course: 'Physics', marks: 43 }] },
    ]
    const demo = () =>
        studentList.reduce((obj, item) => {
            let percenRes = item.subject.reduce(() => {
                return (item.subject[0].marks + item.subject[1].marks) / item.subject.length;
            }, {})
            console.log( `name: ${item.name}, 'percentage': ${percenRes}, 'course 1' : ${item.subject[0].course}, 'course 2': ${item.subject[1].course}` );
        }, {})
    const finalResult = demo(studentList);
   // console.log(finalResult);
    return finalResult;
}
//var test =
 result();
//console.log(test);


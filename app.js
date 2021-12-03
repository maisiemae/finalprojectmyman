function gradeView() {
    document.getElementsByClassName('add-grade')[0].style.visibility = 'hidden';
    document.getElementsByClassName('grade-view')[0].style.visibility = 'visible';
    document.getElementById('grades').style.visibility = 'visible';
}
function addGradeView() {
    document.getElementsByClassName('grade-view')[0].style.visibility = 'hidden';
    document.getElementById('grades').style.visibility = 'hidden';
    document.getElementsByClassName('add-grade')[0].style.visibility = 'visible';
}
function submitGrades() {
    var student = document.getElementById("name").value;
    var grade = parseInt(document.getElementById('grade').value, 10);
    if (Number.isFinite(grade) && grade <= 100 && grade >= 0) {

        document.getElementById('grades').innerHTML += "<br>Student Name: " + student + " | " + "Grade: " + grade;
        gradeView()
    }
    if (document.getElementsByClassName("add-grade")[0].style.visibility !== 'hidden') {
        document.getElementById('incorrect-grade').innerText = 'Invalid Input.';
    }
}

function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user === 'cool') {
        if (pass === 'password') {
            document.getElementsByClassName('login')[0].style.display = 'none';
            document.getElementsByClassName('nav')[0].style.visibility = 'visible';
        } else {
            document.getElementById('incorrect').innerText = 'Invalid Password.'
        }
    } else {
        document.getElementById('incorrect').innerText = 'Invalid Username.'
    }
}
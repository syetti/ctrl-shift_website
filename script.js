const results = document.getElementById("results");

var collegeResutls = colleges;  

function showCollege() {
  results.innerHTML = "";
  collegeResutls.forEach (colleges => {

    let htmlCollege = document.createElement('div');
    htmlCollege.classList.add('results');

    htmlCollege.innerHTML += '<div>' + college.title + '</div>';
    htmlCollege.innerHTML += '<div>' + college.type + '</div>';
    htmlCollege.innerHTML += '<div>' + college.classSize + '</div>';
    htmlCollege.innerHTML += '<div>' + college.area + '</div>';

    results.appendChild(htmlCollege);
    });
}

document.getElementById("Public").addEventListener("click", publicTrue);
document.getElementById("Private").addEventListener("click", privateTrue);

function publicTrue() {
  document.getElementById("Public").classList.add('true');
}

function privateTrue() {
  document.getElementById("Private").classList.add('true');
}


function show() {
  college.forEach(function (college) { 
    if (document.getElementById("Private").classList.contains('true')) {
    collegeResutls.push(college);
  } else if (document.getElementById("Public").classList.contains('true')) {
      collegeResutls.push(college);
    }
    });
  }
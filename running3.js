
console.log('run');

let mphButton = document.querySelector('.show-mph-button');
let distanceButton = document.querySelector('.show-distance-button');

function showMphFcn () {

  if (mphButton.innerHTML === `Don't Show Graph`) {
    mphButton.innerHTML = `Show MPH Graph`;

    document.getElementById("Mph").classList.add('Mph-smol');
    document.getElementById("Mph").classList.remove('Mph');

  } else if (mphButton.innerHTML === `Show MPH Graph`) {
    mphButton.innerHTML = `Don't Show Graph`;

    document.getElementById("Mph").classList.remove('Mph-smol');
    document.getElementById("Mph").classList.add('Mph');
  }

  if ((mphButton.innerHTML === `Show MPH Graph`) && (distanceButton.innerHTML === `Show Distance Graph`)) { 

    document.getElementById("grid-graphs").classList.remove(`grid-big-mph`);
    document.getElementById("grid-graphs").classList.remove(`grid-big-distance`);
    document.getElementById("grid-graphs").classList.add(`grid-graphs`);
  }

  if ((mphButton.innerHTML === `Show MPH Graph`) && (distanceButton.innerHTML === `Don't Show Graph`)) { 

    document.getElementById("grid-graphs").classList.add(`grid-big-distance`);
    document.getElementById("grid-graphs").classList.remove(`grid-graphs`);
  }

  if ((mphButton.innerHTML === `Don't Show Graph`) && (distanceButton.innerHTML === `Show Distance Graph`)) { 

    document.getElementById("grid-graphs").classList.add(`grid-big-mph`);
    document.getElementById("grid-graphs").classList.remove(`grid-big-distance`);
    document.getElementById("grid-graphs").classList.remove(`grid-graphs`);
  }

  if ((mphButton.innerHTML === `Don't Show Graph`) && (distanceButton.innerHTML === `Don't Show Graph`)) { 

    document.getElementById("grid-graphs").classList.remove(`grid-big-mph`);
    document.getElementById("grid-graphs").classList.remove(`grid-big-distance`);
    document.getElementById("grid-graphs").classList.add(`grid-graphs`);
  }
}

function showDistanceFcn () {

  if (distanceButton.innerHTML === `Don't Show Graph`) {
    distanceButton.innerHTML = `Show Distance Graph`;

    document.getElementById("Distance").classList.add('Distance-smol');
    document.getElementById("Distance").classList.remove('Distance');

  } else if (distanceButton.innerHTML === `Show Distance Graph`) {
    distanceButton.innerHTML = `Don't Show Graph`;

    document.getElementById("Distance").classList.remove('Distance-smol');
    document.getElementById("Distance").classList.add('Distance');
  }

  if ((mphButton.innerHTML === `Show MPH Graph`) && (distanceButton.innerHTML === `Show Distance Graph`)) { 

    document.getElementById("grid-graphs").classList.remove(`grid-big-mph`);
    document.getElementById("grid-graphs").classList.remove(`grid-big-distance`);
    document.getElementById("grid-graphs").classList.add(`grid-graphs`);
  }

  if ((mphButton.innerHTML === `Don't Show Graph`) && (distanceButton.innerHTML === `Show Distance Graph`)) { 

    document.getElementById("grid-graphs").classList.remove(`grid-graphs`);
    document.getElementById("grid-graphs").classList.add(`grid-big-mph`);
  }

  if ((mphButton.innerHTML === `Show MPH Graph`) && (distanceButton.innerHTML === `Don't Show Graph`)) { 

    document.getElementById("grid-graphs").classList.remove(`grid-big-mph`);
    document.getElementById("grid-graphs").classList.add(`grid-big-distance`);
    document.getElementById("grid-graphs").classList.remove(`grid-graphs`);
  }

  if ((mphButton.innerHTML === `Don't Show Graph`) && (distanceButton.innerHTML === `Don't Show Graph`)) { 

    document.getElementById("grid-graphs").classList.remove(`grid-big-mph`);
    document.getElementById("grid-graphs").classList.remove(`grid-big-distance`);
    document.getElementById("grid-graphs").classList.add(`grid-graphs`);
  }
}

let runningDistances = document.getElementById('miles-ran');
for (let i = 0.1; i<26.3; i=i+0.1) {
  runningDistances.add(new Option(Math.round(i*10)/10));
}

let hrTime = document.getElementById('hr-ran');
for (let i = 0; i<24; i++) {
  hrTime.add(new Option(i));
}

let minTime = document.getElementById('min-ran');
for (let i = 0; i<60; i++) {
  minTime.add(new Option(i));
}

let secTime = document.getElementById('sec-ran');
for (let i = 0; i<60; i++) {
  secTime.add(new Option(i));
}

let curr = new Date();
let currMonth = curr.getMonth();
let currDate = curr.getDate();
let currYear = curr.getFullYear();
today = `${currMonth} ${currDate} ${currYear}`;

let masterList = [];
let distanceList = [];
let timeList = [];
let dateList = [];
let newAddition = [];

function addRun () {
  let distanceElement = document.getElementById('miles-ran');
  let distanceNew = distanceElement.value;
  distanceNew = Number(distanceNew);
  //console.log(distanceNew);

  let hrElement = document.getElementById('hr-ran');
  let hrNew = hrElement.value;
  hrNew = Number(hrNew);
  //console.log(hrNew);

  let minElement = document.getElementById('min-ran');
  let minNew = minElement.value;
  minNew = Number(minNew);
  //console.log(minNew);

  let secElement = document.getElementById('sec-ran');
  let secNew = secElement.value;
  secNew = Number(secNew);
  //console.log(secNew);

  let dateElement = document.querySelector('.date-input');
  let dateNew = dateElement.value;
  //console.log(dateNew);

  let totalTimeRan = (secNew + (minNew * 60) + (hrNew * 60 * 60));
  
  let year = '';
  let month = '';
  let day = '';

  if ((dateNew.length != 0) && (distanceNew.length != 0) && (hrNew.length != 0 || minNew.length != 0 || secNew.length != 0)) {
    year = dateNew[0] + dateNew[1] + dateNew[2] + dateNew[3];
    month = dateNew[5] + dateNew[6];
    day = dateNew[8] + dateNew[9];

    dateNew = month + "-" + day + "-" + year;
  }

  if ((distanceNew === 0) && (totalTimeRan === 0)) {
    alert("Please fill out distance ran and time ran.")
  }

  if ((distanceNew === 0) && (totalTimeRan > 0)) {
    alert("Please fill out distance ran.")
  }

  if ((distanceNew > 0) && (totalTimeRan === 0)) {
    alert("Please fill out time ran.")
  }

  if ((distanceNew > 0) && (totalTimeRan > 0) && (dateNew.length === 0)) {
    dateNew = today;
  }

  //console.log(distanceNew, totalTimeRan, dateNew);

  if ((distanceNew > 0) && (totalTimeRan > 0) && (dateNew != 0)) {

    masterList.push({
      distance: distanceNew,
      time: totalTimeRan,
      date: dateNew
    });

    distanceElement.value = '';
    hrElement.value = '';
    minElement.value = '';
    secElement.value = '';
    dateElement.value = '';
  }
}

let masterListHTML = '';

function addToList() {
  console.log(masterList);

  masterListHTML = '';

  for (let i = 0; i < masterList.length; i++) {
    let listObject = masterList[i];
    let distance = listObject.distance;
    let time = listObject.time;
    let date = listObject.date;    

    let html = `
    <div>${distance}</div>
    <div>${time}</div>
    <div>${date}</div> 
    <button onclick = "
    masterList.splice(${i}, 1);
    addToList();
    " class = "delete-run-button
    ">Delete</button>`
    masterListHTML = masterListHTML + html;
  }
}

function showRunning() {
  let runningList = document.querySelector('.running-list-button');

  if (runningList.innerHTML === "Show Running List") {
    runningList.innerHTML = "Hide Running List";

    addToList();

    document.querySelector('.running-list')
    .innerHTML = masterListHTML;

    if (masterListHTML.length != 0) {
      document.getElementById("running-section-header").classList.add('running-section-header');
      document.getElementById("running-titles").classList.add('grid-master-list');
      document.getElementById("running-titles").classList.add('running-titles');
      document.querySelector('.running-titles').innerHTML = `
      <div>Distance Ran</div>
      <div>Time Ran</div>
      <div>Date</div>
      `
    }

  } else if (runningList.innerHTML === "Hide Running List") {
    runningList.innerHTML = "Show Running List";

    addToList();

    document.querySelector('.running-list')
    .innerHTML = '';
    document.querySelector('.grid-master-list').innerHTML = '';
    document.querySelector('.running-titles').innerHTML = '';
    document.getElementById("running-section-header").classList.remove('running-section-header');
  }
}










let xValues = [11-20-23, 11-23-23, 11-25-23];

//miles
let a = [1, 1, 1];

//time in hr:min:sec
let b = [0-9-26, 0-10-17, 0-9-05];

//mph
let yValues = [6.3, 5.8, 6.6];

new Chart("Mph", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor:"rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
});

new Chart("Distance", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor:"rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
});



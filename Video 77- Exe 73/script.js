function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  // Finish this function
  let viewStr;
  if (views < 1000) {
    viewStr = views;
  } else if (views > 1000000) {
    viewStr = views / 1000000 + "M";
  } else {
    viewStr = views / 1000 + "K";
  }
  //     let html = `<div class="card">
  //     <div class="image">
  //         <img src="${thumbnail}"
  //             alt="">
  //         <div class="capsule">${duration}</div>
  //     </div>
  //     <div class="text">
  //         <h1>${title}</h1>
  //         <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
  //     </div>
  // </div>`
  let rn = Math.floor(Math.random() * 10);
  let html = `
    <div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
           <div class="head">
                <b>Installing VS Code & How Website Work | Sigma Web Devlopment Course-Tutorial #1</b>
            </div>
            <div class="r-2">
                <p>${cName} </p>
                <li>${viewStr} views</li>
                <li>${monthsOld} months age</li>
            </div>
        </div>
    </div>`;

  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}

createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

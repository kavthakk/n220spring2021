/* Make Divs
Given the array
let objects = [
 { color: "#FF0000", height: 100, width: 300 },
 { color: "#FFFF00", height: 200, width: 200 },
 { color: "#ff0000", height: 300, width: 100 },
];
Write a loop that creates three divs based on the data in the array. You should only have one document.createElement in your code. */

function doThing() {
  let objects = [{ color: "#FF0000", height: 100, width: 300 },
  { color: "#FFFF00", height: 200, width: 200 },
  { color: "#ff0000", height: 300, width: 100 },
  ];

  for (let i = 0; i < objects.length; i++) {
    let dvNew = document.createElement("div");

    dvNew.style.backgroundColor = objects[i].color;
    dvNew.style.height = objects[i].height + "px";
    dvNew.style.width = objects[i].width + "px";
    document.body.appendChild(dvNew);

  }
}
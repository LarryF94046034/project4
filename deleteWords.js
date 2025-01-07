let progressString = "";

document
  ?.getElementById("fileInput")
  ?.addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const text = e.target.result;

        processFileContent(text);
      };

      reader.readAsText(file);
    }
  });

let deleteString = false;
let newLineString = "";
function processFileContent(text) {
  const lines = text.split("\n");
  console.log(lines);

  lines.forEach((line, index) => {
    console.log(`Line ${index + 1}: ${line}`);

    deleteString = false;
    newLineString = "";
    for (let innerIndex = 0; innerIndex < line.length; innerIndex++) {
      if (line[innerIndex] == ">") {
        deleteString = true;
      }

      if (line[innerIndex] == "<") {
        deleteString = false;
      }

      if (
        deleteString == true &&
        line[innerIndex] != ">" &&
        line[innerIndex] != "<"
      ) {
        newLineString += " ";
      } else {
        newLineString += line[innerIndex];
      }
    }
    progressString += newLineString;
    localStorage.setItem("progressString", progressString);
  });
}

// let deleteString = false;
// let newLineString = "";
// function processFileContent(lines) {
//   //const lines = text.split("\n");

//   lines.forEach((line, index) => {
//     console.log(`Line ${index + 1}: ${line}`);
//     deleteString = false;
//     newLineString = "";
// for (let innerIndex = 0; innerIndex < line.length; innerIndex++) {
//   if (line[innerIndex] == ">") {
//     deleteString = true;
//   }

//   if (line[innerIndex] == "<") {
//     deleteString = false;
//   }

//   if (
//     deleteString == true &&
//     line[innerIndex] != ">" &&
//     line[innerIndex] != "<"
//   ) {
//     newLineString += " ";
//   } else {
//     newLineString += line[innerIndex];
//   }
// }
//     progressString += newLineString;
//   });

//   //progressString = text;
//   console.log(progressString);
//   localStorage.setItem("progressString", progressString);
// }

// document
//   .getElementById("fileOutput")
//   .addEventListener("change", function (event) {
//     const file = event.target.files[0];

//     if (file) {
//       const writer = new FileWriter();
//       writer.write(progressString);
//     }
//   });

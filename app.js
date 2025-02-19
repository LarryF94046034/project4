let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector("section.animation-wrapper");

const time_line = new TimelineMax();

time_line
  .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "80%" },
    { width: "100%", ease: Power2.easeInOut }
  )
  .fromTo(slider, 1, { x: "-100%" }, { x: "0%" }, "-=1.2")
  .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 });

setTimeout(() => {
  animation.style.pointerEvents = "none";
}, 2500);

function changeColor(target) {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "lightgreen";
    target.style.color = "black";
  } else if (
    target.value == "B" ||
    target.value == "B-" ||
    target.value == "B+"
  ) {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
  } else if (
    target.value == "C" ||
    target.value == "C-" ||
    target.value == "C+"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "D" ||
    target.value == "D-" ||
    target.value == "D+"
  ) {
    target.style.backgroundColor = "red";
    target.style.color = "black";
  } else if (target.value == "F") {
    target.style.backgroundColor = "grey";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "white";
  }

  setGPA();
}

//計算加總GPA
function setGPA() {
  let functionLength = document.querySelectorAll("form").length;
  let credits = document.querySelectorAll(".class-credit");
  let selects = document.querySelectorAll("select");
  let sum = 0; //GPA計算用分子
  let creditSum = 0; //GPA計算用分母

  for (let i = 0; i < credits.length; i++) {
    if (!isNaN(credits[i].value)) {
      creditSum += Number(credits[i].value);
    }
  }

  for (let i = 0; i < functionLength; i++) {
    if (!isNaN(credits[i].value) && !isNaN(convertor(selects[i].value))) {
      sum += Number(credits[i].value) * convertor(selects[i].value);
    }
  }

  let result;
  if (creditSum == 0) {
    result = (0.0).toFixed(2);
  } else {
    result = (sum / creditSum).toFixed(2);
  }

  document.getElementById("result-gpa").innerText = result;

  // console.log(creditSum);
  // console.log(sum);
}

//計算字母為成績
function convertor(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0;
  }
}

//網頁防止enterkey送出表單
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

//button防止click送出表單
let allbutton = document.querySelectorAll("button");
allbutton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

//select根據ABCD+-變換顏色
let allSelects = document.querySelectorAll("select");
allSelects.forEach((select) => {
  select.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target);
  });
});

//credits setGPA
let credits = document.querySelectorAll(".class-credit");
credits.forEach((credit) => {
  credit.addEventListener("change", (e) => {
    setGPA();
  });
});

//添加鈕 新增列功能
let addButton = document.querySelector(".plus-button");
addButton.addEventListener("click", () => {
  let newForm = document.createElement("form");
  let newDiv = document.createElement("div");
  newDiv.classList.add("grader");

  // 製作五個小元素
  let newInput1 = document.createElement("input");
  newInput1.setAttribute("type", "text");
  newInput1.setAttribute("list", "opt");
  newInput1.classList.add("class-type");

  let newInput2 = document.createElement("input");
  newInput2.setAttribute("type", "text");
  newInput2.classList.add("class-number");

  let newInput3 = document.createElement("input");
  newInput3.setAttribute("type", "number");
  newInput3.setAttribute("min", "0");
  newInput3.setAttribute("max", "6");
  newInput3.classList.add("class-credit");
  newInput3.addEventListener("change", () => {
    setGPA();
  });

  // here is the select tag
  let newSelect = document.createElement("select");
  newSelect.classList.add("select");
  var opt1 = document.createElement("option");
  opt1.setAttribute("value", "");
  let textNode1 = document.createTextNode("");
  opt1.appendChild(textNode1);
  var opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);
  var opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  var opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  var opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  var opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  var opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  var opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  var opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  var opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  var opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  var opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  var opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  newSelect.appendChild(opt1);
  newSelect.appendChild(opt2);
  newSelect.appendChild(opt3);
  newSelect.appendChild(opt4);
  newSelect.appendChild(opt5);
  newSelect.appendChild(opt6);
  newSelect.appendChild(opt7);
  newSelect.appendChild(opt8);
  newSelect.appendChild(opt9);
  newSelect.appendChild(opt10);
  newSelect.appendChild(opt11);
  newSelect.appendChild(opt12);
  newSelect.appendChild(opt13);

  newSelect.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target);
  });

  let newButton = document.createElement("button");
  newButton.classList.add("trash-button");
  newButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.style.animation =
      "scaleDown 0.5s ease forwards";
    e.target.parentElement.parentElement.addEventListener(
      "animationend",
      (e) => {
        e.target.remove();
        setGPA();
      }
    );
  });
  let newItag = document.createElement("i");
  newItag.classList.add("fas");
  newItag.classList.add("fa-trash");
  newButton.appendChild(newItag);

  newDiv.appendChild(newInput1);
  newDiv.appendChild(newInput2);
  newDiv.appendChild(newInput3);
  newDiv.appendChild(newSelect);
  newDiv.appendChild(newButton);

  newForm.appendChild(newDiv);
  document.querySelector(".all-inputs").appendChild(newForm);
  newForm.style.animation = "scaleUp 0.5s ease forwards";
});

//trash button remove
let allTrash = document.querySelectorAll(".trash-button");
allTrash.forEach((trash) => {
  trash.addEventListener("click", (e) => {
    //console.log(e.target.parentElement.parentElement);  找父輩form
    //e.target.parentElement.parentElement.remove(); 刪form->改為動畫

    //REVIEW remo_ani 1.每個trash父輩classList加remove
    e.target.parentElement.parentElement.classList.add("remove");
  });
});

//trash button remove
allTrash.forEach((trash) => {
  let form = trash.parentElement.parentElement;
  form.addEventListener("transitionend", (e) => {
    //REVIEW remo_ani 3.每個trash父輩transitionend執行remove
    e.target.remove();
    setGPA();
  });
});

//排序
let btn1 = document.querySelector(".sort-descending");
let btn2 = document.querySelector(".sort-ascending");
btn1.addEventListener("click", () => {
  handleSorting("descending");
});
btn2.addEventListener("click", () => {
  handleSorting("ascending");
});

function handleSorting(direction) {
  let graders = document.querySelectorAll("div.grader");
  let objectArray = [];
  //console.log(objectArray.length);

  for (let i = 0; i < graders.length; i++) {
    let class_name = graders[i].children[0].value;
    let class_number = graders[i].children[1].value;
    let class_credit = graders[i].children[2].value;
    let class_grade = graders[i].children[3].value;

    if (
      !(
        class_name == "" &&
        class_number == "" &&
        class_credit == "" &&
        class_grade == ""
      )
    ) {
      let class_object = {
        class_name,
        class_number,
        class_credit,
        class_grade,
      };
      objectArray.push(class_object);
    }
  }

  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].class_grade_number = convertor(objectArray[i].class_grade);
    //console.log(objectArray.length);
  }

  objectArray = mergeSort(objectArray);
  if (direction == "descending") {
    objectArray = objectArray.reverse();
  }

  let allInputs = document.querySelector(".all-inputs");
  allInputs.innerHTML = "";

  console.log(objectArray.length);
  for (let i = 0; i < objectArray.length; i++) {
    console.log(objectArray.length);
    allInputs.innerHTML += `
  <form>
    <div class="grader">
      <input
        type="text"
        placeholder="class category"
        class="class-type"
        list="opt"
        value=${objectArray[i].class_name}
      /><!--
        --><input
        type="text"
        placeholder="class number"
        class="class-number"
        value=${objectArray[i].class_number}
      /><!--
      --><input
        type="number"
        placeholder="credits"
        min="0"
        max="6"
        class="class-credit"
        value=${objectArray[i].class_credit}

      /><!--
      --><select name="select" class="select">
        <option value=""></option>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="C-">C-</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="D-">D-</option>
        <option value="F">F</option>
      </select><!--
      -->
      <button class="trash-button"><i class="fas fa-trash"></i></button>
    </div>
  </form>
  
  <datalist id="opt">
      <option value="ACCT">Accounting</option>
      <option value="ASL">American Sign Language</option>
      <option value="ANTH">Anthropology</option>
      <option value="ART">Art</option>
      <option value="BIOL">Biological Science</option>
      <option value="BUSM">Business Mgt</option>
      <option value="CRDEV">Career Development</option>
      <option value="CHEM">Chemistry</option>
      <option value="CHIN">Chinese</option>
      <option value="COMM">Communication Studies</option>
      <option value="CIS">Computer &amp; Information Sciences</option>
      <option value="CS">Computer Science</option>
      <option value="CRMJ">Criminal Justice</option>
      <option value="ECON">Economics</option>
      <option value="EDU">Education</option>
      <option value="ELED">Elementary Education</option>
      <option value="EMGT">Emergency Management</option>
      <option value="ENGL">English</option>
      <option value="EIL">English as Int'l Language</option>
      <option value="ENTR">Entrepreneurship</option>
      <option value="EXS">Exercise Sport Science</option>
      <option value="FILM">Film</option>
      <option value="FIN">Finance</option>
      <option value="FORS">Forensic Science</option>
      <option value="FREN">French</option>
      <option value="GEOG">Geography</option>
      <option value="HAWN">Hawaiian</option>
      <option value="HWST">Hawaiian Studies</option>
      <option value="HLTH">Health</option>
      <option value="HIST">History</option>
      <option value="HEC">Home Economics</option>
      <option value="HTM">Hospitality Tourism Mgt</option>
      <option value="HUM">Humanities</option>
      <option value="IS">Information System</option>
      <option value="IT">Information Technology</option>
      <option value="ICS">International Cultural Studies</option>
      <option value="IPB">Intercultural Peacebuilding</option>
      <option value="JPN">Japanese</option>
      <option value="LING">Linguistics</option>
      <option value="AMOR">Maori</option>
      <option value="MATH">Mathematics</option>
      <option value="MUSC">Music</option>
      <option value="OCEN">Oceanography</option>
      <option value="PAIS">Pacific Island Studies</option>
      <option value="PHSC">Physical Science</option>
      <option value="POSC">Political Science</option>
      <option value="PSYC">Psychology</option>
      <option value="PMGT">Public Management</option>
      <option value="REL">Religion</option>
      <option value="SCI">Science</option>
      <option value="SAMN">Samoan</option>
      <option value="SCED">Secondary Education</option>
      <option value="SOCW">Social Work</option>
      <option value="SPAN">Spanish</option>
      <option value="SPED">Special Education</option>
      <option value="STDEV">Student Development</option>
      <option value="TESOL">TESOL</option>
      <option value="THEA">Theatre</option>
      <option value="TONG">Tongan</option>
      <option value="WLNG">World Language</option>
    </datalist>
  `;
  }

  //select可直接用JS更改
  graders = document.querySelectorAll("div.grader");
  for (let i = 0; i < graders.length; i++) {
    graders[i].children[3].value = objectArray[i].class_grade;
  }

  // for (let i = 0; i < objectArray.length; i++) {
  //   console.log(objectArray[i].class_name);
  //   if (objectArray[i].class_name == "/") {
  //     objectArray[i].class_name = "";
  //   }
  // }

  //綁select事件
  allSelects = document.querySelectorAll("select");
  allSelects.forEach((select) => {
    changeColor(select);
    select.addEventListener("change", (e) => {
      setGPA();
      changeColor(e.target);
    });
  });

  //綁type事件  點選時清空內容"/"使選單運作
  types = document.querySelectorAll(".class-type");
  types.forEach((type) => {
    type.addEventListener("click", (e) => {
      if (e.target.value == "/") {
        e.target.value = "";
      }
    });
  });

  //綁credit事件
  credits = document.querySelectorAll(".class-credit");
  credits.forEach((credit) => {
    credit.addEventListener("change", (e) => {
      setGPA();
    });
  });

  //綁trash button事件
  //trash button remove
  allTrash = document.querySelectorAll(".trash-button");
  allTrash.forEach((trash) => {
    trash.addEventListener("click", (e) => {
      //console.log(e.target.parentElement.parentElement);  找父輩form
      //e.target.parentElement.parentElement.remove(); 刪form->改為動畫

      //REVIEW remo_ani 1.每個trash父輩classList加remove
      e.target.parentElement.parentElement.classList.add("remove");
    });
    trash.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentElement.parentElement.style.animation =
        "scaleDown 0.5s ease forwards";
      e.target.parentElement.parentElement.addEventListener(
        "animationend",
        (e) => {
          e.target.remove();
          setGPA();
        }
      );
    });
  });

  //trash button remove
  allTrash.forEach((trash) => {
    let form = trash.parentElement.parentElement;
    form.addEventListener("transitionend", (e) => {
      //REVIEW remo_ani 3.每個trash父輩transitionend執行remove
      e.target.remove();
      setGPA();
    });
  });
}

function merge(a1, a2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i].class_grade_number > a2[j].class_grade_number) {
      result.push(a2[j]);
      j++;
    } else {
      result.push(a1[i]);
      i++;
    }
  }

  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length == 0) {
    return;
  }

  if (arr.length == 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}

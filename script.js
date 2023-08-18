let inputName = document.querySelector(".inputName");
let inputCaption = document.querySelector(".inputCaption");
let postBtn = document.querySelector(".postBtn");
let update = document.querySelector(".update");
let allpost = document.querySelector(".allpost");
let heading = document.querySelector(".heading");
heading.innerHTML = "No Post";

inputName.value =""
inputCaption.value =""

inputName.addEventListener("input", updateValue);
function updateValue() {
  if (inputName.value && inputCaption.value) {
    postBtn.classList.remove("disabled");
  } else {
    postBtn.classList.add("disabled");
  }
}
inputCaption.addEventListener("input", updateValue);
function updateValue() {
  if (inputName.value && inputCaption.value) {
    postBtn.classList.remove("disabled");
  } else {
    postBtn.classList.add("disabled");
  }
}

//Demo Data

arr = [];

postBtn.addEventListener("click", () => {
  if (inputName.value && inputCaption) {
    allpost.innerHTML = "";
    arr.push({
      name: inputName.value,
      des: inputCaption.value,
    });
    display();
  }

  if (arr.length == 0) {
    heading.innerHTML = "No Post";
  } else {
    heading.innerHTML = "";
  }
  inputName.value = "";
  inputCaption.value = "";
  postBtn.classList.add("disabled");
});


update.addEventListener("click", () => {
    if(inputName.value && inputCaption.value){
        arr[updateIndex] = {
            name: inputName.value,
            des: inputCaption.value,
          };
          allpost.innerHTML = "";
          display();
    }
  update.style.display = "none";
  postBtn.style.display = "inline-block";
  inputName.value = ""
  inputCaption.value = ""
  postBtn.classList.add("disabled");
});

let updateIndex;

function display() {
  arr.map((item) => {
    allpost.innerHTML += `<div class="card" style="width: 18rem;margin-right: 20px;">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">
            ${item.des}
          </p>
          <a href="#" class="btn btn-primary edit">Edit</a>
          <a href="#" class="btn btn-danger delete">Delete</a>
        </div>
      </div> `;
  });
  //Delete Button Start
  let deleteBtn = document.querySelectorAll(".delete");
  let deleteArray = Array.from(deleteBtn);
  deleteArray.map((item, index) => {
    item.addEventListener("click", () => {
      allpost.innerHTML = "";
      arr.splice(index, 1);
      display();

      if (arr.length == 0) {
        heading.innerHTML = "No Post";
      } else {
        heading.innerHTML = "";
      }
    });
  });

  //Delete Button End

  //Edit Button Start
  let edit = document.querySelectorAll(".edit");
  let editArray = Array.from(edit);
  editArray.map((item, index) => {
    item.addEventListener("click", () => {
      updateIndex = index;
      (inputName.value = arr[index].name),
        (inputCaption.value = arr[index].des);
      postBtn.style.display = "none";
      update.style.display = "inline-block";
    });
  });

  //Edit Button End
}

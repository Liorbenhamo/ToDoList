const add = document.querySelector("#add");
const mission = document.querySelector("#mission");
const ul1 = document.querySelector("#ul1");
let newtask;
add.addEventListener("click", () => {
  newtask = mission.value;
  mission.value = "";
  if (newtask.trim()) {
    console.log(newtask);
    const span = document.createElement("span");
    span.innerText = newtask;
    span.addEventListener("click", () => {
      span.parentElement.classList.toggle("green");
    });
    const delete1 = document.createElement("button");
    delete1.innerText = "delete";
    delete1.addEventListener("click", () => {
      delete1.parentElement.parentElement.remove();
    });
    const favorite = document.createElement("button");
    favorite.innerText = "favorite";
    favorite.addEventListener("click", () => {
      favorite.parentElement.parentElement.classList.toggle("yellow");
      favorite.classList.toggle("yellow");
    });
    const smfather = document.createElement("div");
    smfather.appendChild(delete1);
    smfather.appendChild(favorite);
    const list = document.createElement("li");
    list.appendChild(span);
    list.appendChild(smfather);
    ul1.appendChild(list);

    console.log(list);
  } else {
    alert("wrong input");
  }
});

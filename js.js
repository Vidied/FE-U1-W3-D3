c = () => console.log();

const creaNuovaTask = function (contenuto) {
  const divtask = document.createElement("div");
  divtask.classList.add("divPerTask");

  const eliminatask = document.createElement("p");
  eliminatask.classList.add("pPerIcona");
  eliminatask.innerHTML = '<i class="far fa-trash-alt"></i>';

  //elimina task
  eliminatask.addEventListener("click", function () {
    divtask.remove();
  });

  const nuovaTask = document.createElement("li");
  nuovaTask.innerText = contenuto;
  nuovaTask.addEventListener("click", function (e) {
    c("click su task", contenuto);

    //Per sbarrare le task
    nuovaTask.classList.toggle("completato");
  });

  nuovaTask.addEventListener("mouseenter", function () {
    nuovaTask.style.transform = "scale(1.1)";
    nuovaTask.style.backgroundColor = "#95ff77";
    nuovaTask.style.cursor = "pointer";
    nuovaTask.style.padding = "0.2em 0";
  });

  nuovaTask.addEventListener("mouseleave", function () {
    nuovaTask.style.transform = "scale(1)";
    nuovaTask.style.backgroundColor = "#2a2e2e";
  });

  const lista = document.getElementById("lista");
  divtask.appendChild(nuovaTask);
  divtask.appendChild(eliminatask);
  lista.appendChild(divtask);
};

const toDoSubmitFunction = function (e) {
  e.preventDefault();
  const task = document.getElementById("task");
  const contenutotask = task.value;

  c("task salvata:", task);

  creaNuovaTask(contenutotask);
  task.value = "";
};

const form = document.getElementById("taskList");
form.addEventListener("submit", toDoSubmitFunction);

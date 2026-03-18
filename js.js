c = () => console.log();

const creaNuovaTask = function (contenuto) {
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
  lista.appendChild(nuovaTask);
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

var tasks = [];

function addTodo() {
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  if (title == "" || body == "") {
    alert("Sorry Enter Something");
  } else {
    tasks.push({
      title: title,
      body: body,
      date: new Date().toDateString()
    });

    document.querySelector("form").reset();
    showTasks();
    console.log(tasks);
  }
}

function showTasks() {
  let output = "";
  tasks.map(data => {
    output += `
                        <li class="list-group mb-1">
                            <ul class="list-group-item">Title : ${
                              data.title
                            }</ul>
                            <ul class="list-group-item">Body : ${data.body}</ul>
                            <ul class="list-group-item">Time : ${data.date}</ul>
                           <div class="container"> <button class="btn btn-secondary  mb-1 mt-2">Delete</button></div>
                        </li>
                        <hr>
                    `;
  });
  document.getElementById("tasks").innerHTML = output;
}

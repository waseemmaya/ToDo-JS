var tasks = [];

function addTodo() {
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  if (title == "" || body == "") {
    alert("Sorry Enter Something");
  } else {
    tasks.unshift({
      key: Math.floor(100444000 + Math.random() * 90012000),
      title: title,
      body: body,
      date: new Date().toDateString()
    });
    document.querySelector("form").reset();
    showTasks();
  }
}

function showTasks() {
  var output = "";
  tasks.map(data => {
    output += `
                        <li class="list-group mb-1">
                            <ul class="list-group-item">Title : ${
                              data.title
                            }</ul>
                            <ul class="list-group-item">Body : ${data.body}</ul>
                            <ul class="list-group-item">Time : ${data.date}</ul>
                             <ul class="list-group-item"><button onClick="deleteTask(${
                               data.key
                             },'${
      data.title
    }')" class="myButton btn btn-sm btn-danger float-right">
                                                   Delete
                                                   </button>
                                                   <button onClick="editTask(${
                                                     data.key
                                                   },'${
      data.title
    }')" class="myButton btn btn-sm btn-warning float-right">
                                                   Edit 
                                                   </button></ul>
                           
                        </li>
                        `;
  });
  document.getElementById("tasks").innerHTML = output;
}

function deleteTask(val, tit) {
  var confirmDelete = confirm(`Are you sure you want to delete "${tit}"`);
  if (confirmDelete) {
    //Logic to delete the item
    for (var i = 0; i < tasks.length; i++)
      if (tasks[i].key === val) {
        tasks.splice(i, 1);
        showTasks();
        break;
      }
  }
}

function editTask(val, tit) {
  //Logic to Edit the item
  for (var i = 0; i < tasks.length; i++)
    if (tasks[i].key === val) {
      tasks[i].body = prompt("Enter new value for " + tit);
      showTasks();
      break;
    }
}

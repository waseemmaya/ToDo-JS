var tasks = [];

function addTodo() {
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  if (title == "" || body == "") {
    alert("Sorry Enter Something");
  } else {
    tasks.push({
      key: Math.floor(100444000 + Math.random() * 90012000),
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
  var output = "";
  tasks.map(data => {
    output += `
                        <li class="list-group mb-1">
                            <ul class="list-group-item">Title : ${
                              data.title
                            }</ul>
                            <ul class="list-group-item">Body : ${data.body}</ul>
                            <ul class="list-group-item">Time : ${data.date}</ul>
                           <div class="container"> 
                           <button onClick="deleteTask(${data.key},'${
      data.title
    }')" class="btn btn-primary  mb-2 mt-2" data-toggle="modal" data-target="#myModal">
                           Delete
                           </button>
                           </div>
                        </li>
                        <hr>
                    `;
  });
  document.getElementById("tasks").innerHTML = output;
}

function deleteTask(val, tit) {
  console.log(tit);
  var result = confirm(`Are you sure you want to delete?  
  <h3>${tit}</h3>`);
  if (result) {
    //Logic to delete the item
    for (var i = 0; i < tasks.length; i++)
      if (tasks[i].key === val) {
        tasks.splice(i, 1);
        showTasks();
        break;
      }
  }
}

// function deleteTask(val) {
//   console.log(val);
//   tasks.forEach(element => {
//     console.log(element.key);
//     if (val === element.key) {
//       console.log("mil gaya");
//     }
//   });
// }

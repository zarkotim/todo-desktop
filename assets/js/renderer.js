// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {BrowserWindow} = require("electron").remote
const path = require("path");
const Todo = require("./models/todo");

console.log("radi")

lista = [];

// FUNCTIONS

// prevents form from default action
var prevent = function(){
  var form = document.querySelector("form").addEventListener("submit", function(event){

  event.preventDefault();

})
}
// add new todo to a list
var add = function(todo){

  var li = document.createElement("li");
  li.innerHTML = todo.name;
  var ol = document.getElementById("list").appendChild(li);



}

// #########################################################

//takes the button bt hes id and creates a new window which contains form
// to add new event to a list ;
 var formButton = document.getElementById("add-event").addEventListener("click", function(){

const modalePath = path.join("file://", __dirname, "newtask.html");
let win = new BrowserWindow({width: 400, height: 320});

win.on("close", ()=>{win = null})
win.loadURL(modalePath);
win.openDevTools();
win.show();

})



// creation of new task





  var data = document.getElementById("submit-form");
  
  data.addEventListener("click", function(){

	prevent();

	var name = document.getElementsByName("name")[0]
	var date = document.getElementsByName("date")[0]
	var location = document.getElementsByName("location")[0]
	var description = document.getElementsByName("description")[0]


	var newTask = new Todo(name, date, location, description);

 	var li = document.createElement("li");
 	li.innerHTML = newTask.name;
 	ol = document.getElementById("list");
 	ol.appendChild(li);
})

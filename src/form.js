// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const electron = require("electron");
const path = require("path");
const remote = electron.remote;
const ipcRenderer = electron.ipcRenderer;
const Todo = require("../models/todo");

console.log("helo from form js")

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
var form = document.querySelector("form").addEventListener("submit", function(event){

  event.preventDefault();



  

  var name = document.getElementById("name").value;
  var date = document.getElementById("date").value;
  var location = document.getElementById("location").value;
  var description = document.getElementById("description").value;


  var newTask = new Todo();
  newTask.name = name;
  newTask.date = date;
  newTask.location = location;
  newTask.description = description;
  console.log(newTask.name + "ovo je objekat")
  

  ipcRenderer.send("dataForm", newTask.name);
 

  
})










// creation of new task


  


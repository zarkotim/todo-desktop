// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {BrowserWindow} = require("electron").remote ;
const path = require("path");
const Todo = require("../models/todo");
const electron = require("electron");


const ipcRenderer = electron.ipcRenderer;
const shell=require("electron").shell;

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
  li.innerHTML = todo;
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






ipcRenderer.on("dataForm", (event, arg)=>{
	console.log(arg + "stigao je arg")
	add(arg)
})

/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
// function onDataReceived(text) {
//   if (text === 'quit\n'|| text === 'exit\n') {
//     quit();
//   }
//   else if(text === 'hello\n'){
//     hello();
//   }
//   else if(text === 'help\n'){
//     help();
//   }
//   else{
//     unknownCommand(text);
//   }
// }
function onDataReceived(text) {
  const txt =text.split(" ")[0].trim();
  if (text === 'quit\n'|| text === 'exit\n') {
    quit();
  }
  
  else if(txt === 'hello'){
    hello(text);
  }
  else if(txt=== 'help'){
  help();
  }
  else if(txt === 'list'){
     list();
  }
  else if (txt === 'add') {
  add(text);
} 
else if (txt === 'remove') {
  remove(text);

}
else if (txt === 'edit') {
  edit(text);
}
else if(txt === 'check'){
  check(text);
}
else if(txt === 'uncheck'){
  uncheck(text);
}

  else{
    unknownCommand(text);
  }
}

const tasks=[
  // "tomato",
  // "onions","potato","salt"
  //  ]
  {task:"tomato",done:true},
  {task:"onions",done:false},
  {task:"potato",done:true},
  {task:"salt",done:false},
]




function list(){
 for (let i=0;i<tasks.length;i++) {
  // console.log(`${i+1} - [ ] ${tasks[i]}`)
  console.log(`${i+1} - [${tasks[i].done? "✓":" "}] ${tasks[i].task}`)
 }
}
function add(text){
  if(text.trim().length==3){
    console.log("error, please add a task after using add command")
  }
  else{
    //tasks.push(text.slice(4,text.length).trim());
    tasks.push({task:text.slice(4,text.length).trim(),done:false});
    console.log("Task aded succesfully")
  }
}
//remove a task

function remove(text) {
  if (text.trim().length === 6) {
    tasks.pop();
    console.log("The last element removed.");
  } else {
    let index = parseInt(text.slice(6, text.length).trim()) - 1;

    if (isNaN(index) || index < 0 || index >= tasks.length) {
      console.log("Invalid task number. Please enter a valid task number.");
    } else {
      tasks.splice(index, 1);
      console.log(`Task ${index + 1} is removed.`);
    }
  }
}


// function edit(text) {
//   const parts = text.split(" ");

//   if (parts.length === 1) {
//     console.log("Error: Please specify a task number and the new text for editing.");
//     return;
//   }

//   if (parts[1] === "new" && parts.length === 2) {
//     // Edit the last task
//     tasks[tasks.length - 1] = "new text";
//     console.log("Last task is updated to 'new text'.");
//   } else if (!isNaN(parts[1]) && parts.length >= 3) {
//     const taskIndex = parseInt(parts[1]) - 1;
//     if (taskIndex >= 0 && taskIndex < tasks.length) {
//       const newText = parts.slice(2).join(" ");
//       tasks[taskIndex] = newText;
//       console.log(`Task ${taskIndex + 1} is updated to '${newText}'.`);
//     } else {
//       console.log("Invalid task number. Please enter a valid task number.");
//     }
//   } else {
//     console.log("Error: Invalid edit command format.");
//   }
// }
function edit(text){
  let text_edit=text.slice(4,text.length).trim();
  let i=text.trim().split(" ")[1]-1;
  let splited_text=text.slice(4,text.length).trim();
  let new_text=text.slice(7,text.length)

    if(text.trim().length==4){
    console.log("Error, type a task  ");
  }
  else if(i>=0){
tasks[i]=new_text.replace("\n","");
console.log(`Task ${i+1} is edited `);

}
else{
tasks[tasks.length-1]=splited_text;
console.log(` The last task edited `);
}
}

function check(text){
  let index=text.slice(5,text.length).trim()-1;


  if(index>=tasks.length || index<0){
    console.log("Error, number of task doesn't exist")
  }
  else{
tasks[index].done=true;
console.log(`Task ${index+1} Checked succesfully`)

}}



function uncheck(text){
  let index=text.slice(7,text.length).trim()-1;


  if(index>=tasks.length || index<0){
    console.log("Error, number of task does not exist")
  }
  else{
tasks[index].done=false;
console.log(`Task ${index+1} is  unchecked `)

}}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log(text.replace('\n','!'));
}

/** 
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 * 
 *"help" provides information and assistance for using software or systems.
 * 
 */

function help(){
  console.log('help command will help you to print help information.');
  console.log("hello:prints hello!");
  console.log("quit:quits the application");
  console.log("help:prints this message");
  console.log("unknown command:prints this message");
  console.log(" hello:prints hello!");
  console.log("hello_X:print hello X!");
  console.log("list: lists all tasks.");
  console.log("add [task]: adds a new task to the task list.");
  console.log("remove [task number]: removes a task from the task list by its number.");
  console.log("edit [task number] [new text]: edits a task by its number.");
  console.log("check [task number]: marks a task as done. Use 'check' followed by the task number.");
  console.log("   Example: 'check 1' marks the first task as done.");
  console.log("uncheck [task number]: marks a task as undone. Use 'uncheck' followed by the task number.");
  console.log("   Example: 'uncheck 1' marks the first task as undone.");
}
// The following line starts the application
startApp("Rana Nemer");


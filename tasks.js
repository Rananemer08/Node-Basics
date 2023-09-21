
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

  else{
    unknownCommand(text);
  }
}

const tasks=[
  "tomato",
  "onions","potato","salt"
   ]



function list(){
 for (let i=0;i<tasks.length;i++) {
  console.log(`${i+1} - [ ] ${tasks[i]}`)
 }
}
function add(text){
  if(text.trim().length==3){
    console.log("error, please add a task after using add command")
  }
  else{
    tasks.push(text.slice(4,text.length).trim());
  }
}
//remove a task

function remove(text){

  if(text.trim().length==6){
    tasks.pop();
    console.log(" The Last element removed ")
  }
  else{
    let index=text.slice(6,text.length).trim()-1;
tasks.splice(index,1);
console.log(`Task ${index+1}  is removed `)

}
}

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
  
}
// The following line starts the application
startApp("Rana Nemer");


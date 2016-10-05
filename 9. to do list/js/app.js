// user interaction doesnt provide desired results
// add interactivity

document.getElementsByTagName("button")[0].addEventListener("click", addNewTask); 

var parentInc = document.getElementById("incomplete-tasks"),
    parentCom = document.getElementById("completed-tasks"),
    newTask, theKid, savedEvent;


function addNewTask() { // add new task
    newTask = document.getElementById('new-task').value;
    theKid = document.createElement("li");
    if(newTask.length>1) {
    theKid.innerHTML = "<input type='checkbox'><label>" + newTask + "</label><input type='text'><button class='edit'>edit</button><button class='delete'>Delete</button>";
    parentInc.appendChild(theKid);
    } 
    else alert('write something');
};

function deleteTask(deletedElem) { // delete new task
    console.log(deletedElem);
    parentInc.removeChild(deletedElem);
    //parentCom.appendChild(deletedElem);
};

parentInc.addEventListener('click', function (e) { // add listener to parent container
    if (hasClass(e.target, 'delete')) {
        savedEvent = e.target.parentNode;
        deleteTask(savedEvent);
    } else if (hasClass(e.target, 'edit')) { // we can add 1 or more listeners
        savedEvent = e.target.parentNode;
        editList(savedEvent);
    }
}, false);

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
};

function editList(editedElem) { // edit list and change value of label
    if( !editedElem.className) editedElem.className = "editMode";
    else  {
        var att = document.createAttribute("value");
        //att.value = 'dfdfdf'; //editedElem.childNodes[2].value; 
        editedElem.childNodes[2].setAttribute('value', 'sdfsdfsdf');
        editedElem.childNodes[1].textContent = editedElem.childNodes[2].value;
        editedElem.className = "";
    }
};

// now we work with checkboxs

var numberChecked = document.querySelectorAll('[checked]'),
    numberCheckbox;

for(var i = 0; i < numberChecked.length; i++) {
    console.log(numberChecked[i]);
    numberChecked[i].addEventListener("click", addIncomplete);
};

function addIncomplete() {
    parentCom.removeChild(this.parentNode);
    parentInc.appendChild(this.parentNode);
};

var numberCheckbox = document.querySelectorAll('[type="checkbox"]');
for (var i = 0; i < numberCheckbox.length; i++) {
   if(!numberCheckbox[i].checked) {
       numberCheckbox[i].addEventListener("click", addCompleted);
   }
}

function addCompleted() {
    parentInc.removeChild(this.parentNode);
    parentCom.appendChild(this.parentNode);
};


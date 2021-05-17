
var dateTime = luxon.DateTime;
let dt = dateTime.now();
$("#currentDay").text(dt.toLocaleString(dateTime.DATETIME_FULL));

var containerEl = $(".container");
var ulEl = $("<ul>");

var liEl = [];

var locStorage = {
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
}

if (JSON.parse(localStorage.getItem("event")) === null) {
    localStorage.setItem("event", JSON.stringify(locStorage));
} else {
    locStorage = JSON.parse(localStorage.getItem("event"));
}



for (i = 0; i <=8; i++) {
    liEl.push($("<li>"));
    liEl[i].css({"list-style": "none", "display": "flex"});
    liEl[i].append($("<p>"));
    liEl[i].append($("<textarea>"));
    liEl[i].append($("<button>"));
    if (i < 3){
        liEl[i].children().eq(0).text(`${(i+9).toString()}am`)
        liEl[i].children().eq(2).attr("id", `${(i+9).toString()}am`)
        liEl[i].children().eq(1).val(JSON.parse(localStorage.getItem("event"))[`${(i+9).toString()}am`]);
    } else if (i === 3){
        liEl[i].children().eq(0).text(`${(i+9).toString()}pm`)
        liEl[i].children().eq(2).attr("id", `${(i+9).toString()}pm`)
        liEl[i].children().eq(1).val(JSON.parse(localStorage.getItem("event"))[`${(i+9).toString()}pm`]);
    } else {
        liEl[i].children().eq(0).text(`${(i-3).toString()}pm`)
        liEl[i].children().eq(2).attr("id", `${(i-3).toString()}pm`)
        liEl[i].children().eq(1).val(JSON.parse(localStorage.getItem("event"))[`${(i-3).toString()}pm`]);
    }
        liEl[i].children().eq(1).css({"border-style": "solid", "border-color": "grey",});
        liEl[i].children().eq(2).text("SAVE"); //💾
        liEl[i].children().eq(2).addClass("saveBtn");
        ulEl.append(liEl[i]);
}
containerEl.append(ulEl);

function storeText(event) {
    let object = $(event.target);
    locStorage[object.attr("id")] = object.siblings().eq(1).val();
    localStorage.setItem("event", JSON.stringify(locStorage));
}

for (i in liEl) {
    liEl[i].on("click", "button", storeText);
   
}

// interval = setInterval(function()) {

// }
//





//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------







// const input = document.getElementById("myInput");
// var item;
// function readValue() {
//     item = localStorage.getItem("input");
//     document.getElementById("myInput").innerHTML = item;
// }
// function newElement() {
//     localStorage.setItem("input", JSON.stringify(item));
//     readValue(); 
// } 

// function saveBtn() {
//     localStorage.setItem('newElement', JSON.stringify(item));
// }







// const item = {
//     newElement(): 
    
// }

// window.localStorage.setItem('mike', JSON.stringify(item));






//const list = document.getElementById("list");

    // let DateTime = luxon.DateTime;
    // let today = DateTime.local().toLocaleString(DateTime.DATE_HUGE);
    // console.log(today);
    // let date = document.querySelector("#currentDay");
    // date.textContent = today;

//let myInput = newElement(); 

//const newElement = myInput.value;


// function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//         alert("please enter something to add to the list");
//     } else {
//         document.getElementById("textArea").appendChild(li);
//     } console.log(newElement);
//     document.getElementById("myInput").value = "";
    



//     var span = document.createElement("span");
//     var txt = document.createTextNode("delete");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);

//     console.log(t)

//     // make delete button function
//         // span.onclick = function() {
//         //     var div = this.parentElement;
//         //     div.style.display = "none";
//         // }
// } 

// document.addEventListener("keyup", function(event) {
//         if(event.keyCode == 13) {
// }   
// });



//variables
// let LIST, id, data;



    // check if data is not empty
// if(data) {
//     //LIST = JSON.parse(data);
//     id = LIST.length; // set the id to the last one in the list
//     loadList(LIST); // load the list to the user interface
// }else {
//    //if data isn't empty
//    LIST = [];
//    id = 0;
// }

//load items to the user's interface
// function loadList(array) {
//    array.forEach(function(item){
//        addToDo(item.name, item.id, item.done, item.trash);
//    });
// }

    // function addToDo(toDo, id, done, trash) {

    //     if(trash) {return};
    
    //    const DONE = done ? CHECK : UNCHECK;
    //     const LINE = done ? LINE_THROUGH : "";
    
    //      const item = `
    //      <li class="item">
    //      <i class="fa ${DONE} co" job="complete" id="id"></i>
    //      <p class="text ${LINE}">${toDo}</p>
    //      <i class="fa fa-trash-o de" job="delete" id="id"></i>
        
    //        </li>          `;
    //     const position = "beforeend";
        
    //     LIST.insertAdjacentHTML(position, item);
    // }
    
    // addToDo("drink coffee");




// document.addEventListener("keyup", function(event){
//     if(event.keyCode == 13) {
//         const toDo = input.value;

//         //if the input isn't empty
//         if(toDo) {
//             addToDo(toDo, id, false, false); 
            
//             LIST.push({
//                 name: toDo?
//                 id : id,
//                 done: false,
//                 trash: false,

//             });
//             //add item to local storage (this code must be added where the LIST array is updated)
//             localStorage.setItem("TODO", JSON.stringify(LIST));
//             id++;
//         }
//         input.value = "";
//     }
// });



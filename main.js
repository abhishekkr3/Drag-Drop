var draggedItem = null;

  function drag(event) {
   draggedItem = event.target;
   event.dataTransfer.setData("text", event.target.id);
   event.target.classList.add("dragging");
  }

  function allowDrop(event) {
   event.preventDefault();
  }

  function drop(event) {
   event.preventDefault();
   var data = event.dataTransfer.getData("text");
   event.target.appendChild(draggedItem);
   draggedItem.classList.remove("dragging");
   document.getElementById("successMessage").innerHTML = "Item dropped successfully!";
   setTimeout(function() {
    document.getElementById("successMessage").innerHTML = "";
   }, 2000);
  }

  function reset() {
   var container1 = document.getElementById("container1");
   var container2 = document.getElementById("container2");
   while (container2.firstChild) {
    container1.appendChild(container2.firstChild);
   }
   
   }
  
 
function addItem() {
    let ul = document.getElementById("list-of-items");
    let li = document.createElement("li");
    let item = document.getElementById("new-item").value;

    li.appendChild(document.createTextNode(item));
    li.setAttribute("id", item.replace(/\s/g, '')); // added line
    ul.appendChild(li);
    alert(li.id);

  }
  
  function addDeleteButton (){
    let ul = document.getElementById("list-of-items");
    let li = document.createElement("li");
    let deleteButton = " X"

    li.appendChild(document.createTextNode(deleteButton));
    li.setAttribute("id", item.replace(/\s/g, '') + 1); 
    ul.append(li);
  }

  function deleteItem (){
      alert("button connected")
  }
function addItem() {
    let ul = document.getElementById("list-of-items");
    let li = document.createElement("li");
    let item = document.getElementById("new-item").value;

    li.appendChild(document.createTextNode(item + addDeleteButton(ul, li, item)));
    li.setAttribute("id", item.toLowerCase().replace(/\s/g, '')); // added line
    ul.appendChild(li);

  }
  
  function addDeleteButton (ul, li, item){

    li.appendChild(document.createTextNode("X "));
    li.setAttribute("id", item.replace(/\s/g + 1, ''));
    ul.appendChild(li)

   
  }

  function deleteItem (){
      alert("button connected")
  }
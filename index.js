function addItem() {
    var ul = document.getElementById("list-of-items");
    var li = document.createElement("li");
    var item = document.getElementById("new-item").value;

    alert(item)

    li.appendChild(document.createTextNode(item));
    li.setAttribute("id", item.replace(/\s/g, '')); // added line
    li.appendChild(document.createTextNode(" X"));
    ul.appendChild(li);
    alert(li.id);
  }

  function deleteItem (){
      alert("button connected")
  }
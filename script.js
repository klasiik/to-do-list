/*ADD NEW LIST*/
var listAmount = 0;

var addNewList = function() {
	listAmount = listAmount + 1;

	var container = document.getElementById("container");

	var listContainer = document.createElement("div");
	container.appendChild(listContainer);
	listContainer.id = "list" + listAmount;

	var addDiv = document.createElement("div");
	container.appendChild(addDiv);
	addDiv.id = "add";

 	var inputText = document.createElement("input");
	addDiv.appendChild(inputText);
	inputText.type = "text";
	inputText.placeholder = "Add item...";
	inputText.name = "add-item";
	inputText.id = "add-text";

	var inputButton = document.createElement("input");
	addDiv.appendChild(inputButton);
	inputButton.type = "button";
	inputButton.value = "ADD ITEM";
	inputButton.name = "add-item-button";
	inputButton.id = "add-button";

	var listDiv = document.createElement("div");
	container.appendChild(listDiv);
	listDiv.id = "list";

	var listUl = document.createElement("ul");
	listDiv.appendChild(listUl);
	listUl.id = "list-ul";
};

var newListButton = document.getElementById("add-item-button");
newListButton.addEventListener("click", addNewList);

/* NEW LIST ITEM*/

var newListItem = function() {
	var uList = document.getElementById("list-ul");
	var newItemInput = document.getElementById("add-text");

	var newItemDiv = document.createElement("li");
	uList.appendChild(newItemDiv);
	newItemDiv.innerHTML = newItemInput.value;

	var newItemDel = document.createElement("div");
	newItemDiv.appendChild(newItemDel);
	newItemDel.innerHTML = "Delete";

	newItemDel.addEventListener("click", deleteListItem);

	var newItemDone = document.createElement("div");
	newItemDiv.appendChild(newItemDone);
	newItemDone.innerHTML = "Done";
};

var addButton = document.getElementById("add-button");
addButton.addEventListener("click", newListItem);

/*DELETE LIST ITEM */
var deleteListItem = function() {
	this.parentNode.parentNode.removeChild(this.parentNode);
};



/*var body = framework.tag("body")[0];
framework.attr(body, {
	background: "gfx/back.jpg"
})

var container = framework.create("div");
framework.append(body, container);
*/
//new item addition
/*var newItemLabel = framework.create("label");
framework.append(container, newItemLabel);
framework.attr(newItemLabel, {
	for: content,
	innerHTML: "Add new thing to do: "
})*/
/*
var newItemInput = framework.create("input");
framework.append(container, newItemInput);
framework.attr(newItemInput, {
	id: "content",
	name: "content",
	placeholder: "Type new item to add"
})

var newItemSubmit = framework.create("input");
framework.append(container, newItemSubmit);
framework.attr(newItemSubmit, {
	type: "submit",
	value: "Add"
});

var listUpcomingDiv = framework.create("div");
framework.append(container, listUpcomingDiv);
listUpcomingDiv.className = "upcoming";
var listUpcoming = framework.create("ul");
framework.append(listUpcomingDiv, listUpcoming);


newItemSubmit.addEventListener("click", addNewItemUpcoming, false);
*/

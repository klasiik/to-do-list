var newListItem = function() {
	var uList = document.getElementById("list-ul");
	var newItemInput = document.getElementById("add-text");

	var newItemDiv = document.createElement("li");
	uList.appendChild(newItemDiv);
	newItemDiv.innerHTML = newItemInput.value;
};

var addButton = document.getElementById("add-button");
addButton.addEventListener("click", newListItem);

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

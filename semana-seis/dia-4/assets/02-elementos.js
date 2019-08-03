var autos = ["marca1", "marca2", "marca3", "marca7"]
var principal = document.getElementById("principal")
var nuevoul = document.createElement("ul");
nuevoul.style.display = "flex"
principal.appendChild(nuevoul)
for (var i = 0; i < autos.length; i++) {
    var nuevoli = document.createElement("li");
    nuevoli.innerHTML = autos[i];
    nuevoli.style.marginRight = "2rem"
    nuevoli.style.display = "flex"
    nuevoli.classList.add("item")
    nuevoul.appendChild(nuevoli);
}

console.log(nuevoul.children);
console.log(nuevoul.children[2]);

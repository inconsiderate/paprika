setTimeout(function() {
    document.body.style.color="red";

    var array = document.getElementsByClassName("poster");

    for (let index = 0; index < array.length; index++) {

        var div = document.createElement("div");
        div.setAttribute('class', 'paprika');
        div.textContent = "Paprika: 3/21";
        array[index].prepend(div);
        
    }

}, 1000);



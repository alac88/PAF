function Search() {
            // Declare variables
            var input, filter, ul, li, a, i;
            input = document.getElementById('input');
            filter = input.value.toUpperCase();
            ul = document.getElementById("inputList");
            li = ul.getElementsByTagName('li');

            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
            li[i].style.display = "none";
        }
    }
}

var ul = document.getElementById('inputList');
var input = document.getElementById('input');
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

function FillSearch(event) {
    var target = getEventTarget(event);
    input.value = target.innerHTML;
    Search();
    load_monument(input.value);
}

function ButtonSearch(){
    if (document.getElementById("resourceMonuments").checked){
        setResult("resourceMonuments");
    }
    if (document.getElementById("resourceHistoricalPlaces").checked){
        setResult("resourceHistoricalPlaces");
    }
    if (document.getElementById("resourceWorldHeritageSites").checked){
        setResult("resourceWorldHeritageSites");
    }
    if (document.getElementById("resourceArchitecturalStructures").checked){
        setResult("resourceArchitecturalStructures");
    }

}

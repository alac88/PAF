//Barre de recherche

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

/*function ButtonSearch(){
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

}*/

var currentInputValue = "";
var isTimerSet = false;
var interval;

function launch_query_when_type_ended()
{
	if(launchQuery && currentInputValue.localeCompare(input.value) != 0)
	{
		$("#searchingForResult").css("display","block");
		ButtonSearch();
		isTimerSet = false;
		clearInterval(interval);
	}
}

function ButtonSearch(){
    if(launchQuery) {
		
		if(!isTimerSet)
		{
			interval = setInterval(function(){launch_query_when_type_ended();},300);
			isTimerSet = true;
		}
		
		launchQuery = false;
		
		currentInputValue = input.value;
		
        var URI1 = dbpediaQueries[labels["resourceMonuments"]][3];
        var URI2 = dbpediaQueries[labels["resourceHistoricalPlaces"]][3];
        var URI3 = dbpediaQueries[labels["resourceWorldHeritageSites"]][3];
        var URI4 = dbpediaQueries[labels["resourceArchitecturalStructures"]][3];
        if (!document.getElementById("resourceMonuments").checked) {
            URI1 = null;
        }
        if (!document.getElementById("resourceHistoricalPlaces").checked) {
            URI2 = null;
        }
        if (!document.getElementById("resourceWorldHeritageSites").checked) {
            URI3 = null;
        }
        if (!document.getElementById("resourceArchitecturalStructures").checked) {
            URI4 = null;
        }
        var array = new Array(URI1, URI2, URI3, URI4);
        for (var j = 0; j < array.length; j++) {
            if (array[j] == null) {
                for (var k = j + 1; k < array.length; k++) {
                    if(array[k]!=null){
                        array[j]=array[k];
                        array[k]=null;
                        break;
                    }

                }

            }
        }
        //alert(array);
        var regexp = make_regexp("str(?s)","http://dbpedia.org/resource/.*" + input.value.replace(/ /gi,"_") + ".*","i");
        var countryselectedvalue=document.getElementById('country').value;
		var countryselected = "";
		
		if(countryselectedvalue.localeCompare("Tous") != 0)
		{
			countryselected = countryselectedvalue;
		}
		
		//alert("CS=" + countryselected);
        setResult("combinedQuery",countryselected,make_combined_filter(array[0],array[1],array[2],array[3],regexp),0);
        if (ul.childNodes.length<limit){
            //launchQuery=false;
        }

    }
	else
	{
		$("#searchingForResult").css("display","block");
	}
}


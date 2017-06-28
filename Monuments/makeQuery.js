var countryArray = null;

var currenCountryName = "";

var launchQuery = true;

var nameAndURIArray = null;
var currentFilter = "";
var currentOffSet = 0;
var currentCategory = "";
var maxOffset = 0;


// url of website where we can make SPARQL queries
var dataBasesSparql = ["http://sparql.europeana.eu/",
    "http://dbpedia.org/sparql"];

// RDF graphs
var dataBases = ["http://data.europeana.eu/",
    "http://dbpedia.org"];

var outputFormats = {html : "text%2Fhtml",
    json : "application%2Fsparql-results%2Bjson",
    turtle : "text%2Fturtle",
    NTriples : "text%2Fplain",
    js : "application%2Fjavascript"};

/*$(document).ready(function()
{
    buttons[0].onclick = function(){setResult("resourceMonuments","",0);};
    buttons[1].onclick = function(){setResult("resourceHistoricalPlaces","",0);}
    buttons[2].onclick = function(){setResult("resourceWorldHeritageSites","",0);}
    buttons[3].onclick = function(){setResult("resourceArchitecturalStructures",make_regexp_filter(make_regexp("str(?s)","http://dbpedia.org/resource/.*sun.*","i")),0);}
    buttons[4].onclick = function(){setResult("combinedQuery",make_combined_filter("<http://dbpedia.org/ontology/HistoricPlace>","<http://dbpedia.org/ontology/WorldHeritageSite>",null,null,""),0);}
});*/

// return a query
function make_query(resultAsked,otherQuery,s,p,o,filter,limit,offset)
{
    return "select " + resultAsked + " where { " + otherQuery + s + " " + p + " " + o + " " + filter + " } limit " + limit + " offset " + offset;
}

// makes an url asking for the results of a query on a database i a specified format
function encode_query(dataBaseID,query,outputID)
{
    // URL of database where we can make SPARQL queries
    var a = dataBasesSparql[dataBaseID];

    // recurent string in query url
    var b = "?default-graph-uri=";

    // encoding the RDF database to put in URL
    var c = encodeURIComponent(dataBases[dataBaseID]);

    // encoding the query to put in URL
    var d = encodeURIComponent(query);

    // format chosen for the output file
    var e = outputFormats[outputID];

    var endString = "&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on";

    var str =  a + b + c + "&query=" + d + "&format=" + e + endString;

    // encodeURIComponent transforms space in %20 but we  need to transform space in + here
    return str.replace(/%20/gi,"+");
}

function setResult(category,countryName,filter,offset)
{
    if(offset == 0)
    {
        maxOffset = 0;
        nameAndURIArray = new Array();
        currentOffSet = 0;
		currenCountryName = "";
    }
	currenCountryName = countryName;
    currentFilter = filter;
    currentCategory = category;
    currentOffSet = offset;
    maxOffset++;
    var queryDatas = dbpediaQueries[labels[category]];
    var query = make_query(queryDatas[0],"",queryDatas[1],queryDatas[2],queryDatas[3],filter,queryDatas[4],offset);
	//alert("cN=" + countryName);
	if(countryName.localeCompare("") != 0)
		query = make_sub_queries_country(query,countryName);
	
	//alert(query);
    var encodedQuery = encode_query(1,query,"json");
    make_name_and_URI_array(encodedQuery,"json");
}

function make_sub_queries_country(query,countryName)
{
	var filter1 = "filter (?loc = dbo:location || ?loc = dbo:country)";
	var subquery1 = make_query("distinct ?s ?o"," { " + query + " } ","?s","?loc","?o",filter1,limit,0);
	var filter2 = "filter (?country = dbr:" + countryName + ")";
	return make_query("distinct ?s"," { " + subquery1 + " } ","?o","dbo:country","?country",filter2,limit,0);
}

function display_array(arrayToDisplay)
{
    var table = document.getElementById("tableContainer");
    table.innerHTML = "";
    var nbTr = arrayToDisplay.length;
    for(var i=0;i<nbTr;i++)
    {
        var newTr = document.createElement('tr');

        var newTd0 = document.createElement('td');
        var newTd1 = document.createElement('td');
        var newTd2 = document.createElement('td');

        var newTextNode0 = document.createTextNode(i);
        var newTextNode1 = document.createTextNode(arrayToDisplay[i][1]);
        var newTextNode2 = document.createTextNode(arrayToDisplay[i][0]);

        newTd0.appendChild(newTextNode0);
        newTd1.appendChild(newTextNode1);
        newTd2.appendChild(newTextNode2);

        newTr.appendChild(newTd0);
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);

        table.appendChild(newTr);
    }
}

function get_resource_name(resourceURI)
{
    var name = "";
    var len = resourceURI.length - 1;
    while(resourceURI[len].localeCompare("/") != 0)
    {
        name = resourceURI[len].concat(name);
        len--;
    }

    return name;
}

function json_to_array(jsonString)
{
    var parsed = JSON.parse(jsonString);
    var resultsCard = parsed.results.bindings.length;
    var resultsArray = parsed.results.bindings;

    for(var i=0;i<resultsCard;i++)
    {
        nameAndURIArray.push(new Array(resultsArray[i].s.value,get_resource_name(resultsArray[i].s.value)));
    }
}

function make_name_and_URI_array(queryURI,format)
{
    // getting content of queryURI if it's json

    if(format.localeCompare("json") == 0)
    {
        var jsonResult = null;
        var request = new XMLHttpRequest();
        request.open('GET', queryURI, true);

        request.onload = function(error) {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                //document.getElementById('containerMain').innerHTML = request.responseText;
                jsonResult = request.responseText;
                json_to_array(jsonResult);

                if(nameAndURIArray.length % limit == 0 && maxOffset < 2)
                    setResult(currentCategory,currenCountryName,currentFilter,currentOffSet + limit);
                else
				{
                    display_final(nameAndURIArray);
					launchQuery = true;
				}

            } else {
                console.error('Could not load page.');
            }
        };

        request.onerror = function(error) {
            console.error('Could not load page.');
        };

        request.send();
    }
}

function make_country_array()
{
	var query = make_query("distinct ?o"," {select distinct ?o where {?s dbo:country ?o} LIMIT 10000} ","?o","dbo:flag","?p","",1000,0);
    var encodedQuery = encode_query(1,query,"json");
    var jsonResult = null;
	var request2 = new XMLHttpRequest();
	request2.open('GET', encodedQuery, true);

	request2.onload = function(error) {
		if (request2.status >= 200 && request2.status < 400) {
			// Success!
			//document.getElementById('containerMain').innerHTML = request.responseText;
			jsonResult = request2.responseText;
			var parsed = JSON.parse(jsonResult);
			var resultsArray = parsed.results.bindings;
			var resultsCard = resultsArray.length;
			
			countryArray = new Array();
			
			for(var i=0;i<resultsCard;i++)
			{
				countryArray.push(new Array(resultsArray[i].o.value,get_resource_name(resultsArray[i].o.value)));
			}
            var list=document.getElementById('country');
            list.innerHTML = "";
            var nbCtry = countryArray.length;
            var opt=document.createElement('option');
            opt.value="";
            opt.innerHTML="Tous";
            list.appendChild(opt);
            for(var i=0;i<nbCtry;i++)
            {
                var optt=document.createElement('option');
                optt.value=countryArray[i][1];
                optt.innerHTML=countryArray[i][1].replace(/_/gi," ");
                list.appendChild(optt);
            }

		} else {
			console.error('Could not load page.');
		}
	};

	request2.onerror = function(error) {
		console.error('Could not load page.');
	};

	request2.send();
}

function display_final(arrayToDisplay){
    var ul = document.getElementById("inputList");
    ul.innerHTML = "";
    var nbTr = arrayToDisplay.length;
    for(var i=0;i<nbTr;i++)
    {
        var a=document.createElement('a');
        var li= document.createElement('li');
        a.textContent=arrayToDisplay[i][1].replace(/_/gi, " ");
        a.setAttribute('href','#');
        li.appendChild(a);

        ul.appendChild(li);
    }
}
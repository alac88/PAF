/* https://stackoverflow.com/questions/17742950/how-can-i-reuse-the-result-of-a-sparql-query-to-another-query */

/*select distinct ?s ?o ?c where {{select distinct ?s ?o where { {select distinct ?s where { ?s <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://dbpedia.org/ontology/Monument>  } limit 10 offset 0} ?s dbo:location ?o } limit 10000 offset 0} ?o dbo:country ?c} limit 10000 offset 0 */

// buttons

var buttons = new Array(document.getElementById("resourceMonuments"),
					    document.getElementById("resourceHistoricalPlaces"),
						document.getElementById("resourceWorldHeritageSites"),
						document.getElementById("resourceArchitecturalStructures"),
						document.getElementById("combinedQuery"),
						);
						
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
					 
$(document).ready(function()
{
	buttons[0].onclick = function(){setResult("resourceMonuments","",0);};
	buttons[1].onclick = function(){setResult("resourceHistoricalPlaces","",0);}
	buttons[2].onclick = function(){setResult("resourceWorldHeritageSites","",0);}
	buttons[3].onclick = function(){setResult("resourceArchitecturalStructures",make_regexp_filter(make_regexp("str(?s)","http://dbpedia.org/resource/.*sun.*","i")),0);}
	buttons[4].onclick = function(){setResult("combinedQuery",make_combined_filter("<http://dbpedia.org/ontology/HistoricPlace>","<http://dbpedia.org/ontology/WorldHeritageSite>",null,null,""),0);}
});

// return a query
function make_query(resultAsked,s,p,o,filter,limit,offset)
{
	return "select " + resultAsked + " where { " + s + " " + p + " " + o + " " + filter + " } limit " + limit + " offset " + offset;
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

function setResult(category,filter,offset)
{
	if(offset == 0)
	{
		maxOffset = 0;
		nameAndURIArray = new Array();
		currentOffSet = 0;
	}
	
	currentFilter = filter;
	currentCategory = category;
	currentOffSet = offset;
	maxOffset++;
	var queryDatas = dbpediaQueries[labels[category]];
	var query = make_query(queryDatas[0],queryDatas[1],queryDatas[2],queryDatas[3],filter,queryDatas[4],offset);
	alert(query);
	var encodedQuery = encode_query(1,query,"json");
	make_name_and_URI_array(encodedQuery,"json");
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
			
			if(nameAndURIArray.length % 10000 == 0 && maxOffset < 2)
				setResult(currentCategory,currentFilter,currentOffSet + 10000);
			else
				display_array(nameAndURIArray);		
			
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

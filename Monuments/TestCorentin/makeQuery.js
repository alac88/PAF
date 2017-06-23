var nameAndURIArray = new Array();

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

// return a query
function make_query(resultAsked,s,p,o,limit)
{
	return "select " + resultAsked + " where { " + s + " " + p + " " + o + " } limit " + limit;
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

function setResult()
{
	var div = document.getElementById("containerMain");
	var queryDatas = dbpediaQueries[labels["resourceWorldHeritageSites"]];
	var query = make_query(queryDatas[0],queryDatas[1],queryDatas[2],queryDatas[3],queryDatas[4]);
	//var query = 'PREFIX dc: <http://purl.org/dc/elements/1.1/> PREFIX edm: <http://www.europeana.eu/schemas/edm/> PREFIX ore: <http://www.openarchives.org/ore/terms/> SELECT distinct ?title ?creator ?mediaURL ?date WHERE {?CHO edm:type "IMAGE" ; ore:proxyIn ?proxy; dc:title ?title ; dc:creator ?creator ; dc:date ?date . ?proxy edm:isShownBy ?mediaURL . } LIMIT 100';
	var encodedQuery = encode_query(1,query,"json");
    //div.innerHTML='<a href="' + encodedQuery + '">' + encodeURIComponent(query) + '</a>';
	make_name_and_URI_array(encodedQuery,"json")
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

window.onload = function() {
  setResult();
};


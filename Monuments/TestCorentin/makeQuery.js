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
function make_query(s,p,o,limit)
{
	return "select * where { ?" + s + " ?" + p + " ?" + o + " } limit " + limit;
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
	
	return str.replace(/%20/gi,"+");
}

function setResult()
{
	var div = document.getElementById("containerMain");
	var query = make_query("s","p","o",100);
	//var query = 'PREFIX dc: <http://purl.org/dc/elements/1.1/> PREFIX edm: <http://www.europeana.eu/schemas/edm/> PREFIX ore: <http://www.openarchives.org/ore/terms/> SELECT distinct ?title ?creator ?mediaURL ?date WHERE {?CHO edm:type "IMAGE" ; ore:proxyIn ?proxy; dc:title ?title ; dc:creator ?creator ; dc:date ?date . ?proxy edm:isShownBy ?mediaURL . } LIMIT 100';
	var encodedQuery = encode_query(0,query,"html");
    div.innerHTML='<a href="' + encodedQuery + '">' + query + '</a>';
}

window.onload = function() {
  setResult();
};


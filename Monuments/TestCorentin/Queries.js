/******************** RDF DATABASE DBPEDIA ********************/

var labels = {places : 0,
			  resourceMonuments : 1,
			  resourceHistoricalPlaces : 2,
			  resourceWorldHeritageSites : 3,
			  resourceArchitecturalStructures : 4,
			  combinedQuery : 5};
			  
// interesting queries for RDF dbpedia
var dbpediaQueries = new Array(new Array("","?s","rdfs:subClassOf","<http://dbpedia.org/ontology/Place>",10000),
							   new Array("distinct ?s","?s","<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>","<http://dbpedia.org/ontology/Monument>",10000),
							   new Array("distinct ?s","?s","<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>","<http://dbpedia.org/ontology/HistoricPlace>",10000),
							   new Array("distinct ?s","?s","<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>","<http://dbpedia.org/ontology/WorldHeritageSite>",10000),
							   new Array("distinct ?s","?s","<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>","<http://dbpedia.org/ontology/ArchitecturalStructure>",10000),
							   new Array("?s","?s","<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>","?o.",10000)
					);			  

					
function make_combined_filter(URI1,URI2,URI3,URI4,regexp)
{
	var resultFilter = " filter ((?o = " + URI1;
	
	if(URI2 != null)
		resultFilter = resultFilter.concat(" || ?o = " + URI2);
	
	if(URI3 != null)
		resultFilter = resultFilter.concat(" || ?o = " + URI3);
	
	if(URI4 != null)
		resultFilter = resultFilter.concat(" || ?o = " + URI4);
	
	if(regexp.localeCompare("") != 0)
		resultFilter = resultFilter.concat(" ) && " + regexp + " )");
	else
		resultFilter = resultFilter.concat(" ))");
	
	return resultFilter;
}

function make_regexp_filter(regexp)
{
	return " filter ( " + regexp + " )";
}

function make_regexp(variable,regexp,option)
{
	return "regex(" + variable + ",\""+ regexp + "\",\"" + option + "\")";
}

/**************************************************************/			
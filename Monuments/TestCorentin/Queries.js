/******************** RDF DATABASE DBPEDIA ********************/

var labels = {places : 0,
			  resourceMonuments : 1,
			  resourceHistoricalPlaces : 2,
			  resourceWorldHeritageSites : 3,
			  resourceArchitecturalStructures : 4,
			  combinedMonumentsAndWorldHeritage : 5};
			  
// interesting queries for RDF dbpedia
var dbpediaQueries = new Array(new Array("","?s","rdfs:subClassOf","<http://dbpedia.org/ontology/Place>",10000),
							   new Array("distinct ?s","?s","<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>","<http://dbpedia.org/ontology/Monument>",10000),
							   new Array("distinct ?s","?s","<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>","<http://dbpedia.org/ontology/HistoricPlace>",10000),
							   new Array("distinct ?s","?s","<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>","<http://dbpedia.org/ontology/WorldHeritageSite>",10000),
							   new Array("distinct ?s","?s","<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>","<http://dbpedia.org/ontology/ArchitecturalStructure>",10000),
							   new Array("?s","?s","<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>","?o.",20000)
					);			  

function make_combined_filter(URI1,URI2,URI3,URI4)
{
	var resultFilter = " filter (?o = " + URI1;
	
	if(URI2 != null)
		resultFilter = resultFilter.concat(" || ?o = " + URI2);
	
	if(URI3 != null)
		resultFilter = resultFilter.concat(" || ?o = " + URI3);
	
	if(URI4 != null)
		resultFilter = resultFilter.concat(" || ?o = " + URI4);
	
	resultFilter = resultFilter.concat(" )");
	
	return resultFilter;
}				
/**************************************************************/			
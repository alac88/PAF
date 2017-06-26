/******************** RDF DATABASE DBPEDIA ********************/

var labels = {Places : 0,resourceMonuments : 1,resourceHistoricalPlaces : 2,resourceWorldHeritageSites : 3,resourceArchitecturalStructures : 4};
			  
// interesting queries for RDF dbpedia
var dbpediaQueries = new Array(new Array("","?s","rdfs:subClassOf","<http://dbpedia.org/ontology/Place>",100),
							   new Array("distinct ?s","?s","<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>","<http://dbpedia.org/ontology/Monument>",1000),
							   new Array("distinct ?s","?s","<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>","<http://dbpedia.org/ontology/HistoricPlace>",10000),
							   new Array("distinct ?s","?s","<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>","<http://dbpedia.org/ontology/WorldHeritageSite>",1000),
							   new Array("distinct ?s","?s","<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>","<http://dbpedia.org/ontology/ArchitecturalStructure>",10000)
					);			  
				
/**************************************************************/			
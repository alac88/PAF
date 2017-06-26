var predicateMatchers=[
    {matcherName: "rdfschema_label", predicate: "http://www.w3.org/2000/01/rdf-schema#label", templateVariable: "title", abstractTemplate: "title", order: 1100000 },
    {matcherName: "depiction", predicate: "http://xmlns.com/foaf/0.1/depiction", templateVariable: "img_url", abstractTemplate: "img", order: 1000000 },
    {matcherName: "abstract", predicate: "http://dbpedia.org/ontology/abstract", templateVariable: "abstract", abstractTemplate: "abstract", order: 900000 },


	{matcherName: "city", predicate: "http://www.w3.org/2000/10/swap/pim/contact#city", abstractTemplate: "text", order: 80000 },
    {matcherName: "country", predicate: "http://www.w3.org/2000/10/swap/pim/contact#country", abstractTemplate: "text", order: 80000 },
    {matcherName: "street", predicate: "http://www.w3.org/2000/10/swap/pim/contact#street", abstractTemplate: "text", order: 80000 },
    {matcherName: "street2", predicate: "http://www.w3.org/2000/10/swap/pim/contact#street2", abstractTemplate: "text", order: 80000 },
	{matcherName : "buildingEndDate", predicate : "http://dbpedia.org/ontology/buildingEndDate", abstractTemplate : "buildingEndDate", order : 70000},
    {matcherName : "buildingStartDate", predicate : "http://dbpedia.org/ontology/buildingStartDate", abstractTemplate : "buildingStartDate", order : 70000},


    {matcherName : "deathPlace", predicate : "http://dbpedia.org/ontology/deathPlace", abstractTemplate : "deathPlace", order : 40000},
    {matcherName : "architect", predicate : "http://dbpedia.org/ontology/architect", abstractTemplate : "architect", order : 40000},
    {matcherName : "birthPlace", predicate : "http://dbpedia.org/ontology/birthPlace", abstractTemplate : "birthPlace", order : 40000},


    ];
var combineMatchers = [
    {matcherName: "location", abstractTemplate: "location", combineIds: ['lat','long'], order: 890000 },

  ];


var predicateMatchers=[
    {matcherName: "rdfschema_label", predicate: "http://www.w3.org/2000/01/rdf-schema#label", templateVariable: "title", abstractTemplate: "title", order: 1100000 },
    {matcherName: "depiction", predicate: "http://xmlns.com/foaf/0.1/depiction", templateVariable: "img_url", abstractTemplate: "img", order: 1000000 },
    {matcherName: "abstract", predicate: "http://dbpedia.org/ontology/abstract", templateVariable: "abstract", abstractTemplate: "abstract", order: 900000 },


    {matcherName: "area", predicate: "http://dbpedia.org/property/area", abstractTemplate: "area", order: 79000 },
    {matcherName: "long", predicate: "http://www.w3.org/2003/01/geo/wgs84_pos#long", abstractTemplate: "long", order: 79000 },
    {matcherName: "lat", predicate: "http://www.w3.org/2003/01/geo/wgs84_pos#lat", abstractTemplate: "lat", order: 79000 },
    {matcherName: "city", predicate: "http://www.w3.org/2000/10/swap/pim/contact#city", abstractTemplate: "city", order: 80000 },
    {matcherName: "country", predicate: "http://www.w3.org/2000/10/swap/pim/contact#country", abstractTemplate: "country", order: 80000 },
    {matcherName: "street", predicate: "http://www.w3.org/2000/10/swap/pim/contact#street", abstractTemplate: "street", order: 80000 },
    {matcherName: "street2", predicate: "http://www.w3.org/2000/10/swap/pim/contact#street2", abstractTemplate: "street2", order: 80000 },
    {matcherName : "buildingEndDate", predicate : "http://dbpedia.org/ontology/buildingEndDate", abstractTemplate : "buildingEndDate", order : 70000},
    {matcherName : "buildingStartDate", predicate : "http://dbpedia.org/ontology/buildingStartDate", abstractTemplate : "buildingStartDate", order : 70000},
    {matcherName : "region", predicate : "http://dbpedia.org/property/region", abstractTemplate : "region", order : 79000},


    {matcherName: "website", predicate: "http://dbpedia.org/property/website", abstractTemplate: "website", order: 50000 },
    {matcherName: "wikiPageRevisionID", predicate: "http://dbpedia.org/ontology/wikiPageRevisionID", abstractTemplate: "wikiPageRevisionID", order: 50000 },
    {matcherName: "wikiPageID", predicate: "http://dbpedia.org/ontology/wikiPageID", abstractTemplate: "wikiPageID", order: 500000 },
    {matcherName : "seeAlso", predicate : "https://www.w3.org/2000/01/rdf-schema#seeAlso", abstractTemplate : "seeAlso", order : 40000},
    {matcherName : "sameAs", predicate : "https://www.w3.org/2002/07/owl#sameAs", abstractTemplate : "sameAs", order :40000},
    {matcherName : "visitors", predicate : "http://dbpedia.org/property/visitors", abstractTemplate : "visitors", order : 60000},
    {matcherName : "differentFrom", predicate : "https://www.w3.org/2002/07/owl#differentFrom", abstractTemplate : "differentFrom", order : 40000},
    {matcherName : "link", predicate : "http://dbpedia.org/property/link", abstractTemplate : "link", order : 40000},
    {matcherName : "style", predicate : "http://dbpedia.org/property/style", abstractTemplate : "style", order : 60000},



    ];


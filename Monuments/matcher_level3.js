/*var predicateMatchers=[
    {matcherName: "rdfschema_label", predicate: "http://www.w3.org/2000/01/rdf-schema#label", templateVariable: "title", abstractTemplate: "title", order: 1100000 },
    {matcherName: "depiction", predicate: "http://xmlns.com/foaf/0.1/depiction", templateVariable: "img_url", abstractTemplate: "img", order: 1000000 },
    {matcherName: "abstract", predicate: "http://dbpedia.org/ontology/abstract", templateVariable: "abstract", abstractTemplate: "abstract", order: 900000 },


	{matcherName: "city", predicate: "http://www.w3.org/2000/10/swap/pim/contact#city", abstractTemplate: "city", order: 80000 },
    {matcherName: "country", predicate: "http://www.w3.org/2000/10/swap/pim/contact#country", abstractTemplate: "country", order: 80000 },
    {matcherName: "street", predicate: "http://www.w3.org/2000/10/swap/pim/contact#street", abstractTemplate: "street", order: 80000 },
    {matcherName: "street2", predicate: "http://www.w3.org/2000/10/swap/pim/contact#street2", abstractTemplate: "street2", order: 80000 },
    {matcherName : "buildingEndDate", predicate : "http://dbpedia.org/ontology/buildingEndDate", abstractTemplate : "buildingEndDate", order : 70000},
    {matcherName : "buildingStartDate", predicate : "http://dbpedia.org/ontology/buildingStartDate", abstractTemplate : "buildingStartDate", order : 70000},


    {matcherName : "deathPlace", predicate : "http://dbpedia.org/ontology/deathPlace", abstractTemplate : "deathPlace", order : 40000},
    {matcherName : "architect", predicate : "http://dbpedia.org/ontology/architect", abstractTemplate : "architect", order : 40000},
    {matcherName : "birthPlace", predicate : "http://dbpedia.org/ontology/birthPlace", abstractTemplate : "birthPlace", order : 40000},


    ];*/

/*var combineMatchers = [
 {matcherName: "addressBlock", abstractTemplate: "address", combineIds: ['person_name','addressPart'], order: 10000000 },
 {matcherName: "wikiInfo", abstractTemplate: "wikiInfo", combineIds: ['wikiPageID','wikiPageRevisionID'], order: 20000 },
 {matcherName: "addressPartCombine", abstractTemplate: "address", combineIds: ['address_line2','address_line3'], order: 10000000 },
 {matcherName: "community", abstractTemplate: "community", combineIds: ['depiction','label_comment'], order: 10010000 },
 {matcherName: "community_stat", abstractTemplate: "community_stat", combineIds: ['area','elevation','website'], order: 10010000 },
 {matcherName: "label_comment", abstractTemplate: "label_comment", combineIds: ['rdfschema_label','comment'], order: 10100000 },
 {matcherName: "person_name", abstractTemplate: "person_name", combineIds: ['lastName','firstName'], order: 10000000 },
 {matcherName: "multiple_name_1", abstractTemplate: "title", combineIds: ['schema_name','rdfschema_label','skos_prefLabel'], order: 10000000 },
 {matcherName: "multiple_name_2", abstractTemplate: "title", combineIds: ['schema_name','rdfschema_label'], order: 10000000 },
 {matcherName: "multiple_name_3", abstractTemplate: "title", combineIds: ['rdfschema_label','skos_prefLabel'], order: 10000000 },
 {matcherName: "multiple_name_4", abstractTemplate: "title", combineIds: ['schema_name','skos_prefLabel'], order: 10000000 },
 {matcherName: "location", abstractTemplate: "location", combineIds: ['lat','long'], order: 9000000 },
 {matcherName: "createMeta", abstractTemplate: "createMeta", combineIds: ['created','creator'], order: 10000000 },
 {matcherName: "address_line2", abstractTemplate: "address_line2", combineIds: ['street','street2'], order: 10000000 },
 {matcherName: "address_line3", abstractTemplate: "address_line3", combineIds: ['city','country','postalCode'], order: 10000000 },
 {matcherName: "dates", abstractTemplate: "dates", combineIds: ['buildingStartDate','buildingEndDate'], order: 10000000 },
 ];

 var linkMatchers = [
 {matcherName: "neighboringMunicipality", predicate: "http://dbpedia.org/property/neighboringMunicipalities", abstractTemplate: "neighboringMunicipality", templateVariable: "neighboringMunicipality", order: 4000000, linkIds: ['rdfschema_label']},
 {matcherName: "addressPart", predicate: "http://www.w3.org/2000/10/swap/pim/contact#address", templateVariable: "addressLink", abstractTemplate: "address", order: 1000000, linkIds: ['addressPartCombine']},
 {matcherName: "creator", predicate: "http://purl.org/dc/terms/creator", templateVariable: "creator", abstractTemplate: "creator", order: 20000, linkIds: ['rdfschema_label'] },
 ];
 */
predicateMatchers = [
    {matcherName: "rdfschema_label", predicate: "http://www.w3.org/2000/01/rdf-schema#label", templateVariable: "title", abstractTemplate: "title", order: 1100000 },
    {matcherName: "quote", predicate: "http://dbpedia.org/property/quote", templateVariable: "quote", abstractTemplate: "quote", order: 50000 },
    {matcherName: "skos_prefLabel", predicate: "http://www.w3.org/2004/02/skos/core#prefLabel", templateVariable: "title", abstractTemplate: "title", order: 60000 },
    {matcherName: "skos_altLabel", predicate: "http://www.w3.org/2004/02/skos/core#altLabel", templateVariable: "text", abstractTemplate: "text", order: 60000 },
    {matcherName: "schema_name", predicate: "http://schema.org/name", templateVariable: "title", abstractTemplate: "title", order: 60000 },
    {matcherName: "schema_description", predicate: "http://schema.org/description", templateVariable: "text", abstractTemplate: "text", order: 90000 },
    {matcherName: "purl_description", predicate: "http://purl.org/dc/elements/1.1/description", templateVariable: "text", abstractTemplate: "text", order: 90000 },
    {matcherName: "purl_title", predicate: "http://purl.org/dc/terms/title", abstractTemplate: "title", order: 1000000 },
    {matcherName: "depiction", predicate: "http://xmlns.com/foaf/0.1/depiction", templateVariable: "img_url", abstractTemplate: "img", order: 1000000 },
    {matcherName: "pmid", predicate: "http://purl.org/ontology/bibo/pmid", abstractTemplate: "pmid", order: 80000 },
    {matcherName: "firstName", predicate: "http://xmlns.com/foaf/0.1/firstName", abstractTemplate: "person_name", order: 60000 },
    {matcherName: "lastName", predicate: "http://xmlns.com/foaf/0.1/lastName", abstractTemplate: "person_name", order: 60000 },
    {matcherName: "name", predicate: "http://xmlns.com/foaf/0.1/name", abstractTemplate: "name", order: 60000 },
    {matcherName: "license", predicate: "http://purl.org/dc/terms/license", abstractTemplate: "license", order: 20000 },
    {matcherName: "created", predicate: "http://purl.org/dc/terms/created", abstractTemplate: "created", order: 20000 },
    {matcherName: "comment", predicate: "http://www.w3.org/2000/01/rdf-schema#comment", templateVariable: "text", abstractTemplate: "text", order: 90000 },
    {matcherName: "abstract", predicate: "http://dbpedia.org/ontology/abstract", templateVariable: "abstract", abstractTemplate: "abstract", order: 90000 },
    {matcherName: "elevation", predicate: "http://dbpedia.org/ontology/elevation", abstractTemplate: "elevation", order: 16000 },
    {matcherName: "wikiPageRevisionID", predicate: "http://dbpedia.org/ontology/wikiPageRevisionID", abstractTemplate: "wikiPageRevisionID", order: 20000 },
    {matcherName: "wikiPageID", predicate: "http://dbpedia.org/ontology/wikiPageID", abstractTemplate: "wikiPageID", order: 20000 },
    {matcherName: "area", predicate: "http://dbpedia.org/property/area", abstractTemplate: "area", order: 75000 },
    {matcherName: "website", predicate: "http://dbpedia.org/property/website", abstractTemplate: "website", order: 36000 },
    {matcherName: "long", predicate: "http://www.w3.org/2003/01/geo/wgs84_pos#long", abstractTemplate: "long", order: 57000 },
    {matcherName: "lat", predicate: "http://www.w3.org/2003/01/geo/wgs84_pos#lat", abstractTemplate: "lat", order: 57000 },
    {matcherName: "city", predicate: "http://www.w3.org/2000/10/swap/pim/contact#city", abstractTemplate: "text", order: 90000 },
    {matcherName: "country", predicate: "http://www.w3.org/2000/10/swap/pim/contact#country", abstractTemplate: "text", order: 90000 },
    {matcherName: "street", predicate: "http://www.w3.org/2000/10/swap/pim/contact#street", abstractTemplate: "text", order: 90000 },
    {matcherName: "street2", predicate: "http://www.w3.org/2000/10/swap/pim/contact#street2", abstractTemplate: "text", order: 90000 },
    {matcherName: "postalCode", predicate: "http://www.w3.org/2000/10/swap/pim/contact#postalCode", abstractTemplate: "text", order: 90000 },


    //Nouveaux matchers = template et ordre a definir

    {matcherName : "floorArea", predicate : "http://dbpedia.org/ontology/floorArea", abstractTemplate : "floorArea", order : 15000},
    {matcherName : "wikiPageExternalLink", predicate : "http://dbpedia.org/ontology/wikiPageExternalLink", abstractTemplate : "wikiPageExternalLink", order : 10000},
    {matcherName : "nativeName", predicate : "http://dbpedia.org/property/nativeName", abstractTemplate : "nativeName", order : 120000},
    //{matcherName : "thumbnail", predicate : "http://dbpedia.org/ontology/thumbnail",templateVariable: "img_url", abstractTemplate: "img", order : 100000},
    {matcherName : "wordnet_type", predicate : "https://www.w3.org/2006/03/wn/wn20/instances/synset-monument-noun-2.rdf", abstractTemplate : "website", order : 95000},
    {matcherName : "subject", predicate : "http://purl.org/dc/terms/subject", abstractTemplate : "subject", order : 83000},
    {matcherName : "type", predicate : "https://www.w3.org/1999/02/22-rdf-syntax-ns#type", abstractTemplate : "type", order : 82000},
    {matcherName : "label", predicate : "https://www.w3.org/2000/01/rdf-schema#label", abstractTemplate : "label", order : 90000},
    {matcherName : "seeAlso", predicate : "https://www.w3.org/2000/01/rdf-schema#seeAlso", abstractTemplate : "seeAlso", order : 35000},
    {matcherName : "sameAs", predicate : "https://www.w3.org/2002/07/owl#sameAs", abstractTemplate : "sameAs", order :45000},
    {matcherName : "architecturalStyle", predicate : "http://dbpedia.org/ontology/architecturalStyle", abstractTemplate : "architecturalStyle", order : 80500},
    {matcherName : "birthPlace", predicate : "http://dbpedia.org/ontology/birthPlace", abstractTemplate : "birthPlace", order : 40000},
    {matcherName : "residence", predicate : "http://dbpedia.org/ontology/residence", abstractTemplate : "residence", order : 55000},
    {matcherName : "museum", predicate : "http://dbpedia.org/ontology/museum", abstractTemplate : "museum", order : 55000},
    {matcherName : "wikiPageRedirects", predicate : "http://dbpedia.org/ontology/wikiPageRedirects", abstractTemplate : "wikiPageRedirects", order : 1000},
    {matcherName : "deathPlace", predicate : "http://dbpedia.org/ontology/deathPlace", abstractTemplate : "deathPlace", order : 39000},
    {matcherName : "architect", predicate : "http://dbpedia.org/ontology/architect", abstractTemplate : "architect", order : 81000},
    {matcherName : "buildingEndDate", predicate : "http://dbpedia.org/ontology/buildingEndDate", abstractTemplate : "buildingEndDate", order : 80000},
    {matcherName : "buildingStartDate", predicate : "http://dbpedia.org/ontology/buildingStartDate", abstractTemplate : "buildingStartDate", order : 80000},
    {matcherName : "openingDate", predicate : "http://dbpedia.org/ontology/openingDate", abstractTemplate : "openingDate", order : 79000},
    {matcherName : "owner", predicate : "http://dbpedia.org/property/owner", abstractTemplate : "owner", order : 75000},
    {matcherName : "region", predicate : "http://dbpedia.org/property/region", abstractTemplate : "region", order : 76000},
    {matcherName : "visitors", predicate : "http://dbpedia.org/property/visitors", abstractTemplate : "visitors", order : 78000},
    {matcherName : "differentFrom", predicate : "https://www.w3.org/2002/07/owl#differentFrom", abstractTemplate : "differentFrom", order : 5000},
    {matcherName : "link", predicate : "http://dbpedia.org/property/link", abstractTemplate : "link", order : 60000},
    {matcherName : "style", predicate : "http://dbpedia.org/property/style", abstractTemplate : "style", order : 82500},


    /*
     {matcherName : "affiliation", predicate : "http://dbpedia.org/ontology/affiliation", abstractTemplate : "", order : },
     {matcherName : "heritageRegister", predicate : "http://dbpedia.org/ontology/heritageRegister", abstractTemplate : "", order : },
     {matcherName : "religiousOrder", predicate : "http://dbpedia.org/ontology/religiousOrder", abstractTemplate : "", order : },
     {matcherName : "classement", predicate : "http://fr.dbpedia.org/property/classement", abstractTemplate : "", order : },
     {matcherName : "currentlyUsedFor", predicate : "http://dbpedia.org/ontology/currentlyUsedFor", abstractTemplate : "", order : },
     {matcherName : "livingPlace", predicate : "http://dbpedia.org/ontology/livingPlace", abstractTemplate : "", order : },
     {matcherName : "siège", predicate : "http://fr.dbpedia.org/property/siège", abstractTemplate : "", order : },


     */

];

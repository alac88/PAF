function load_monument(name) {

		// emptying previous monument
		$("#main").empty();
		$("#templates").empty();
		
        // instantiate rdf-ext object
        var store = new rdf.LdpStore();
//        var source = 'http://dbpedia.org/resource/Fribourg';
		var adaptedName = adapt_name(name);
        var source = 'http://dbpedia.org/data/' + adaptedName + '.rdf';; // graph RDF source
        var resource = 'http://dbpedia.org/resource/' + adaptedName; // stating point (URI) in the graph

       // something about what is going on
        document.getElementById('main').innerHTML =  ''
        + '<div class="alert alert-info">'
        + '  <button type="button" class="close" data-dismiss="alert">&times;</button>'
        + '  <strong>Loading</strong> '+source+' is being loaded ...'
        + '</div>';

        // prepare visualizer templates (html) for uduvudu
        var request = new XMLHttpRequest();
        request.open('GET', 'templatesMonument.html', true);

        request.onload = function(error) {
          if (request.status >= 200 && request.status < 400) {
            // Success!
            document.getElementById('templates').innerHTML = request.responseText;
          } else {
              console.error('Could not load templates.');
          }
        };

        request.onerror = function(error) {
              console.error('Could not load templates.');
        };

        request.send(); 

        // load triples
        store.graph(source, function (error, graph) {
                if (error == null) {
                    console.debug("successfully loaded "+graph.toArray().length+" triples");
                    // resource (entry for template search) is same as source in this example
                    uduvudu.process(graph, {'resource': resource} , function (out) {
                        // where to add the processed html
                        var main = document.getElementById('main')
                        // write the result of the processing in the main div
                        main.innerHTML = out;
                        // run scripts which were added
                        var codes = main.getElementsByTagName("script");   
                        for(var i=0;i<codes.length;i++)  
                        {  
                          eval(codes[i].text);
                        }
                    });
                } else {
                    document.getElementById('main').innerHTML =  ''
                    + '<div class="alert alert-danger">'
                    + '  <button type="button" class="close" data-dismiss="alert">&times;</button>'
                    + '  <strong>Error:</strong> '+ error +'.'
                    + '</div>';
                };
            });
    }
    
function adapt_name(name)
{
	return name.replace(/ /gi, "_");
}



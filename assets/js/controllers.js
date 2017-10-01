var homepage = function () { 
	var html = '<p>I\'m <strong>VueStardust</strong>, a micro-framework based on Vue.js and Semantic UI.</p>';
    html += '<p>I\'m easy to use, open source and I can help you develop SPA (Single-Page Application) quickly.</p>';
    html += '<div class="ui container center aligned">';
        html += '<p><a href="https://github.com/emawebdesign/vuestardust" target="_blank" class="ui positive github button"><i class="github icon"></i>GET VUESTARDUST</a></p>';
    html += '</div>';
    
    html += '<div class="ui fluid vertical menu mt40">';
      html += '<a href="http://www.emawebdesign.com" target="_blank" class="item"><strong>Author:</strong> www.emawebdesign.com</a>';
      html += '<a href="https://opensource.org/licenses/MIT" target="_blank" class="item"><strong>License:</strong> MIT license</a>';
      html += '<a href="https://github.com/emawebdesign/vuestardust" target="_blank" class="item"><strong>Github URL:</strong> https://github.com/emawebdesign/vuestardust</a>';
    html += '</div>';
    app.title = "Welcome Human!";
	app.content = html; 
};

var credits = function () { 
	$.getJSON("data.json", function(json) {
		var html = '<p>' + stripHtml(json.text) + '</p>';
        html += '<div class="ui fluid vertical menu mt40">';
            html += '<a href="https://jquery.com" target="_blank" class="item">jQuery</a>';
            html += '<a href="https://vuejs.org" target="_blank" class="item">Vue.js</a>';
            html += '<a href="https://semantic-ui.com" target="_blank" class="item">Semantic UI</a>';
            html += '<a href="https://github.com/flatiron/director" target="_blank" class="item">Director</a>';
        html += '</div>';
        app.title = "Credits";
		app.content = html;
	}); 
};
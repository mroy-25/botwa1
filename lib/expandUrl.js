var request = require("request");
var http = require('http');

function expand(shortUrl, options, callback) {
    // options are optional, the function can still be used like this: expand(shortUrl, callback)
    if(typeof options == 'function') {
        callback = options;
        options = {};
    }

    var defaultOptions = { 
    	method: "HEAD"
      , url: shortUrl
      , followAllRedirects: true
      , timeout: 10000
      , pool: pool
	};

    // merge the user-supplied options with the default options
    for(var attribute in options) {
        defaultOptions[attribute] = options[attribute];
    }

	var pool = new http.Agent({'maxSockets': Infinity});
    request(defaultOptions, function (error, response) {
        if (error) {
            callback(error);
        } else {
            callback(undefined, response.request.href);
        }
    }).setMaxListeners(0);
}
function expandUrl(q) {
    return new Promise((resolve, reject) => {
//let q = "https://desudrive.com/link/?id=eVYzczJaUk9LU0lUMzFEWVk0am9XQkY1ajBwY25zVk9ZcWlIalJnZlk4aS9rU0x1SEpZUUtCd0k3OFZZdHNsWnpnPT0="
expand(q, function(err, longUrl){
   resolve({shortUrl: q, longUrl: longUrl})
})
})
}
module.exports = expandUrl
//expandUrl("https://desudrive.com/link/?id=eVYzczJaUk9LU0lUMzFEWVk0am9XQkY1ajBwY25zVk9ZcWlIalJnZlk4aS9rU0x1SEpZUUtCd0k3OFZZdHNsWnpnPT0=").then(console.log)
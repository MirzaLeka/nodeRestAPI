$(document).ready(() => {


    $.ajax({
    type: 'GET',
    url: '/all',
    success: function(data) {

        console.log(data);

        // define size variable
        Object.size = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };
        
        // Get the size of an object
        var size = Object.size(data);
        console.log("Size is " + size)

    // keys.length = size = num of objects

    // GET keys (properties) of all objects
        var keys = Object.keys(data);
        console.log("keys: " + keys);

    // GET values of all keys
        var values = Object.values(data);
        console.log("values: " + values);

var response = '';
for (var i = 0; i < keys.length; i++) {
response+= `<ul class="inner"> <li>${keys[i]}</li> <li>${values[i]}</li> </ul>`;
}

$(".outer").append(response);

    }
    
    });
    
    });
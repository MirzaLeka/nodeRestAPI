$(document).ready(() => {

    $.ajax({
    type: 'GET',
    url: '/all',
    success: function(data) {

        let keys = Object.keys(data);
        let values = Object.values(data);

    let response = '';
    for (let i = 0; i < keys.length; i++) {
    response+= `<ul class="inner"> <li>${keys[i]}</li> <li>${values[i]}</li> </ul>`;
        }

    $(".outer").append(response);

    },
    error: function() {
        console.log("Bad request!");
    }
    
    });
    
    });

    function submitWord() {

        
 var word = $("input[type='text']").val();
 var score = $("input[type='number']").val();

        window.open('/add/' + word + '/' + score);

    }


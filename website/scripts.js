$(document).ready(() => {

    $.ajax({
    type: 'GET',
    url: '/all',
    success: function(data) {

        console.log("DATA: " + JSON.stringify(data, undefined, 2));

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

 const data = {
     word,
     score
 };

 //window.open('/all');

    //    window.open('/add/' + word + '/' + score);

    $.ajax({
        type: "GET",
        url: `/add/${data.word}/${data.score}`,
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
            location.reload();
        }
    });

    }


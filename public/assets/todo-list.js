$(document).ready(function(){

  $('form').on('submit', function(){
    
    submitToDB();  
    return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});



$("input").keyup(function(event){
  if(event.keyCode == 13){
    submitToDB();
  }
});



function submitToDB() {

  var item = $('form input');
  var todo = {item: item.val()};

  $.ajax({
    type: 'POST',
    url: '/todo',
    data: todo,
    success: function(data){
      //do something with the data via front-end framework
      location.reload();
    }
  });

}

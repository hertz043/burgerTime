
$(document).ready(function(){

    $(".eatBurger").on("click", function(event) {
        var id = $(this).data("burgerid");
      
          // Send the PUT request.
          $.ajax("/api/burgers/"+id,{
            type: "PUT",
            data: id
        }).then(function(){
            location.reload();
        })
    });
  
    $("#burgerInput").on("click", function(event) {
        event.preventDefault()

        let newBurger = {
            burger_name: $("#burgerText").val().trim()
        }

        let url = window.location.origin;
        $.post(url + "/api/burgers", newBurger, (data) => {
            location.reload();
        })
    });


});
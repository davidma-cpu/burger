//Make sure we wait to attach our handler until the Dom is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id);
        var newDevouredState = {
            devoured: true
        };
        console.log(newDevouredState);
        
        $.ajax("/api/burgers/" + id,{
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to true");
                location.reload();
            }
        ); 
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            name: $("#bg").val().trim()
        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        )

    })
});
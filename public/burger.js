//make sure we wait to attach handlers until the DOM is loaded
$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#bu").val().trim()
        };
        
        $.ajax("/api", {
            type: "POST",
            data: newBurger
        }).then(function() {

            location.reload();
        });
    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/" + id, {
            type: "DELETE"
        }).then(function() {

            location.reload();
        });
    });

    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var devour = $(this).data("newdevour");
        if(devour) {
            devour = 0;
        }
        else {
            devour = 1;
        }
        var newDevour = {
            devoured: devour
        };

        $.ajax("/api/" + id, {
            type: "PUT",
            data: newDevour
        }).then(function() {
            if(devour) {
                console.log("Burger has been added to waiting list");
            }
            else {
                console.log("Burger has been devoured!");
            }
            location.reload();
        });
    });
});
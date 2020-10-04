$("#add_burger").on("click", function() {
    var newBurger = {
        burger_name: $("#burger").val().trim()
    }
    $.ajax({
        url: "/api/burgers",
        method: "POST",
        data: newBurger
    }).then(function() {
        location.reload();
    })
});

$(".devouredbtn").on("click", function() {
    var id = $(this).attr("data-id")
    $.ajax({
        url: "/api/burgers/" + id,
        method: "PUT"
    }).then(function() {
        location.reload();
    })
})
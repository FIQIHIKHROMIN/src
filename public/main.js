function deleteTodos(todoId) {
    return $.ajax({
        method: "DELETE",
        url: "/todos/" + todoId,
        contentType: "application/json",

        success: () => {
            location.reload()
        },
        
        error: (err) => {
            console.log(err);
        }
    })
}
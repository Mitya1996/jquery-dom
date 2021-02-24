// Build an application that uses jQuery to do the following:


// Contains a form with two inputs for a title and rating along with a button to submit the form.
// When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
$('form').on('submit', function(e) {
    e.preventDefault();

    let $title = $('#title').val();
    let $rating = $('#rating').val();

    $('#movies-list')
        .append($('<li>', {class: 'movie'})
            .append($('<div>', {text:`Title: ${$title} Rating: ${$rating}`}))
            .append($('<button>', {text: 'Remove', class: 'remove-btn'}))
        );

});

$('#movies-list').on('click', '.remove-btn', function(){
    console.log(this);
    $(this).parent().remove();
});


// When the button to remove is clicked, remove each title and rating from the DOM.

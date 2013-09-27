$(function(){
    var template = $('#book_item').text()
        , $body = $('.body')

    // console.log(book_data)
    
    $body.append(ejs.render(template, {books: book_data}))

})
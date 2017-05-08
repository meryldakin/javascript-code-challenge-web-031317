$(document).ready(function(){
  var commentList = new CommentList()
  $('form').on('submit', function(event) {
    event.preventDefault()
    $('#comment-list').empty()
    $(".badge").empty()
    var newComment = $('#comment-val').val()
    commentList.addComment(newComment)
    $(commentList.render()).hide().appendTo("#comment-list").fadeIn(1000)
    $(".badge").append(commentList.comment_array.length)
    this.reset()
  })
})

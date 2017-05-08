class CommentList {
  constructor() {
    this.comment_array = []
  }
  render(){
    var html = `<ul>`
    var comments = this.comment_array.map(function(comment){
      return comment.render()
    }).join("")
    return html + comments + '</ul>'
  }

  addComment(string){
    var comment = new Comment(string)
    this.comment_array.push(comment)
  }

}

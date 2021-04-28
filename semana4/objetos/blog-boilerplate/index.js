

function criaPostBlog() {
    let titulo = document.getElementById("titulo-post")
    let autor = document.getElementById("autor-post")
    let conteudo = document.getElementById("conteudo-post")

    const postBlog = {
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value
    }

   let containerDePosts = document.getElementById("container-de-posts")

    containerDePosts.innerHTML += `<h2>${postBlog.titulo} </h2> <h3> ${postBlog.autor} </h3> <p> ${postBlog.conteudo}</p>`

    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    
  }
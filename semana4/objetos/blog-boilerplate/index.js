

function criaPostBlog() {
    let titulo = document.getElementById("titulo-post")
    let autor = document.getElementById("autor-post")
    let conteudo = document.getElementById("conteudo-post")
    let imagem = document.getElementById("imagem-post")

    const postBlog = 
        {
            titulo: titulo.value,
            autor: autor.value,
            conteudo: conteudo.value
        }
    

    let arrayObjPost = []
    for (let objetos of Object.keys(postBlog)) {
        arrayObjPost.push(postBlog[objetos])
    }
    console.log(arrayObjPost)

    let containerDePosts = document.getElementById("container-de-posts")

    if (imagem.value !== "") {
        containerDePosts.innerHTML += `<h2>${arrayObjPost[0]} </h2> <h3> ${arrayObjPost[1]} </h3> <img src="${imagem.value}"> <p> ${arrayObjPost[2]}</p>`
    } else {
        containerDePosts.innerHTML += `<div> <h2>${arrayObjPost[0]} </h2> <h3> ${arrayObjPost[1]} </h3> <p> ${arrayObjPost[2]}</p> </div> `
    }


    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    imagem.value = ""

}



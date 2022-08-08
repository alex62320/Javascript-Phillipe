var createButton    = document.querySelector("#createButton");
var categoryName    = document.querySelector("#categoryName");

// function create categories
var createCategory = function(event) {
    var requestBody = {
        "name": categoryName.value
    };
    fetch("https://127.0.0.1:8000/api/categories", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(requestBody)
    }).then(function (response) {
        return response.json()
    })
    .then(function (responseJSON) {
        var resultDiv = document.createElement("div");
        if (responseJSON["@type"] == "hydra:Error") {
            console.log("Une erreur est survenue : " + responseJSON["hydra:description"])
            resultDiv.innerHTML = "Une erreur est survenue";
        }
        else {
            console.log(responseJSON)
            resultDiv.innerHTML = "Catégorie créée";
        }
        document.body.appendChild(resultDiv);
    })
}

createButton.addEventListener("click",createCategory);

var deleteButton = document.querySelector("#deleteCategory")

// function getCategory

fetch("https://127.0.0.1:8000/api/categories", {
    method: "GET"
})
    .then(response => response.json())
    .then(function (categories){
        var categoriesList = categories["hydra:member"];
        categoriesList.forEach(category => {
            var addCategory = document.createElement("option");
            addCategory.innerHTML += `${category.name}`;
            document.querySelector('#sortCategory').appendChild(addCategory);
        })
    });

// function get + delete articles
var deletebutton = document.querySelector("#deleteArticle");
var selectedArticle = document.querySelector("#deleteArticleId");

fetch("https://127.0.0.1:8000/api/articles", {
    method: "GET"
})
    .then(response => response.json())
    .then(function (articles){
        var articlesList = articles["hydra:member"];
        articlesList.forEach(article => {
            var addarticle = document.createElement("option");
            addarticle.value = `${article.id-1}`;
            addarticle.id = `${article.id}`
            addarticle.innerHTML = `${article.id}: ${article.title}`;
            document.querySelector('#deleteArticleId').appendChild(addarticle);
        })
        deletebutton.addEventListener("click", () => {
            var selectvalue = parseInt(selectedArticle.value);  
            fetch(`https://127.0.0.1:8000/api/articles/${selectvalue+1}`, {
                method: "DELETE"
            });
        });
    });
// selectedArticle.value
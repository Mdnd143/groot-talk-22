var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// this is my url, for groot

var serverURL = "https://api.funtranslations.com/translate/groot.json";

function getTranslationURL(text){
    return serverURL + "?text=" + text
}

function errorHandler(error){
    console.log("error occured", error)
}

function clickHandler(){
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(Response => Response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
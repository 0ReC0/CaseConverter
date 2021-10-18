textArea = document.querySelector("textarea");

upperCaseBtn = document.querySelector("#upper-case");
lowerCaseBtn = document.querySelector("#lower-case");
properCaseBtn = document.querySelector("#proper-case");
senstenceCaseBtn = document.querySelector("#sentence-case");
saveTextFileBtn = document.querySelector("#save-text-file");

upperCaseBtn.addEventListener("click", convertToUpperCase);
lowerCaseBtn.addEventListener("click", convertToLowerCase);
properCaseBtn.addEventListener("click", convertToProperCase);
senstenceCaseBtn.addEventListener("click", convertToSentenceCase);
saveTextFileBtn.addEventListener("click", saveTextFile);


function convertToUpperCase() {
    textArea.value = textArea.value.toUpperCase();
}

function convertToLowerCase() {
    textArea.value = textArea.value.toLowerCase();
}

function convertToProperCase() {
    const lowerCase = textArea.value.toLowerCase();
    let allWords = lowerCase.split(" ");
    if (!allWords.length) {
        return;
    }
    allWords = allWords.map((el) => {
       return el[0].toUpperCase().concat(el.slice(1));
    });
    textArea.value = allWords.join(" ");
}

function convertToSentenceCase() {
    const lowerCase = textArea.value.toLowerCase();
    let allSentences = lowerCase.split(". ");
    if (!allSentences.length) {
        return;
    }
    allSentences = allSentences.map((el) => {
        if (el)
            return el[0].toUpperCase().concat(el.slice(1));
    });
    textArea.value = allSentences.join(". ");
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function saveTextFile() {
    // Start file download.
    download("text.txt", textArea.value);
}

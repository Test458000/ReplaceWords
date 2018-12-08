chrome.storage.local.get(['dictionary'], function (res) {
    if (res.dictionary) {
        let node = document.body;
        let dict = res.dictionary;
        //delete dict.en.div;
        walkDom(node, dict, replaceWords);
    }
});

//Walk on each element into DOM
function walkDom(elem, dict, replaceWords) {
    for (let n = 0; n < elem.childNodes.length; n++) {
        let node = elem.childNodes[n];
        if (node.nodeType === 3) {
            replaceWords(node, dict);
        } else if (node.nodeType === 1 && node.nodeName !== "SCRIPT" && node.tagName !== "STYLE") {
            walkDom(node, dict, replaceWords);
        }
    }
}

function replaceWords(node, dict) {
    let titlePage = document.title;
    for (let lang in dict) {
        let dictForLang = dict[lang];
        // Loops for replace words for this language
        for (let word in dictForLang) {
            // Loops each text for replace words and replace text
            if (node.data.indexOf(word) !== -1) {
                let textInNode = node.data;
                node.data = textInNode.replace(new RegExp(word, "g"), dictForLang[word]);
                titlePage = titlePage.replace(new RegExp(word, "g"), dictForLang[word]);
            }
        }
    }
    document.title = titlePage;
}

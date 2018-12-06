chrome.storage.local.get (['dictionary'], function (res) {
    if (res.dictionary) {
        let node = document.body;
        let dict = res.dictionary;
        walkDom (node, dict);
    }
});

//Walk on each element into DOM
function walkDom (elem, dict) {
    this.elem = elem;
    this.dict = dict;
    for (let n = 0; n < elem.childNodes.length; n++) {
        let node = elem.childNodes[n];
        if (node.nodeType === 3) {
            replaceWords (node, dict);
        } else if (node.nodeType === 1 && node.nodeName !== "SCRIPT") {
            walkDom(node, replaceWords);
        }
    }
}

function replaceWords (node, dict) {
    this.node = node;
    let titlePage = document.title;
    for (let i in dict) {
        let dictI = dict[i];
        // Loops for replace words for this language
        for (let j in dictI) {
            // Loops each text for replace words and replace text
            let textInNode = node.data;
            node.data = textInNode.replace(new RegExp(j, "g"), dictI[j]);
            titlePage = titlePage.replace(new RegExp(j, "g"), dictI[j]);
        }
    }
    document.title = titlePage;
}
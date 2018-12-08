// Load a dictionary by url

const config = {
    dictUrl: "http://sbox.pp.ua/ext/dict.json",
};

// Load and write a dictionary
function setDict() {
    fetch(config.dictUrl)
        .then(response => {
            let dictRes = response.json();
            return dictRes;
        }).then(dictRes => {
        // Write a dictionary to chrome.storage
        let dict = dictRes;
        chrome.storage.local.set({dictionary: dict});
    });
}

function checkDict() {
    // Check is a dictionary exist
    chrome.storage.local.get(['dictionary'], function (res) {
        if (!res.dictionary) {
            setDict()
        }
    });
}

checkDict();

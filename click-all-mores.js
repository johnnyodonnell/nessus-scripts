
var xpath = "//span[text()='more...']";
var matches = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null)

for (var i = 0; i < matches.snapshotLength; i++) {
    match = matches.snapshotItem(i)
    match.click()
}


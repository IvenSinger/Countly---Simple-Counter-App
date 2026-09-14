const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Find all text nodes in HTML that are not empty and not inside scripts/styles
const { JSDOM } = require('jsdom');
const dom = new JSDOM(html);
const document = dom.window.document;

function getTextNodes(node, texts = []) {
  if (node.nodeType === 3) { // Text node
    const text = node.textContent.trim();
    if (text.length > 1 && !/^[0-9\W]+$/.test(text)) {
      if (!node.parentNode.hasAttribute('data-i18n') && !node.parentNode.hasAttribute('data-language')) {
        texts.push(text);
      }
    }
  } else if (node.nodeType === 1 && !['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG'].includes(node.tagName)) {
    for (let child of node.childNodes) {
      getTextNodes(child, texts);
    }
  }
  return texts;
}

const untranslated = getTextNodes(document.body);
console.log("Potentially untranslated text:", [...new Set(untranslated)]);

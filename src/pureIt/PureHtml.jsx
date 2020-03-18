const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);

export default function pureHtml(maliciousHtml){
    let pureHtml= DOMPurify.sanitize(maliciousHtml);
    return pureHtml
}


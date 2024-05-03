function formatHTML(element, depth) {
  let formattedHTML = '';

  console.log('Element:', element); // Tilføjet konsoludskrift

  function addIndentation(depth) {
    return ' '.repeat(depth * 2);
  }

  function handleElementWithStartTag(node, depth) {
    console.log('Element med start-tag:', node.tagName); // Tilføjet konsoludskrift

    const tagName = node.tagName.toLowerCase();
    const attributes = Array.from(node.attributes)
      .map(attr => `${attr.name}="${attr.value}"`)
      .join(' ');

    formattedHTML += `${addIndentation(depth)}<${tagName}${attributes ? ' ' + attributes : ''}>\n`;

    Array.from(node.childNodes).forEach(child => {
      formatHTML(child, depth + 1);
    });

    if (node.childNodes.length === 0) {
      formattedHTML += `${addIndentation(depth)}</${tagName}>\n`;
    }
  }

  // Håndterer tekst-noder
  function handleTextNode(node, depth) {
    console.log('Tekst-node:', node.textContent); 

    const text = node.textContent.trim();
    if (text) {
      formattedHTML += `${addIndentation(depth)}${text}\n`;
    }
  }

  // Start rekursivt gennemgang af DOM-træet
  switch (element.nodeType) {
    case Node.ELEMENT_NODE:
      handleElementWithStartTag(element, depth);
      break;
    case Node.TEXT_NODE:
      handleTextNode(element, depth);
      break;
  }

  return formattedHTML;
}

const formattedOutput = formatHTML(document.documentElement, 0);
console.log(formattedOutput);

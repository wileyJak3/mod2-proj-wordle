/**
 * Changes XML to JSON
 * Modified version from here: http://davidwalsh.name/convert-xml-json
 * @param {string} xml XML DOM tree
 */
export default function xmlToJson(xml) {
	// Create the return object
	console.log("hello")
	console.log(xml)
	var obj = {};
  
	if (xml.nodeType == 1) {
	  // element
	  // do attributes
	  if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
		for (var j = 0; j < xml.attributes.length; j++) {
		  var attribute = xml.attributes.item(j);
		  obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
		}
	  }
	} else if (xml.nodeType == 3) {
	  // text
	  obj = xml.nodeValue;
	}
  
	// do children
	// If all text nodes inside, get concatenated text from them.
	var textNodes = [].slice.call(xml.childNodes).filter(function(node) {
	  return node.nodeType === 3;
	});
	if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
	  obj = [].slice.call(xml.childNodes).reduce(function(text, node) {
		return text + node.nodeValue;
	  }, "");
	} else if (xml.hasChildNodes()) {
	  for (var i = 0; i < xml.childNodes.length; i++) {
		var item = xml.childNodes.item(i);
		var nodeName = item.nodeName;
		if (typeof obj[nodeName] == "undefined") {
		  obj[nodeName] = xmlToJson(item);
		} else {
		  if (typeof obj[nodeName].push == "undefined") {
			var old = obj[nodeName];
			obj[nodeName] = [];
			obj[nodeName].push(old);
		  }
		  obj[nodeName].push(xmlToJson(item));
		}
	  }
	}
	return obj;
  }

//~Copied This function (not used, couldn't get to work)
//~source: https://davidwalsh.name/convert-xml-json#:~:text=If%20you'd%20like%20the,XML%20and%20use%20JSON%20instead.

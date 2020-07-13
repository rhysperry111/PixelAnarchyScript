// ==UserScript==
// @name           Pixel Anarchy Co-ordinate linker
// @namespace      pixel_anarchy_coord_linker
// @description    Allow co-ordinates sent in chat to be clicked on
// @author         rhysperry111
// @include        http://*.pixelanarchy.online/*
// @include        https://pixelanarchy.online/*
// @match          http://pixelanarchy.online/*
// @match          https://pixelanarchy.online/*
// @version        1.1
// ==/UserScript==

// Basic test regex
var regex = RegExp('\[\d+ \d+\]');

// Ok, I'm gonna need a few funtions

// Firstly let's check if a given message contains coords
function testMessage() {
  var element = document.getElementById('messages').lastChild;
  if (element.nodeName == "P") {
    var message = element.innerText;
    if (!regex.test(message)) {
        modifyMessage(element);
    }
  }
};

// This function adds a link to the message
function modifyMessage(element) {
  var coords = parseCoords(element.innerText);
  element.innerHTML = element.innerHTML.replace(regex, '<a href="javascript:void(0)" onclick="goToCoords(' + coords[0] + ',' + coords[1] + ')">' + coords[0] + ' ' + coords[1] + '</a>');
};

// This function takes in a message and spits out pixel coordinates
function parseCoords(message) {
  var x = "testX";
  var y = "testY";
  return [x, y];
};

// This function will be called as part of the link. It should move the canvas
function goToCoords(x, y) {
  console.log(x);
  console.log(y);
}

document.getElementById('messages').addEventListener('DOMNodeInserted', testMessage());

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
regex = RegExp('\[\d+ \d+\]');

// Ok, I'm gonna need a few funtions

// Firstly let's check if a given message contains coords
function messageHasCoords(message) {
  if (regex.test(message)) {
    return true;
  } else {
    return false;
  }
};

// This function takes in a message and spits out pixel coordinates
function parseCoords(message) {
  TBD;
};
// This function adds a link to the message
function modifyMessage(message {
  TBD;
};

// This function will be called as part of the link. It should move the canvas
function goToCoords(coords[]) {

}

// ==UserScript==
// @name        Amazon Music Player
// @namespace   Violentmonkey Scripts
// @match                  *://www.amazon.com/*
// @match                  *://www.amazon.ae/*
// @match                  *://www.amazon.be/*
// @match                  *://www.amazon.ca/*
// @match                  *://www.amazon.cn/*
// @match                  *://www.amazon.co.jp/*
// @match                  *://www.amazon.co.uk/*
// @match                  *://www.amazon.co.za/*
// @match                  *://www.amazon.com.au/*
// @match                  *://www.amazon.com.br/*
// @match                  *://www.amazon.com.mx/*
// @match                  *://www.amazon.com.tr/*
// @match                  *://www.amazon.com/*
// @match                  *://www.amazon.de/*
// @match                  *://www.amazon.eg/*
// @match                  *://www.amazon.es/*
// @match                  *://www.amazon.fr/*
// @match                  *://www.amazon.in/*
// @match                  *://www.amazon.it/*
// @match                  *://www.amazon.nl/*
// @match                  *://www.amazon.pl/*
// @match                  *://www.amazon.sa/*
// @match                  *://www.amazon.se/*
// @match                  *://www.amazon.sg/*
// @exclude                *://*.amazon.*/ap/signin*
// @grant       none
// @version     1.0
// @description Jeffry Bezos
// ==/UserScript==

(function () {
    "use strict";

    // TODO: Store this in the userscript.
    const songUrl = "https://small.fileditchstuff.me/s14/hNZXpSWOxbFkDlTvyNlb.webm";
    const audioId = "JeffryBezos";
    const storageKey = "JeffryBezosTime";

    // Create or get the audio element
    let audio = document.getElementById(audioId);
    if (!audio) {
        audio = document.createElement("audio");
        audio.id = audioId;
        audio.src = songUrl;
        audio.loop = true;
        audio.autoplay = true;
        audio.style.display = "none";
        document.body.appendChild(audio);
    }

    // Load the saved current time
    const savedTime = localStorage.getItem(storageKey);
    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }

    // Save the current time before the page unloads
    window.addEventListener("beforeunload", () => {
        localStorage.setItem(storageKey, audio.currentTime);
    });

    // TODO: Make it so the user does not need to interact with the page to play the audio.
    // Play the audio
    audio.play();
})();


/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

function log(text) {
    const el = document.getElementById("output");
    el.innerHTML = el.innerHTML + "<br/>" + text;
}

log('init')

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

text1.addEventListener("focus", (ev) => log("focus text1"));
text2.addEventListener("focus", (ev) => log("focus text2"));

text1.addEventListener("blur", (ev) => log("blur text1"));
text2.addEventListener("blur", (ev) => log("blur text2"));

text1.addEventListener("focusin", (ev) => log("focusin text1"));
text2.addEventListener("focusin", (ev) => log("focusin text2"));

text1.addEventListener("focusout", (ev) => log("focusout text1"));
text2.addEventListener("focusout", (ev) => log("focusout text2"));

// Make sure this runs while window is in the background
setTimeout(() => {
    log("calling text1.focus()");
    text1.focus();
    log("text1 has focus: " + (document.activeElement === text1).toString())
    log("text2 has focus: " + (document.activeElement === text2).toString())

    log("calling text2.focus()");
    text2.focus();
    log("text1 has focus: " + (document.activeElement === text1).toString())
    log("text2 has focus: " + (document.activeElement === text2).toString())
}, 3000);

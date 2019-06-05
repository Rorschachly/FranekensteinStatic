
(function() {
    'use strict';
    function $(id) {
        return document.getElementById(id);
    }

    window.onload = function () {
        var i = 0;
        var txt = 'I am a creature made by Victor Frankenstein. My life is full of adventures.'; /* The text */
        var speed = 50; /* The speed/duration of the effect in milliseconds */

        function typeWriter() {
        if (i < txt.length) {
            document.getElementById("type").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        console.log("haha");
        }
    };
})();

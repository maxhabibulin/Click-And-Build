"use strict";

// Dynamic current year
const currentYear = new Date().getFullYear();
const footer = document.querySelector("footer");
footer.innerHTML = `Copyright © ${currentYear} by
        <a href="https://github.com/maxhabibulin" target="_blank"
          >maxhabibulin</a
        >. Used for learning purposes only.`;

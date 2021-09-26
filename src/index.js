import {onClick} from './client/app.js';

import './client/app.scss'

let button = document.querySelector("#btn");
console.log("button", button)

button.addEventListener("click", onClick)
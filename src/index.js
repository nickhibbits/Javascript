import {onClick} from './client/app.js';

import './client/app.scss'

import anklyosaurus from "../images/anklyosaurus.png"

let button = document.querySelector("#btn");

button.addEventListener("click", onClick)

export {
  onClick,
  anklyosaurus,
}
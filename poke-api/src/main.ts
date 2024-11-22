import "./style.css";
import { createInput } from "./input";
import { createPrompt } from "./prompt";
import { createType } from "./type";
import { createShape } from "./shape";
import { createNumber } from "./number";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>PokeAPI</h1>
    ${createInput()}
    ${createPrompt()}
    ${createType()}
    ${createShape()}
    ${createNumber()}
    <button class="generate">Generate</button>
  </div>
`;

document.querySelector<HTMLDivElement>("#output")!.innerHTML = `
  <div>
    <h1>PokeAPI</h1>
    ${createInput()}
    ${createPrompt()}
    ${createType()}
    ${createShape()}
    ${createNumber()}
    <button class="generate">Generate</button>
  </div>
`;

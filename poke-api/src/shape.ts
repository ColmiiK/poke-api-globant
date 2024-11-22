export function createShape(): string {
  return `

    <div class="shape-container">
      <div class="shape">Shape</div>
      <select for="type">
        <option value="square">Square</option>
        <option value="triangle">Triangle</option>
        <option value="circle">Circle</option>
        <option value="donut">Donut</option>
        <option value="heart">Heart</option>
        <option value="kite">Kite</option>
        <option value="crescent">Crescent</option>
      </select>
    </div>
`;
}

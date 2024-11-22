export function createType(): string {
  return `

    <div class="type-container">
      <div class="type">Type</div>
      <select for="type">
       <option value="normal">Normal</option>
       <option value="fire">Fire</option>
       <option value="fighting">Fighting</option>
       <option value="flying">Flying</option>
       <option value="grass">Grass</option>
       <option value="poison">Poison</option>
       <option value="electric">Electric</option>
       <option value="ground">Ground</option>
       <option value="psychic">Psychic</option>
       <option value="rock">Rock</option>
       <option value="ice">Ice</option>
       <option value="bug">Bug</option>
       <option value="dragon">Dragon</option>
       <option value="ghost">Ghost</option>
       <option value="dark">Dark</option>
       <option value="steel">Steel</option>
       <option value="fairy">Fairy</option>
      </select>
    </div>
`;
}

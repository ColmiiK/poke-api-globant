export function createPrompt(): string {
  return `
    <div class="prompt-container">
      <div class="prompt">Prompt</div>
      <form class="prompt-field">
      <input type="text" placeholder="Describe your Pokémon">
    </form>
    </div>
`;
}

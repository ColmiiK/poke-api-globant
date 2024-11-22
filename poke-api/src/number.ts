export function createNumber(): string {
  return `

    <div class="number-container">
      <div class="number">Number of images</div>
      <div class="number-current">Current: <span id="n">1</span></div>
        <input type="range" min="1" max="9" value="1" class="slider">
      <div class="number-info">Min of 1, max of 9. Default: 1</div>
    </div>
`;
}

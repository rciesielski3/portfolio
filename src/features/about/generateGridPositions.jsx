const generateGridPositions = (gridSize, numberOfTraits) => {
  const grid = Array(gridSize).fill(false);
  const positions = [];

  for (let i = 0; i < numberOfTraits; i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * gridSize);
    } while (grid[randomIndex]);

    grid[randomIndex] = true;

    const row = Math.floor(randomIndex / Math.sqrt(gridSize));
    const col = randomIndex % Math.sqrt(gridSize);

    positions.push({
      top: `${30 + row * 15}vh`,
      left: `${15 + col * 25}vw`,
    });
  }

  return positions;
};

export default generateGridPositions;

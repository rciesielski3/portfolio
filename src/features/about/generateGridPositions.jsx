const generateGridPositions = (gridSize, numberOfTraits) => {
  const gridRows = Math.ceil(Math.sqrt(gridSize));
  const gridCols = gridRows;
  const taken = new Set();
  const result = [];

  while (result.length < numberOfTraits) {
    const row = Math.floor(Math.random() * gridRows);
    const col = Math.floor(Math.random() * gridCols);
    const key = `${row}-${col}`;

    if (!taken.has(key)) {
      taken.add(key);

      result.push({
        row,
        col,
      });
    }
  }

  return result;
};

export default generateGridPositions;

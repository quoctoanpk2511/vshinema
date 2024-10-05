export const utils = {
  chunkData,
};

function chunkData(arr, max, size) {
  const chunkedArray = [];
  for (let i = 0; i < max; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }
  return chunkedArray;
}

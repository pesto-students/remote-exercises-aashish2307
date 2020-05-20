const cubeRootMemoizer = () => {
  const memo = {};
  return (value) => {
    if (memo[value]) {
      return memo[value];
    }
    const cubeRoot = Math.cbrt(value);
    memo[value] = cubeRoot;
    return cubeRoot;
  };
};
const getCubeRoot = cubeRootMemoizer();

getCubeRoot(2); // Calculated
getCubeRoot(2); // cached

getCubeRoot(5); // Calculated
getCubeRoot(5); // cached

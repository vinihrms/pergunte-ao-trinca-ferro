function rand(a, b) {
  const x = Math.random();

  if (x > 0.49) {
    return a;
  } else {
    return b;
  }
}

export default rand;

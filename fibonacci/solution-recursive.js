function fibs(n) {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }

  const seq = fibs(n - 1);
  // access and add the last two numbers
  const prev1 = seq[seq.length - 1];
  const prev2 = seq[seq.length - 2];
  const sum = prev1 + prev2;

  // extend the sequence by adding the sum of the two last numbers
  return [...seq, sum];
}

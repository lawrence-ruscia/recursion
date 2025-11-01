function fibs(n) {
  if (n === 0) return [0];

  // store first two numbers that don't need iteration
  const res = [0, 1];

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    res.push(next);

    // previous becomes current, current becomes next
    prev = curr;
    curr = next;
  }

  return res;
}

console.log(fibs(8)); // [0,1,1,2,3,5,8,13,21]

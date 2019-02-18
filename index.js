function pageArray(count, value, unit) {
  const unitIsOdd = unit % 2;
  const pages = new Array(count);
  for (let i = 0, l = pages.length; i < l; i++) {
    const page = i + 1;
    if (page === 1 || page === count) {
      pages[i] = page;
    } else {
      const l = (unit - 1) / 2;
      const showNumber = Math.abs(page - value) <= l;
      pages[i] = showNumber ? page : showNumber < value ? 'prev' : 'next';
    }
  }

  return pages.filter(
    (v, k) => typeof v === 'number' || typeof pages[k - 1] === 'number'
  );
}

console.log(pageArray(20, 15, 5));

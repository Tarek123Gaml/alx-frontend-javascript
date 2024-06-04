export default function(set, startString) {
  const strings = [];

  set.forEach((s) => {
    if (typeof(s) === 'string' && s.startswith(startString)) {
      strings.push(s.slice(startString.length));
    }
  });
  return strings.join('-');
}

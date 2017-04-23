function titleCase(str) {
 return str.toLowerCase().replace(/(^|\s)(.)/g, (m) => m.toUpperCase());
}

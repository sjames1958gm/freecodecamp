function translatePigLatin(str) {
  for (i = 0; i < str.length && ["a", "e", "i", "o", "u"].indexOf(str[i]) == -1; i++);
  return str.slice(i) + str.slice(0, i) + (i == 0 ? "way" : "ay");
}

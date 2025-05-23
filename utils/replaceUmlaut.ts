/*
 * Inpsired from: https://stackoverflow.com/a/54346022
 */

const umlautMap: any = {
  '\u00dc': 'UE',
  '\u00c4': 'AE',
  '\u00d6': 'OE',
  '\u00fc': 'ue',
  '\u00e4': 'ae',
  '\u00f6': 'oe',
  '\u00df': 'ss',
}

/**
 * Replace all Umlaute in a string to form URL safe versions.
 */
export const replaceUmlaut = (str: string) => {
  return str
    .replace(/[\u00dc|\u00c4|\u00d6][a-z]/g, (a) => {
      const big = umlautMap[a.slice(0, 1)]
      return big.charAt(0) + big.charAt(1).toLowerCase() + a.slice(1)
    })
    .replace(
      new RegExp('[' + Object.keys(umlautMap).join('|') + ']', 'g'),
      (a) => umlautMap[a]
    );
}

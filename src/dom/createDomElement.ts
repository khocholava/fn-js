export function createDomElement<K extends keyof HTMLElementTagNameMap, A>(
  name: K,
  attributes?: Array<string> | Record<string, string>
): HTMLElementTagNameMap[K] {
  const element = document.createElement(name);
  if ((attributes && Array.isArray(attributes)) || attributes) {
    for (const key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        element.setAttribute( key, attributes[key]);
      }
    }
  }
  
  return element;
}

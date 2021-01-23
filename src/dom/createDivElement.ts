import { createDomElement } from './createDomElement';

export function createDivElement(
  attributes: Record<string, string>,
): HTMLDivElement {
  return createDomElement('div',  attributes);
}
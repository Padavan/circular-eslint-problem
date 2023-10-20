import { first } from './first.js';

export function second(node, depth) {
  console.log(Array(depth).join("--") + node.text);

  if (node.children && node.children.length > 0) {
    node.children.forEach(n => first(n, depth + 1));
  }
} 

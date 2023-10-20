import { second } from './second.js';

export function first(node, depth) {
  if (node.type === 1) {
    console.log(Array(depth).join("--") + node.text);
  } 

  if (node.type === 2) {
    second(node, depth);
  }

  if (node.children && node.children.length > 0) {
    node.children.forEach(n => first(n, depth+1));
  }
} 

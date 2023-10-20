import { first } from './first.js';


const nodes = [
  { 
    type: 1,
    text: "1"
  },
  { 
    type: 2,
    text: "2"
  },
  { 
    type: 1,
    text: "3",
    children: [
      {
        type: 1,
        text: "child1"
      },
      {
        type: 2,
        text: "child2"
      }
    ],
  },
  { 
    type: 2,
    text: "4"
  },
  { 
    type: 1,
    text: "5"
  },
];

nodes.forEach((n) => first(n, 1));


#!/usr/bin/env node
/*
 * CLI entrypoint for the Node.js calculator
 * Supports the four basic operations shown in the provided image and the latest issue:
 *   addition (add or +)
 *   subtraction (sub or -)
 *   multiplication (mul or x or *)
 *   division (div or /)
 *
 * Usage examples:
 *   calc add 2 3    -> 5
 *   calc + 2 3      -> 5
 *   calc mul 4 5    -> 20
 *   node src/cli.js div 10 2 -> 5
 */

const { compute } = require('./calculator');

function printUsage() {
  console.log('Usage: calc <operation> <a> <b>');
  console.log('Operations: add | +, sub | -, mul | x | *, div | /');
}

function main(argv) {
  if (!argv || argv.length < 3) {
    printUsage();
    process.exit(1);
  }

  const [op, a, b] = argv;

  try {
    const result = compute(op, a, b);
    // Print as-is; if integer, shows integer; if float, shows decimal
    console.log(result);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(2);
  }
}

// If run directly, use process.argv
if (require.main === module) {
  // Accept either: calc add 2 3  OR calc + 2 3
  // process.argv[0]=node, [1]=script, so slice(2)
  main(process.argv.slice(2));
}

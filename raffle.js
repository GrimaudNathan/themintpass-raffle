const holders = require('./holders.json');

async function main() {
  console.log(holders[1])
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

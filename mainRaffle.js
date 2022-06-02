const holders = require('./holders.json');

async function main() {
  let winners = [];
  for (let i = 0; i < 182; i++) {
    while (true) {
      let random = Math.floor(Math.random() * holders.length);
      if (!winners.includes(holders[random])) {
        winners.push(holders[random]);
        console.log(holders[random])
        break;
      }
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

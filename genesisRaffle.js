const holders = require('./genesisRaffle.json');

async function main() {
  let winners = [];
  for (let i = 0; i < 25; i++) {
    while (true) {
      let random = Math.floor(Math.random() * holders.length);
      if (!winners.includes(holders[random])) {
        winners.push(holders[random]);
        break;
      }
    }
  }
  console.log(winners);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// settings
const api = "https://blocks.adon.network/explore";
const coinDifficultyTarget = 120;
const symbol = "ADON";
const coinUnits = 100000000;
const blockchainExplorer = "?hash={id}#block";
const transactionExplorer = "?hash={id}#transaction";

// poolList ["id","visible", "url", "api", "enabled"]
const poolList = [
    { "id": 1, "visible": true, "url": "https://pool.adon.network", "api": "https://pool.adon.network/api", "status": true, "flag": "US", "loc": "US" },
    { "id": 2, "visible": true, "url": "https://adon.cryptonote.club", "api": "https://adon.cryptonote.club:8199", "status": true, "flag": "DE", "loc": "DE" }
];
const seedsNodes = [
    { "id": "rbx", "url": "http://01.seed.adon.network:19901" },
    { "id": "mlt", "url": "http://01.seed.adon.network:19901" }
];
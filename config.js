// settings
const api = "http://127.0.0.1:19901";
const coinDifficultyTarget = 120;
const symbol = "ADON";
const coinUnits = 100000000;
const blockchainExplorer = "?hash={id}#block";
const transactionExplorer = "?hash={id}#transaction";

// poolList ["id","visible", "url", "api", "enabled"]
const poolList = [
    { "id": 1, "visible": true, "url": "https://pool.adon.network", "api": "https://pool.adon.network:8117", "status": true, "flag": "US", "loc": "US" }
];
const seedsNodes = [
    { "id": "rbx", "url": "http://01.seed.adon.network:19901" },
    { "id": "mlt", "url": "http://01.seed.adon.network:19901" },
    // {"id":"sdn","url":"https://ns543550.ip-139-99-131.net"},
];
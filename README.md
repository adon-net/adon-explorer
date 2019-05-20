# Adon Coin blockchain explorer (ADON)

This is the Adon Coin blockchain explorer, network status and pool lists.

The online version is available here : https://blocks.adon.network

Spawn a local webserver or use docker : 

```
docker run -p 8082:80 -v adon-explorer:/usr/share/nginx/html:ro --name adon-explorer nginx:latest
```

Then open http://localhost:8082

**To develop locally : You have to allow CORS (Cross origin ressource sharing) in your browser**
 * Safari : Show development menu in menubar and disable multi origin restrictions
 * Chrome : https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

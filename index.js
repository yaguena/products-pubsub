const redis = require('redis');
const client = redis.createClient({
  socket: {
      host: '127.0.0.1',
      port: '6379'
  }
});

client.on('error', err => {
  console.log('Error ' + err);
});
(async () => {

  const article = {
    id: '123456',
    name: 'Using Redis Pub/Sub with Node.js',
    blog: 'Logrocket Blog',
  };

  await client.connect();

  await client.publish("product-list", JSON.stringify(article));
})();
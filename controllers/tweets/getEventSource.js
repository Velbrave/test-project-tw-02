const { Content } = require('../../models/tweet');

const getAll = async (req, res, next) => {
  const result = await Content.find({});
  return result;
};

const eventsHandler = async (request, response, next) => {
  const headers = {
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
    'Cache-Control': 'no-cache',
  };
  response.writeHead(200, headers);

  const timer = setInterval(async () => {
    const result = await getAll();

    const data = `data: ${JSON.stringify(result)}\n\n`;

    response.write(data);
  }, 2000);

  request.on('close', () => {
    clearInterval(timer);
    response.end();
    console.log('Client closed the connection.');
  });
};

module.exports = eventsHandler;

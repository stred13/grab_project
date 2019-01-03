var eventEmitter = require('eventemitter3');

var emitter = new eventEmitter();

var subscribeEvent = (req, res, event) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
    });
    var heartBeat = setInterval(() => {
        res.write('\n');
    }, 15000);

    var handler = data => {
        console.log(data);
        var json = JSON.stringify(data);
        res.write(`retry: 500\n`);
        res.write(`event: ${event}\n`);
        res.write(`data: ${json}\n`);
        res.write(`\n`);
    }
    emitter.on(event, handler);

    req.on('close', () => {
        clearInterval(heartBeat);
        emitter.removeListener(event, handler);
    })
}

//
// pub-sub
var subscribeShortAdded = (req, res) => {
    subscribeEvent(req, res, 'SHORT_ADDED');
}

var publishShortAdded = categoryObj => {
    emitter.emit('SHORT_ADDED', categoryObj);
}

module.exports = {
    subscribeShortAdded,
    publishShortAdded
}
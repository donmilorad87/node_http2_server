import * as http2 from 'http2'
import * as fs from 'fs'

import { router } from './router.js'

const server = http2.createSecureServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}, (Http2ServerRequest, res) => {
  Http2ServerRequest.on('data', (data) => {
    console.log(data.toString());
  })
  console.log('server started', 'data');
  console.log(res);

})

/* server.setTimeout(100) */

server.on('error', (err) => console.error(err))

server.on('stream', router)
server.on('connection', (stream) => {
  console.log('someone connected!');


});
server.on('request', () => {
  console.log('someone requested!');

});
server.on('session', session => {
  console.log('session started')

  session.on('close', () => {
    console.log('session closed')
  })

  session.on('error', err => console.error('session error', err))
})

server.listen(8443, () => {
  console.log('server started 33');
})
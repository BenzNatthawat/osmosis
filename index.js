const express = require('express')
const osmosis = require('osmosis');

const app = express()
const PORT = process.env.PORT || 3000
const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  "Authorization": "Bearer <CHANNEL-ACCESS-TOKEN>"
};

let award = []
function readMessage() {
  return new Promise(function (resolve, reject) {
    osmosis
      .get('http://localhost:8080/loby/')
      // .get('www.lobbyhuay.com/user/login')
      .find('div#yeekee > div.tab-content > div#pills-long > div.row > div div.card > div.card-body > div')
      .set({
        award: ['div.card > div.card-body > p']
      })
      .data(function (data) {
        award.push(data)
      })
      .done(function (data) {
        resolve(data)
      })
      .error(function (data) {
        console.log(data)
        reject(data)
      })
  }).catch(error => console.log(error))
}

app.get('/', async (req, res) => {
  await readMessage()
  const lastAward = award.findIndex(aw => aw.award[0] === 'xxx')
  const theAward = award.filter((aw, key) => {
    if (key > (lastAward - 11) && key < lastAward)
      return aw
  })

  request({
    method: "POST",
    uri: `${LINE_MESSAGING_API}/push`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      to: "<USER-ID>",
      messages: [{
        type: "text",
        text: "LINE \uDBC0\uDC84 x \uDBC0\uDCA4 Firebase"
      }]
    })
  }).then(() => {
    return res.status(200).send("Done");
  }).catch(error => {
    return Promise.reject(error);
  });
  res.send(theAward)
})

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`)
})
module.exports = app
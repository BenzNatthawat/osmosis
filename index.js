const express = require('express')
const needle = require('needle');
const cheerio = require("cheerio");
const request = require("request-promise");

const app = express()
let award = [
  {
    "three": "561",
    "two": "68"
  },
  {
    "three": "006",
    "two": "00"
  },
  {
    "three": "161",
    "two": "18"
  },
  {
    "three": "778",
    "two": "75"
  },
  {
    "three": "623",
    "two": "61"
  },
  {
    "three": "129",
    "two": "76"
  },
  {
    "three": "133",
    "two": "53"
  },
  {
    "three": "545",
    "two": "20"
  },
  {
    "three": "016",
    "two": "86"
  },
  {
    "three": "007",
    "two": "16"
  },
  {
    "three": "813",
    "two": "36"
  },
  {
    "three": "652",
    "two": "17"
  },
  {
    "three": "026",
    "two": "04"
  },
  {
    "three": "017",
    "two": "68"
  },
  {
    "three": "862",
    "two": "30"
  },
  {
    "three": "971",
    "two": "05"
  },
  {
    "three": "443",
    "two": "39"
  },
  {
    "three": "241",
    "two": "25"
  },
  {
    "three": "485",
    "two": "17"
  },
  {
    "three": "072",
    "two": "52"
  },
  {
    "three": "523",
    "two": "74"
  },
  {
    "three": "208",
    "two": "81"
  },
  {
    "three": "106",
    "two": "92"
  },
  {
    "three": "321",
    "two": "09"
  },
  {
    "three": "607",
    "two": "37"
  },
  {
    "three": "485",
    "two": "93"
  },
  {
    "three": "044",
    "two": "63"
  },
  {
    "three": "706",
    "two": "45"
  },
  {
    "three": "961",
    "two": "03"
  },
  {
    "three": "148",
    "two": "35"
  },
  {
    "three": "584",
    "two": "12"
  },
  {
    "three": "390",
    "two": "88"
  },
  {
    "three": "066",
    "two": "85"
  },
  {
    "three": "022",
    "two": "54"
  },
  {
    "three": "960",
    "two": "19"
  },
  {
    "three": "204",
    "two": "78"
  },
  {
    "three": "717",
    "two": "16"
  },
  {
    "three": "437",
    "two": "19"
  },
  {
    "three": "872",
    "two": "66"
  },
  {
    "three": "436",
    "two": "68"
  },
  {
    "three": "333",
    "two": "89"
  },
  {
    "three": "773",
    "two": "67"
  },
  {
    "three": "465",
    "two": "15"
  },
  {
    "three": "561",
    "two": "68"
  },
  {
    "three": "006",
    "two": "00"
  },
  {
    "three": "161",
    "two": "18"
  },
  {
    "three": "778",
    "two": "75"
  },
  {
    "three": "623",
    "two": "61"
  },
  {
    "three": "129",
    "two": "76"
  },
  {
    "three": "133",
    "two": "53"
  },
  {
    "three": "545",
    "two": "20"
  },
  {
    "three": "016",
    "two": "86"
  },
  {
    "three": "007",
    "two": "16"
  },
  {
    "three": "813",
    "two": "36"
  },
  {
    "three": "652",
    "two": "17"
  },
  {
    "three": "026",
    "two": "04"
  },
  {
    "three": "017",
    "two": "68"
  },
  {
    "three": "862",
    "two": "30"
  },
  {
    "three": "971",
    "two": "05"
  },
  {
    "three": "443",
    "two": "39"
  },
  {
    "three": "241",
    "two": "25"
  },
  {
    "three": "485",
    "two": "17"
  },
  {
    "three": "072",
    "two": "52"
  },
  {
    "three": "523",
    "two": "74"
  },
  {
    "three": "208",
    "two": "81"
  },
  {
    "three": "106",
    "two": "92"
  },
  {
    "three": "321",
    "two": "09"
  },
  {
    "three": "607",
    "two": "37"
  },
  {
    "three": "485",
    "two": "93"
  },
  {
    "three": "044",
    "two": "63"
  },
  {
    "three": "706",
    "two": "45"
  },
  {
    "three": "961",
    "two": "03"
  },
  {
    "three": "148",
    "two": "35"
  },
  {
    "three": "584",
    "two": "12"
  },
  {
    "three": "390",
    "two": "88"
  },
  {
    "three": "066",
    "two": "85"
  },
  {
    "three": "022",
    "two": "54"
  },
  {
    "three": "960",
    "two": "19"
  },
  {
    "three": "204",
    "two": "78"
  },
  {
    "three": "717",
    "two": "16"
  },
  {
    "three": "437",
    "two": "19"
  },
  {
    "three": "872",
    "two": "66"
  },
  {
    "three": "436",
    "two": "68"
  },
  {
    "three": "333",
    "two": "89"
  },
  {
    "three": "773",
    "two": "67"
  },
  {
    "three": "465",
    "two": "15"
  },
  {
    "three": "561",
    "two": "68"
  },
  {
    "three": "006",
    "two": "00"
  },
  {
    "three": "161",
    "two": "18"
  },
  {
    "three": "778",
    "two": "75"
  },
  {
    "three": "623",
    "two": "61"
  },
  {
    "three": "129",
    "two": "76"
  },
  {
    "three": "133",
    "two": "53"
  },
  {
    "three": "545",
    "two": "20"
  },
  {
    "three": "016",
    "two": "86"
  },
  {
    "three": "007",
    "two": "16"
  },
  {
    "three": "813",
    "two": "36"
  },
  {
    "three": "652",
    "two": "17"
  },
  {
    "three": "026",
    "two": "04"
  },
  {
    "three": "017",
    "two": "68"
  },
  {
    "three": "862",
    "two": "30"
  },
  {
    "three": "971",
    "two": "05"
  },
  {
    "three": "443",
    "two": "39"
  },
  {
    "three": "241",
    "two": "25"
  },
  {
    "three": "485",
    "two": "17"
  },
  {
    "three": "072",
    "two": "52"
  },
  {
    "three": "523",
    "two": "74"
  },
  {
    "three": "208",
    "two": "81"
  },
  {
    "three": "106",
    "two": "92"
  },
  {
    "three": "321",
    "two": "09"
  },
  {
    "three": "607",
    "two": "37"
  },
  {
    "three": "485",
    "two": "93"
  },
  {
    "three": "044",
    "two": "63"
  },
  {
    "three": "706",
    "two": "45"
  },
  {
    "three": "961",
    "two": "03"
  },
  {
    "three": "148",
    "two": "35"
  },
  {
    "three": "584",
    "two": "12"
  },
  {
    "three": "390",
    "two": "88"
  },
  {
    "three": "066",
    "two": "85"
  },
  {
    "three": "022",
    "two": "54"
  },
  {
    "three": "960",
    "two": "19"
  },
  {
    "three": "204",
    "two": "78"
  },
  {
    "three": "717",
    "two": "16"
  },
  {
    "three": "437",
    "two": "19"
  },
  {
    "three": "872",
    "two": "66"
  },
  {
    "three": "436",
    "two": "68"
  },
  {
    "three": "333",
    "two": "89"
  },
  {
    "three": "773",
    "two": "67"
  },
  {
    "three": "465",
    "two": "15"
  }
]
const PORT = process.env.PORT || 3000
const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  "Authorization": "Bearer lzwm61+1Xl1DJC9NDXLUhIY2Oyv+/dCibt8mWTKbcBRnhSwDgjPlGH2e65Ne5dnNJGXLB5mRSteZgdEEwNEMBcUHIeMCFlFfHxOeNjlcogv4nli8U8NEcI6D4kN2A9HhhUnbHxU257TfjNd3CpGbmgdB04t89/1O/w1cDnyilFU="
};

function readMessage() {
  return new Promise(function (resolve, reject) {
    needle('get', 'https://www.lobbyhuay.com/user/login')
      .then(function (resp) {
        resolve(resp)
      })
      .catch(function (err) {
        console.log(err)
        reject(err)
      });
  })
}

app.get('/', async (req, res) => {
  // const body = await readMessage()
  // var $ = cheerio.load(body.body);

  // const data = $('div#yeekee > .tab-content div #myCarousel2 .card.border-light-2.text-center.shadow-sm > .card-body > div')

  // for (let i = 0; i < data.length; i++) {
  //   let three = data[i].children[1].children[3].children[1].children[0]?.data
  //   let two = data[i].children[3].children[3].children[1].children[0]?.data

  //   if (+three) {
  //     award.push({
  //       three: `${+three}`.padStart(3, "0"),
  //       two: `${+two}`.padStart(2, "0"),
  //     })
  //   } else {
  //     break
  //   }
  // }

  // console.log(award)

  request({
    method: "POST",
    uri: `${LINE_MESSAGING_API}/push`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      to: "U45539645fb1c71bc4b2a115f056f6f9e",
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

  res.send(award)
})

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`)
})
module.exports = app
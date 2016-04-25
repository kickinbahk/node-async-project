'use strict'

var request = require('request')

var url = 'http://localhost:8080'

request.get(`${url}getUserName?id=1234`, function (err, res, body) {
  console.log('Status:', JSON.parse(body).value)

  request.get(`${url}getUserStatus?id=1234`, function (err, res, body) {
    console.log('Status:', JSON.parse(body).value)

    request.get(`${url}getUserCountry?id=1234`, function (err, res, body) {
      console.log('Status:', JSON.parse(body).value)

      request.get(`${url}getUserAge?id=1234`, function (err, res, body) {
        console.log('Status:', JSON.parse(body).value)
      })
    })
  })
})

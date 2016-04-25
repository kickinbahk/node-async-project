'use strict'

var request = require('request')
var async = require('async')

var url = 'http://localhost:8080'

// ** Async Waterfall **

async.waterfall([
  function (callback) {
    request.get(`${url}getSessionId`, function (err, res, body) {
      callback(null, JSON.parse(body).value)
    })
  }, function (sId, callback) {
    request.get(`${url}getUserId?sessionId=${sId}`, function (err, res, body) {
      callback(null, JSON.parse(body).value)
    })
  }, function (sId, uId, callback) {
    request.get(`${url}getUserName?userId=${uId}`, function (err, res, body) {
      callback(null, JSON.parse(body).value, sId)
    })
  }, function (err, res, sId) {
    console.log('Name:', name)
    console.log('sessionID', sId)
  }
])

// ** Async Series **
// async.series([
//   function (callback) {
//     request.get(`${url}getUserName?id=1234`, function (err, res, body) {
//       console.log()
//       callback(null, 'Name:' + JSON.parse(body).value)
//     })
//   }, function (callback) {
//     request.get(`${url}getUserStatus?id=1234`, function (err, res, body) {
//       callback(null, 'Status:' + JSON.parse(body).value)
//     })
//   }, function (callback) {
//     request.get(`${url}getUserCountry?id=1234`, function (err, res, body) {
//       callback(null, 'Country:' + JSON.parse(body).value)
//     })
//   }, function (callback) {
//     request.get(`${url}getUserAge?id=1234`, function (err, res, body) {
//       callback(null, 'Age:' + JSON.parse(body).value)
//     })
//   }
// ])

// ** Callbacks **
// request.get(`${url}getUserName?id=1234`, function (err, res, body) {
//   console.log('Name:', JSON.parse(body).value)
//
//   request.get(`${url}getUserStatus?id=1234`, function (err, res, body) {
//     console.log('Status:', JSON.parse(body).value)
//
//     request.get(`${url}getUserCountry?id=1234`, function (err, res, body) {
//       console.log('Country:', JSON.parse(body).value)
//
//       request.get(`${url}getUserAge?id=1234`, function (err, res, body) {
//         console.log('Age:', JSON.parse(body).value)
//       })
//     })
//   })
// })

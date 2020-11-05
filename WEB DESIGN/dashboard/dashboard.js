/* globals Chart:false, feather:false */

(function () {
  'use strict'
  feather.replace()
})()

var mainChart = d3.select("#mainChart")
var mainLink= d3.select("#mainLink")


function updateMain(SRC, ALT) {
  mainLink.attr("href", SRC)
  mainChart.attr("src", SRC)
  mainChart.attr("alt", ALT)
}

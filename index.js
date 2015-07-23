'use strict';

var con = window.console || {};

function fillWith(members, filler) {
  members = members.split(',');
  while (members.length) {
    var member = members.pop();
    if (!con[member]) {
      con[member] = filler;
    }
  }
}

fillWith('memory', {});

var methods = 'assert,clear,count,debug,dir,dirxml,error,exception,group,' +
  'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
  'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn';
fillWith(methods, function() {});

module.exports = con;

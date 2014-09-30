#!/usr/bin/env node
var fs = require('fs');
var Handlebars = require('handlebars');
var args = process.argv.slice(2);

var options = {
  encoding: 'utf8'
};

if (args[0] && args[1]) {
  fs.readFile(args[0], options,function (err, source) {
    if (err) throw err;
    fs.readFile(args[1], options, function (err, data) {
      if (err) throw err;

      var template = Handlebars.compile(source);
      var result = template(JSON.parse(data));

      console.log(result);
    });
  });
} else {
  console.error('You must pass both a Markdown/Handlebars source file and a JSON data file as arguments');
}


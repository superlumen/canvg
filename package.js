// Package metadata for Meteor.js full stack web framework
// This file is defined in Meteor documentation at http://docs.meteor.com/#/full/packagejs
// and used by Meteor https://www.meteor.com/ and its package repository Atmosphere https://atmospherejs.com

Package.describe({
    name: 'superlumen:canvg',
    summary: 'Javascript SVG parser that renders into canvas',
    version: '1.0.0',
    git: 'https://github.com/superlumen/canvg.git'
});
Package.on_use(function (api) {
    api.versionsFrom("METEOR@1.0");
    api.add_files('rgbcolor.js', 'client');
    api.add_files('StackBlur.js', 'client');
    api.add_files('canvg.js', 'client');
});

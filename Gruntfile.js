module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', './g.*.js']
        },
        uglify: {
            options: {
              maxLineLen: 80,
              banner: '/*!'+
                      '\n * <%= pkg.name %> <%= pkg.version %> - Charting library, based on Raphaël'+
                      '\n *'+
                      '\n * Copyright (c) 2009-2012 Dmitry Baranovskiy (http://g.raphaeljs.com)'+
                      '\n * Copyright (c) 2014 Yves Martinet'+
                      '\n * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.'+
                      '\n */\n'
            },
            min: {
                files: {
                  'min/g.raphael-min.js': ['g.raphael.js'],
                  'min/g.bar-min.js': ['g.bar.js'],
                  'min/g.dot-min.js': ['g.dot.js'],
                  'min/g.line-min.js': ['g.line.js'],
                  'min/g.pie-min.js': ['g.pie.js']
                }
            }
        },
        copy: {
          main: {
            src: 'bower_components/raphael/raphael-min.js',
            dest: './raphael-min.js'
          }
        },
        pkg: grunt.file.readJSON('package.json')
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('check', [
        'jshint'
    ]);
    grunt.registerTask('prod', [
        'jshint',
        'copy',
        'uglify'
    ]);
};

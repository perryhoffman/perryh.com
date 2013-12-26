module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    settings: {
      distDirectory: 'dist',
      srcDirectory: 'src',
      tempDirectory: '.temp'
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['<%= settings.srcDirectory %>/js/jquery.js', '<%= settings.srcDirectory %>/js/**/*.js'],
        dest: '<%= settings.tempDirectory %>/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '<%= settings.distDirectory %>/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb',  // css_dir = 'dev/css'
          cssDir: '<%= settings.distDirectory %>/css'
        }
      }
    },
    copy: {
      prod: {
        files: [
          {
            cwd: '<%= settings.srcDirectory %>',
            src: ['**/*.{eot,svg,ttf,woff}',
              '**/*.{gif,jpeg,jpg,png,svg,wsebp}',
              'index.html',
              '**/*.min.css'],
            dest: '<%= settings.distDirectory %>',
            expand: true
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['concat', 'uglify', 'compass', 'copy']);
};
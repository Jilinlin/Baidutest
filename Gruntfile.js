module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        target: {
          files: {
            'dist/index.html': './index.html'
          }
        }
      },
      cssmin:{
        'dist/layout.css':'./layout.css'
      },
      uglify:{
        'dist/main.js':'./main.js'
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin'); 
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['cssmin','htmlmin','uglify']);
};
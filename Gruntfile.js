module.exports = function (grunt) {
  grunt.initConfig({
    csslint: {
      option: {
        csslintrc: './.csslintrc' 
      },
      src:['*.css']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('default', ['csslint']);
};

module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      option: {
        eslintrc: './.eslintrc.json' 
      },
      src:['*.js']
    }
  });

  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default', ['eslint']);
};

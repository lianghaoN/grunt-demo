module.exports = function (grunt) {
  grunt.initConfig({
    mocha: {
      test: {
        rec: ['test/index.html'] 
      },
      options:{
        run: true,
        reportor: 'Dot'
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('default', ['mocha']);
};

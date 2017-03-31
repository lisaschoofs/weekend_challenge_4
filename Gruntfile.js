module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      main: {
        src: ["client/scripts/client.js"],
        dest: "server/public/script/client.min.js"
      }
    },
    copy: {
      html: {
        expand: true,
        cwd: "client/views/",
        src: ["index.html"],
        dest: "server/public/views/"
      },
      css: {
      expand: true,
      cwd: "client/views/",
      src: ["style.css"],
      dest: "server/public/views/"
      }
    },
    watch: {
      files: ["client/scripts/*.js", "client/views/*.html", "client/views/*.css"],
      tasks: ['uglify', 'copy']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'copy', 'watch']);
};

module.exports = function(grunt) {

	grunt.initConfig({
	  	sass: {
    	    options: {
        		sourceMap: true
       		},
      		dist: {
       	 		files: {
          			'css/main.css': 'sass/main.sass'
        		}
      		}
  	  	},

	  	imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/build/'
				}]
			}
  		}, 

   		watch: {
			scripts: {
				files: ['sass/*.sass'],
				tasks: ['sass'],
				options: {
    				spawn: false,
					},
			} 	
		}
  	});

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

   // Default task(s).

  grunt.registerTask('default', ['watch','sass','imagemin']);
};


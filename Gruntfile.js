module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			foo: {
				options: {
					//banner: '/* it is css */\n'
				},
				files: {
					'css/release/base.min.css': 'css/base.css'
				}
			}
		},
		uglify: {
			foo: {
				options: {
					//banner: '/* it is js */\n'
				},
				files: {
					'build/jquery.min.js': 'js/jquery.js',
					'build/sea.min.js': 'js/sea.js',
					'build/util.min.js': 'js/util.js'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['cssmin', 'uglify']);
}
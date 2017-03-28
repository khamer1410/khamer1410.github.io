module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'style/style.css': 'style/main.scss'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['style/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },
        browserSync: {
            bsFiles: {
                src: ['style/*.css', 'index.html']
            },
            options: {
                server: {
                    baseDir: "./"
                }
            }
        }
        
    });
    // Load the plugins tasks 
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'imagemin', 'watch']);
    grunt.registerTask('sync', ['browserSync']);
};
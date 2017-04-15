module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    
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
        autoprefixer: {
            options: {
                // Task-specific options go here.
            },
            your_target: {
                files: {
                    'style/style.css': 'style/style.css'
                }
            },
        },
        'babel': {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "script/script.js": "scripts/app.js"
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
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'autoprefixer', 'imagemin', 'watch']);
    grunt.registerTask('sync', ['browserSync']);
    grunt.registerTask('babel', ['babel']);
};
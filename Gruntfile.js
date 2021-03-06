module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-grunticon');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        path: {
            tmp             : '.tmp',
            srcImages       : 'src/assets/images',
            distImages      : 'dist/assets/images',
            distCss         : 'dist/assets/stylesheets'
        },

        grunticon: {
            sprite: {
                files: [{
                    expand: true,
                    cwd: '<%= path.tmp %>/svg-icons',
                    src: ['*.svg', '*.png'],
                    dest: '<%= path.tmp %>'
                }],
                options: {
                    // cssprefix       : '.svg-',
                    customselectors : {
                        '*' : [
                            '.svgbefore-$1:before',
                            '.svgafter-$1:after',
                            '.svgcontain-$1 .svg-icon']
                    },
                    datasvgcss      : 'sprite-svg.css',
                    datapngcss      : 'sprite-png.css',
                    urlpngcss       : 'sprite-fallback.css',
                    pngfolder       : '<%= path.distCss %>/sprite-fallback',
                    pngpath         : '<%= path.distImages %>/sprite-fallback',
                    compressPNG     : true,
                    enhanceSVG      : true
                }
            }
        }
    });

    grunt.registerTask('default');
};

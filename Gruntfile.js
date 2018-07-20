module.exports = function(grunt) {

     
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            js: {
                src: [
                    'public/app/assets/js/jquery-3.3.1.min.js',
                    'public/app/assets/js/bootstrap.bundle.min.js ',
                    'public/app/assets/js/popper.min.js ',
                    'public/app/assets/js/bootstrap.min.js',
                    'public/app/assets/js/angular.min.js',
                    'public/app/assets/js/angular-route.min.js',
                    'public/app/assets/fonts/fontawesome.min.js',
                    

                ],
                dest: 'public/app/assets/build/vendorscript.js',
            },
            customjs: {
                src: [
                    'public/app/module.js',
                    'public/app/router.js',
                    'public/app/directive.js',
                    'public/app/MainController.js',
                    'public/app/app/MainService.js',
                    

                ],
                dest: 'public/app/customjavascript.js',
            },
            css:{
            	 src: [
                    'public/app/assets/css/*.css', // All JS in the libs folder
                ],
                dest: 'public/app/assets/build/vendorstyle.css',
            }
        },
        uglify: {
            build:{
                files:[{
                    src:'public/app/assets/build/vendorscript.js',
                    dest:'public/app/assets/build/vendorscript.min.js'

                }]
            },
            buildcustom:{
                files:[{
                    src:'public/app/customjavascript.js',
                    dest:'public/app/customjavascript.min.js'

                }]
            }

        },
        cssmin: {
            build:{
                files:[{
                    src:'public/app/assets/build/vendorstyle.css',
                    dest:'public/app/assets/build/vendorstyle.min.css'

                }]
            }

        }


    });

  
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


   
    grunt.registerTask('concat-vendorjs', ['concat:js']);
    grunt.registerTask('concat-customjs', ['concat:customjs']);
    grunt.registerTask('concat-vendorcss', ['concat:css']);
    grunt.registerTask('uglify-vendorminjs', ['uglify:build']);
    grunt.registerTask('uglify-customminjs', ['uglify:buildcustom']);
    grunt.registerTask('cssmin-vendormincss', ['cssmin:build']);




}
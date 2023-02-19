module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    })

    grunt.registerTask('olaGrunt', function() {
        const done = this.async();
        setTimeout(function() {
            console.log('olá grunt')
            done();
        }, 3000)
    })

    grunt.registerTask('default', ['olaGrunt'])
}
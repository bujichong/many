module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd') %> */\n"
            },
            allmin: {
                src: "src/js/**/*.js",
                dest: "dest/js/<%= pkg.name %>.min.js"
            },
            everymin: {
              files: [{
                  expand: true,
                  cwd: "src/js",
                  src: "**/*.js",
                  dest: "dest/js"
              }]
            }
        },
        cssmin: {
            loginCSS: {
                options: {
                    banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd') %> */\n/*<%= pkg.description %> */",
                    //banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd HH:mm:ss') %> */\n/*<%= pkg.description %> */",
                    keepSpecialcomments: 0, //删除注释 ："*"保留注释，1保留第一个，0删除所有的
                    report: 'gzip' //false，'min'，'gzip'  默认：false，在屏幕回显源文件大小，压缩文件大小等信息。
                },
                files: {
                    '../css/login-min.css': ['../css/login.css']
                }
            },
            baseCSS: {
                options: {
                    banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd') %> */\n/*<%= pkg.description %> */",
                    keepSpecialcomments: 0, //删除注释 ："*"保留注释，1保留第一个，0删除所有的
                    report: 'gzip' //false，'min'，'gzip'  默认：false，在屏幕回显源文件大小，压缩文件大小等信息。
                },
                files: {
                    '../css/base-min.css': ['../css/base.css']
                }
            },
            trackCSS: {
                options: {
                    banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd') %> */\n/*<%= pkg.description %> */",
                    keepSpecialcomments: 0, //删除注释 ："*"保留注释，1保留第一个，0删除所有的
                    report: 'gzip' //false，'min'，'gzip'  默认：false，在屏幕回显源文件大小，压缩文件大小等信息。
                },
                files: {
                    '../css/track-min.css': ['../css/base.css', '../css/track.css']
                }
            }
        },
        requirejs: {
            bmapMain: {
                options: {
                    baseUrl: "../js",
                    mainConfigFile: "../js/config.bmap.js",
                    name: "bmap/main",
                    out: "../js/out/bmap/main.js"
                }
            },
            bmapTack: {
                options: {
                    baseUrl: "../js",
                    mainConfigFile: "../js/config.bmap.js",
                    name: "bmap/track-main",
                    out: "../js/out/bmap/track-main.js"
                }
            },
            bmapOil: {
                options: {
                    baseUrl: "../js",
                    mainConfigFile: "../js/config.bmap.js",
                    name: "bmap/oil-main",
                    out: "../js/out/bmap/oil-main.js"
                }
            },
            mapabcMain: {
                options: {
                    baseUrl: "../js",
                    mainConfigFile: "../js/config.mapabc.js",
                    name: "mapabc/main",
                    out: "../js/out/mapabc/main.js"
                }
            },
            mapabcTack: {
                options: {
                    baseUrl: "../js",
                    mainConfigFile: "../js/config.mapabc.js",
                    name: "mapabc/track-main",
                    out: "../js/out/mapabc/track-main.js"
                }
            },
            mapabcOil: {
                options: {
                    baseUrl: "../js",
                    mainConfigFile: "../js/config.mapabc.js",
                    name: "mapabc/oil-main",
                    out: "../js/out/mapabc/oil-main.js"
                }
            },
        },
        watch: {
            minjsmain: {
                files: ["../js/bmap/*.js","../js/mapabc/*.js"],
                tasks : ['minmain']
            },
            mincssmain : {
                files : ["../css/base.css","../css/login.css","../css/track.css"],
                tasks : ['css']
            }
        }
    });


    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");


    grunt.registerTask("everymin", ["uglify:everymin"]);
    grunt.registerTask("default", ["cssmin", "requirejs"]);
    grunt.registerTask("css", ["cssmin"]);
    grunt.registerTask("js", ["requirejs"]);

    //grunt.registerTask("watch", ["watch"]);
    grunt.registerTask("watchjs", ["watch:minjsmain"]);
    grunt.registerTask("watchcss", ["watch:mincssmain"]);
}

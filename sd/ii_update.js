//-------------------------------------------------------------
//   file name: ii_update.js
//   Itaya Engineering ii/2014/05/11
//-------------------------------------------------------------
var fs = require('fs-extra');
var strftime = require('strftime');
var exec = require('child_process').exec;
var glob = require('glob').sync;

const DIR_CAMERA = 'C:/ii/__camera/';
const DIR_IMAGE  = 'C:/ii/__image/';
const DIR_IMAGE2 = 'C:/ii/__image2/!/';
const RESIZE     = '800x800';

//-------------------------------------------------------- globs
var globs = function(ptns){
    var ss = [];
    ptns.forEach(function(ptn){
        ss = ss.concat(glob(ptn));
        ss = ss.concat(glob(ptn.toUpperCase()));
    });
    return ss;
};
// console.log(globs(['*.jpg', '*.js']));

//-------------------------------------------------------- resize image
var resize_image = function(path_input, path_output) {
    var cmd = 'convert -resize ' + RESIZE + ' ' + path_input + ' ' + path_output;
    exec(cmd, function(err, stdout, stderr){});
};
// resize_image('vegi.jpg', 'v3.jpg');

//-------------------------------------------------------- make time strings
var make_time_strings = function(path){
    var stat = fs.statSync(path);
    var mtime = stat.mtime;
    var sd = strftime('%Y/%Y%m%d/', mtime);
    var sf = strftime('%Y%m%d_%H%M_', mtime) + path;
    return {dir: sd, file: sf};
};
// var as = make_time_strings('vegi.jpg'); console.log(as);

//-------------------------------------------------------- copy to camera
var copy_to_camera = function(path){
    var ss = make_time_strings(path);
    var path_camera_dir  = DIR_CAMERA + ss.dir;
    var path_camera_file = DIR_CAMERA + ss.dir + ss.file;
    console.log(path_camera_dir, path_camera_file);
//    if (! fs.existSync(path_camera_dir)){
//        fs.mkdirsSync(path_camera_dir);
//    }
//    if (! fs.existSync(path_camera_file)){
//        fs.copySync(path, path_camera_file);
//        console.log('copy to camera: ' + path_camera_file);
//    } else {
//        console.log('.');
//    }
};
// copy_to_camera('vegi.jpg');

//-------------------------------------------------------- resize to image
var resize_to_image = function(path){
    var ss = make_time_strings(path);
    var path_image_dir   = DIR_IMAGE  + ss.dir;
    var path_image_file  = DIR_IMAGE  + ss.dir + ss.file;
    var path_image2_file = DIR_IMAGE2 + ss.file;
//    if (! fs.existSync(path_image_dir)){
//        fs.mkdirsSync(path_image_dir);
//    }
//    if (! fs.existSync(path_image_file)){
//        resize_image(path, path_image_file);
//        console.log('resize to image: ' + path_image_file);
//        fs.copySync(path_image_file, path_image2_file);
//    } else {
//        console.log('.');
//    }
};

//-------------------------------------------------------- main
var jpegs = globs(['*.jpg','*.jpeg']);
var mpegs = globs(['*.mpg','*.mpeg', '*.mp4', '*.mov', '*.thm', '*.wmv']);

jpegs.concat(mpegs).forEach(function(file){
    // copy_to_camera(file);
    console.log('copy to: ' + file);
});
console.log();

jpegs.forEach(function(file){
    // resize_to_image(file);
    console.log('resize to: ' + file);
});
console.log();

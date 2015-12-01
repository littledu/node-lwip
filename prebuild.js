var exec = require('child_process').exec;

if(process.env.TMTBUILD === "true"){
    exec('node-gyp rebuild && node publish');
}else{
    exec('node publish');
}
var exec = require('child_process');

if(process.env.TMTBUILD === "true"){
    exec('node-gyp rebuild && node publish', function(err, stdout, stderr) {
      if (err) throw err;
      console.log(stdout);
    });
}else{
    exec.exec('node publish', function(err, stdout, stderr) {
      if (err) throw err;
      console.log(stdout);
    });
}
var process = require('child_process');

if(process.env.TMTBUILD === "true"){
    process.exec('node-gyp rebuild && node publish', function(err, stdout, stderr) {
      if (err) throw err;
      console.log(stdout);
    });
}else{
    process.exec('node publish', function(err, stdout, stderr) {
      if (err) throw err;
      console.log(stdout);
    });
}
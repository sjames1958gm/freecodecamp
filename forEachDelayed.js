function forEachDelayed(delay, cb, done) {
  let i = 0;
  t = 0;
  
  let fn = () => { 
    setTimeout(() => {
      cb(this[i], i, this);
      i++;
      if (i < this.length) {
        t = delay;
        fn();
      } else {
        if (done) done();
      }
    }, t); 
  };
  
  fn();
}

Array.prototype.forEachDelayed = forEachDelayed;

[1, 2, 3, 4].forEachDelayed(1000,
                            (e) => { console.log(e); },
                            () => (console.log("done")))

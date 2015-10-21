var fs = require("fs");
module.exports={
  seq:0,
  file:".seq",
  init:function(start){
     var that = this;
     var exists = fs.existsSync(this.file);
     if(exists){
        that.seq = fs.readFileSync(that.file, "utf8");
        that.seq = (that.seq.length<=0)?start:parseInt(that.seq,10);
      }
      else{
        that.seq=start;
        fs.writeFileSync(this.file,that.seq);
      }
  },
  getNext:function(){
     this.seq = parseInt(this.seq,10) + 1;
     fs.writeFileSync(this.file,this.seq);
     return this.seq;
  }
}

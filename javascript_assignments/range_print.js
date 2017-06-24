function MyFunction(start,end,skip) {
  for (var i = start; i < end; i=i+skip) {
    console.log(i);
  }
}
MyFunction(3,15,3);

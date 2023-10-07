const compareVersion = function(version1, version2) {
    const fa = version1.split(".");
    const sa = version2.split(".");
    const len = Math.max(fa.length, sa.length);
    if (fa.length < len) {
      while (fa.length < len) {
        fa.push("0");
      }
    }
    if (sa.length < len) {
      while (sa.length < len) {
        sa.push("0");
      }
    }
    while (sa.length > 0 && fa.length > 0) {
      let fe = +fa.shift();
      let se = +sa.shift();
      if (fe > se) {
        return 1;
      }
      if (fe < se) {
        return -1;
      }
    }
    return 0;
  };
  
  const version1 = "1.2.3";
  const version2 = "1.2.4";
  const result = compareVersion(version1, version2);
  console.log(result); 
  
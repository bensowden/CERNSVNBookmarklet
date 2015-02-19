javascript:{
  var oldurl = location.href;
  var newurl = "";
  if (oldurl.indexOf('svnweb.cern.ch/trac/') != -1) {
    var re1 = /(svnweb.cern.ch\/trac\/)([^\/]*)(\/browser\/)/g;
    var rep1 = 'svnweb.cern.ch/cern/wsvn/$2/';
    newurl = oldurl.replace(re1,rep1);
  } else if (oldurl.indexOf('svnweb.cern.ch/cern/wsvn/') != -1) {
    var re1 = /(svnweb.cern.ch\/cern\/wsvn\/)([^\/]*)(\/)/g;
    var rep1 = 'svnweb.cern.ch/trac/$2/browser/';
    newurl = oldurl.replace(re1,rep1);
  }
  location.href = newurl;
}

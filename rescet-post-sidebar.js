function showrecentposts(json) 
{
  for (var i = 0; i < numposts; i++) {
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href;
        break;
      }}
    posttitle = posttitle.link(posturl);
    if (standardstyling) document.write('http://2.bp.blogspot.com/-YE7a0V5zOAg/VebC3LSn9_I/AAAAAAAAAjc/mS7SS_2Rl4k/s1600/icon%2Bfooter.png';
    document.write(posttitle);}
    if (standardstyling) document.write('</li>');
}

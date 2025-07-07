var posts=["2025/07/08/index/","2025/07/08/index - 副本/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
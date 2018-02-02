import React, { Component } from "react";

let GoogleSearch = () => {
  (function() {
    var cx = "011098609879690392280:igcvgyix3-k";
    var gcse = document.createElement("script");
    gcse.type = "text/javascript";
    gcse.async = true;
    gcse.src = "https://cse.google.com/cse.js?cx=" + cx;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(gcse, s);
  })();

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: `<gcse:search></gcse:search>
    <gcse:searchresults-only></gcse:searchresults-only>`
        }}
      />
    </div>
  );
};

export default GoogleSearch;

var pageMod = require("sdk/page-mod");

var self = require("sdk/self");

pageMod.PageMod({
  include: "https://chara.cs.illinois.edu/lab_queue/*",
  contentScriptFile: [self.data.url("jquery-3.1.0.min.js"),
          self.data.url("bootstrap.modal.min.js"),
		      self.data.url("chara_notify.js")],
    contentScriptOptions: {
	catsEnabled: require('sdk/simple-prefs').prefs["catsEnabled"],
	soundEnabled: require('sdk/simple-prefs').prefs["soundEnabled"]
    },
    // onAttach: function (worker) {
    // 	function onPrefChange(prefName) {
    // 	    worker.port.emit("prefChange", prefName, require("sdk/simple-prefs").prefs[prefName]);
    // 	}
    // 	require("sdk/simple-prefs").on("", onPrefChange);
    // }
});

pageMod.PageMod({
  include: "https://chara.cs.illinois.edu/login*",
  contentScriptFile: [self.data.url("jquery-3.1.0.min.js"),
		      self.data.url("chara_login_fix.js")]
});

if (require('sdk/simple-prefs').prefs["faviconEnabled"]) {
    pageMod.PageMod({
	include: "https://chara.cs.illinois.edu/*",
	contentScriptFile: [self.data.url("insert_favicon.js")]
    });
}

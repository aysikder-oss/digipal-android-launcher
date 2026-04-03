window.wrappedJSObject.Android = cloneInto({
  scheduleRelaunch: function() {
    window.dispatchEvent(new CustomEvent("digipal-bridge", {
      detail: cloneInto({ action: "scheduleRelaunch" }, window)
    }));
  },
  setAutoRelaunch: function(enabled) {
    window.dispatchEvent(new CustomEvent("digipal-bridge", {
      detail: cloneInto({ action: "setAutoRelaunch", value: !!enabled }, window)
    }));
  }
}, window, { cloneFunctions: true });

window.addEventListener("digipal-bridge", function(e) {
  browser.runtime.sendNativeMessage("digipal-bridge", e.detail);
});

// public/quampi.js
(function () {
  "use strict";

  const COLLECT_URL = `https://quampi.vercel.app/api/event`;
  const domain = document.currentScript.getAttribute("data-domain");
  let queue = [];

  function sendEvent(name, data = {}) {
    if (isLocalhost() || isBot()) return;

    const payload = {
      n: name,
      u: location.href,
      d: domain,
      r: document.referrer || null,
      w: window.innerWidth,
      h: window.innerHeight,
      tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      ua: navigator.userAgent,
      lng: navigator.language,
      hc: navigator.hardwareConcurrency,
      dpr: window.devicePixelRatio,
      ...getBrowserInfo(),
      ...getDeviceInfo(),
      ...getNetworkInfo(),
      ...data,
    };

    const request = new XMLHttpRequest();
    request.open("POST", COLLECT_URL, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(payload));
  }

  function isLocalhost() {
    return /^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*:)*?:?0*1$/.test(
      location.hostname
    );
  }

  function isBot() {
    return (
      window._phantom ||
      window.__nightmare ||
      window.navigator.webdriver ||
      window.Cypress
    );
  }

  function getBrowserInfo() {
    return {
      dnt: navigator.doNotTrack,
      cb: navigator.cookieEnabled,
      ls: !!window.localStorage,
      ss: !!window.sessionStorage,
      idb: !!window.indexedDB,
    };
  }

  function getDeviceInfo() {
    return {
      os: getOS(),
      dt: getDeviceType(),
      sr: `${screen.width}x${screen.height}`,
      cd: screen.colorDepth,
      ram: navigator.deviceMemory,
    };
  }

  function getNetworkInfo() {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    return connection
      ? {
          ct: connection.effectiveType,
          rtt: connection.rtt,
          ds: connection.downlink,
        }
      : {};
  }

  function getOS() {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
    const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
    const iosPlatforms = ["iPhone", "iPad", "iPod"];

    if (macosPlatforms.indexOf(platform) !== -1) {
      return "Mac OS";
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      return "iOS";
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      return "Windows";
    } else if (/Android/.test(userAgent)) {
      return "Android";
    } else if (/Linux/.test(platform)) {
      return "Linux";
    }

    return "Unknown";
  }

  function getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  }

  function trackPageView() {
    sendEvent("pageview");
  }

  function trackClicks() {
    document.addEventListener("click", function (e) {
      const target = e.target;
      if (target.tagName === "A") {
        sendEvent("click", {
          url: target.href,
          text: target.textContent,
        });
      }
    });
  }

  function trackScroll() {
    let maxScroll = 0;
    window.addEventListener("scroll", function () {
      const percent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      if (percent > maxScroll) {
        maxScroll = percent;
        if (maxScroll % 25 === 0) {
          // Send event at 25%, 50%, 75%, 100%
          sendEvent("scroll_depth", { depth: maxScroll });
        }
      }
    });
  }

  // Initialize tracking
  trackPageView();
  trackClicks();
  trackScroll();

  // Public API
  window.quampi = function (event, props) {
    if (typeof event === "string") {
      sendEvent(event, props);
    }
  };

  // Process any queued events
  for (let i = 0; i < queue.length; i++) {
    window.quampi.apply(this, queue[i]);
  }
})();

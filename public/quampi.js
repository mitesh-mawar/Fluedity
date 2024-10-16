(function () {
  "use strict";

  const COLLECT_URL = `https://quampi.vercel.app/api/event`;
  const domain = document.currentScript.getAttribute("data-domain");
  const scriptElement = document.currentScript;
  let queuedEvents = [];

  function sendEvent(eventName, eventData = {}) {
    if (isExcludedEnvironment() || isBot()) return;

    const payload = {
      name: eventName,
      url: location.href,
      domain: domain,
      referrer: document.referrer || null,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      userAgent: navigator.userAgent,
      language: navigator.language,
      cpuCores: navigator.hardwareConcurrency,
      devicePixelRatio: window.devicePixelRatio,
      ...getBrowserInfo(),
      ...getDeviceInfo(),
      ...getNetworkInfo(),
      ...eventData,
    };

    if (eventData.revenue) {
      payload.revenue = eventData.revenue;
    }

    const request = new XMLHttpRequest();
    request.open("POST", COLLECT_URL, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(payload));

    if (eventData.callback) {
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          eventData.callback({ status: request.status });
        }
      };
    }
  }

  function isExcludedEnvironment() {
    const isLocalhost =
      /^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*:)*?:?0*1$/.test(
        location.hostname
      );
    const isFileProtocol = location.protocol === "file:";
    return isLocalhost || isFileProtocol;
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
      doNotTrack: navigator.doNotTrack,
      cookiesEnabled: navigator.cookieEnabled,
      localStorageAvailable: !!window.localStorage,
      sessionStorageAvailable: !!window.sessionStorage,
      indexedDBAvailable: !!window.indexedDB,
    };
  }

  function getDeviceInfo() {
    return {
      operatingSystem: getOS(),
      deviceType: getDeviceType(),
      screenResolution: `${screen.width}x${screen.height}`,
      colorDepth: screen.colorDepth,
      deviceMemory: navigator.deviceMemory,
    };
  }

  function getNetworkInfo() {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    return connection
      ? {
          connectionType: connection.effectiveType,
          roundTripTime: connection.rtt,
          downloadSpeed: connection.downlink,
        }
      : {};
  }

  function getOS() {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
    const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
    const iosPlatforms = ["iPhone", "iPad", "iPod"];

    if (macosPlatforms.indexOf(platform) !== -1) return "Mac OS";
    if (iosPlatforms.indexOf(platform) !== -1) return "iOS";
    if (windowsPlatforms.indexOf(platform) !== -1) return "Windows";
    if (/Android/.test(userAgent)) return "Android";
    if (/Linux/.test(platform)) return "Linux";

    return "Unknown";
  }

  function getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua))
      return "tablet";
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    )
      return "mobile";
    return "desktop";
  }

  function trackPageView() {
    sendEvent("pageview");
  }

  function trackClicks() {
    document.addEventListener("click", function (e) {
      const target = e.target.closest("a");
      if (target) {
        const outboundLink = isOutboundLink(target);
        const fileDownload = isFileDownload(target);

        if (outboundLink) {
          sendEvent("Outbound Link: Click", { props: { url: target.href } });
        } else if (fileDownload) {
          sendEvent("File Download", { props: { url: target.href } });
        }

        if ((outboundLink || fileDownload) && isPlainClick(e)) {
          e.preventDefault();
          setTimeout(() => {
            window.location.href = target.href;
          }, 150);
        }
      }
    });
  }

  function isOutboundLink(link) {
    return link.hostname && link.hostname !== location.hostname;
  }

  function isFileDownload(link) {
    const fileExtensions = [
      "pdf",
      "xlsx",
      "docx",
      "txt",
      "rtf",
      "csv",
      "exe",
      "key",
      "pps",
      "ppt",
      "pptx",
      "7z",
      "pkg",
      "rar",
      "gz",
      "zip",
      "avi",
      "mov",
      "mp4",
      "mpeg",
      "wmv",
      "midi",
      "mp3",
      "wav",
      "wma",
    ];
    const pathname = link.pathname;
    const extension = pathname.split(".").pop().toLowerCase();
    return fileExtensions.indexOf(extension) !== -1;
  }

  function isPlainClick(e) {
    return !(e.ctrlKey || e.shiftKey || e.metaKey || e.button === 1);
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
          sendEvent("scroll_depth", { props: { depth: maxScroll } });
        }
      }
    });
  }

  function trackHashChange() {
    let lastPathname = location.pathname;
    window.addEventListener("hashchange", function () {
      if (lastPathname !== location.pathname) {
        lastPathname = location.pathname;
        trackPageView();
      }
    });
  }

  function initializeEventTracking() {
    const eventAttributes = scriptElement
      .getAttributeNames()
      .filter((attr) => attr.startsWith("event-"));
    const defaultProps = {};

    eventAttributes.forEach((attr) => {
      const propName = attr.replace("event-", "");
      const propValue = scriptElement.getAttribute(attr);
      defaultProps[propName] = propValue;
    });

    return defaultProps;
  }

  // Initialize tracking
  trackPageView();
  trackClicks();
  trackScroll();
  trackHashChange();

  const defaultEventProps = initializeEventTracking();

  // Public API
  window.quampi = function (eventName, eventData = {}) {
    if (typeof eventName === "string") {
      const combinedData = {
        ...defaultEventProps,
        ...eventData,
        props: {
          ...defaultEventProps,
          ...(eventData.props || {}),
        },
      };
      sendEvent(eventName, combinedData);
    }
  };

  // Process any queued events
  const existingQueue = (window.quampi && window.quampi.q) || [];
  for (let i = 0; i < existingQueue.length; i++) {
    window.quampi.apply(this, existingQueue[i]);
  }
})();

function sendPlausibleEvent(eventName) {
  if (window.plausible) {
    window.plausible(eventName);
  } else {
    console.error('analytics is not initialized');
  }
}

let isPageReloading = false;
let isTabClosing = false;

// Set up the beforeunload event listener
window.addEventListener('beforeunload', function (e) {
  if (!isPageReloading) {
    isTabClosing = true;
    sendPlausibleEvent('attempted_page_close');
    const confirmationMessage = 'Are you sure you want to leave this page?';
    (e || window.event).returnValue = confirmationMessage; // Default message in most browsers
    return confirmationMessage;
  }
});

// Listen for the actual unload event
window.addEventListener('unload', function () {
  if (isTabClosing) {
    sendPlausibleEvent('page_closed');
  }
});

// Detect page reloads
window.addEventListener('pagehide', function () {
  isPageReloading = true;
});

// Reset flags on page load
window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    isPageReloading = true; // BFCache restore
  } else {
    isPageReloading = false;
    isTabClosing = false;
  }
});

// Add click event listener to all internal links
document.addEventListener('click', function (event) {
  const target = event.target.closest('a');
  if (
    target &&
    target.href &&
    target.href.startsWith(window.location.origin) &&
    event.button === 0 &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.shiftKey
  ) {
    isPageReloading = true;
  }
});

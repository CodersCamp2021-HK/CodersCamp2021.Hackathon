const currentUrl = () => chrome.tabs.query({ active: true, lastFocusedWindow: true }).then((tabs) => tabs[0].url);

export { currentUrl };

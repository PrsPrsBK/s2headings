
browser.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  console.log(`${message.task} coming`);
});

document.addEventListener('DOMContentLoaded', () => {
  console.log(`at ${Date.now()}`);
  browser.runtime.sendMessage({
    task: 'reqHeadings',
  });
});

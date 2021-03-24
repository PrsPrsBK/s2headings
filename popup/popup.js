browser.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  console.log(`${message.task} coming`);
});

document.addEventListener('DOMContentLoaded', () => {
  browser.runtime.sendMessage({
    task: 'reqHeadings',
  }).then(headings => {
    document.querySelector('#display').textContent = `${Date.now()}-${JSON.stringify(headings, null, 2)}`;
  });
});

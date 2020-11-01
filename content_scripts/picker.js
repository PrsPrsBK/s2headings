(function() {

  const getHeadings = () => {
    const headingElm = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6');

    if (headingElm.length > 0) {
      for(const elm of headingElm) {
        console.log(`${elm.tagName} ${elm.textContent}`);
      }
    }

  };

  const processTask = (message) => {
    console.log(`${message.task} coming`);
    if (message.task === 'pickup') {
      return getHeadings();
    }
  };

  browser.runtime.onMessage.addListener(processTask);
  return true;
})();

// vim:expandtab ff=dos fenc=utf-8 sw=2

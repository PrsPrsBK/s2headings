(function() {

  const getHeadings = () => {
    const headingList = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6');

    for(const h of headingList) {
      if(!h.id) {
        h.id = `${Date.now()}`;
      }
      console.log(`${h.tagName}#${h.id} ${h.textContent}`);
    }

  };

  const processTask = message => {
    console.log(`${message.task} coming`);
    if (message.task === 'pickup') {
      getHeadings();
    }
  };

  if(browser.runtime.onMessage.hasListener(processTask) === false) {
    browser.runtime.onMessage.addListener(processTask);
  }
  return true;
})();

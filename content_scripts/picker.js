(function() {
  const getHeadings = () => {
    const headingList = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let counter = 0;
    for(const h of headingList) {
      if(!h.id) {
        h.id = `${Date.now()}-${counter}`;
        counter++;
      }
    }

    return Array.from(headingList, elm => { return { tagName: elm.tagName, id: elm.id, text: elm.textContent.trim() }; });
  };

  const processTask = message => {
    if (message.task === 'pickup') {
      return Promise.resolve(getHeadings());
    }
  };

  if(browser.runtime.onMessage.hasListener(processTask) === false) {
    browser.runtime.onMessage.addListener(processTask);
  }

  return Promise.resolve();
})();

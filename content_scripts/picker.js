(function() {
  const getHeadings = rootSelector => {
    const root = rootSelector ? document.querySelector(rootSelector) : document;
    if(!root) {
      return Promise.reject({ message: `cannot find ${rootSelector}` });
    }
    const headingList = root.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let counter = 0;
    for(const h of headingList) {
      if(!h.id) {
        h.id = `${Date.now()}-${counter}`;
        counter++;
      }
    }

    return Promise.resolve(Array.from(headingList, elm => { return { tagName: elm.tagName, id: elm.id, text: elm.textContent.trim() }; }));
  };

  const processTask = message => {
    if(message.task === 'pickup') {
      return getHeadings(message.selector);
    }
    else if(message.task === 'jump') {
      document.getElementById(message.id).scrollIntoView();
      return false;
    }
  };

  if(browser.runtime.onMessage.hasListener(processTask) === false) {
    browser.runtime.onMessage.addListener(processTask);
  }

  return Promise.resolve();
})();

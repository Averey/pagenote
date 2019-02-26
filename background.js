'use strict';

chrome.runtime.onInstalled.addListener(() => {
  console.log('create contextMenus');
  chrome.contextMenus.create({
    id: 'pagenote',
    title: "pagenote",
    contexts: ["selection"],
  })
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  // console.log(info, tab);
  console.log(info.selectionText);
  
})


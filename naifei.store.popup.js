const script = document.currentScript;
let ref = '';
if (script && script.src) {
	const url = new URL(script.src);
	ref = url.searchParams.get('ref');
}


// choose a unique name
function __naifeiStoreRefModule() {
  const naifeiStoreContainerID = "naifei_store_container";
  function open_naifei_store() {
	const popupBtn = document.getElementById('naifei_store_popup_btn');
    if (popupBtn) {
      popupBtn.style.display = 'none';
    }

    const ele = document.getElementById(naifeiStoreContainerID);
    if (!ele) {
      createNaifeiStore('https://naifei.store/?referal_code=' + ref);
      return;
    }


    ele.style.display = 'block';
    return;
  }

  function close_naifei_store() {
    const ele = document.getElementById(naifeiStoreContainerID);
    ele.style.display = 'none';

	const popupBtn = document.getElementById('naifei_store_popup_btn');
    if (popupBtn) {
      popupBtn.style.display = 'inherit';
    }
  }

  function createNaifeiStore(link) {
    const html = '<div ' +
      'id="'+naifeiStoreContainerID+'"' + 
      'style="position: fixed; right: 18px; top: 100px; width: 320px; height: 590px; z-index: 999999999;">' +
      '<iframe src="'+link+'" style="width: 100%; height: 100%; border-radius: 15px; border: 2px solid #f23a30; padding: 5px; background-color: white;"></iframe>' + 
      '<a href="javascript:close_naifei_store();"><div style="position: absolute; right: -12px; top: -12px; width: 28px; height: 28px; overflow: hidden; border-radius: 100px; cursor: pointer;"><svg t="1591006716320" class="icon" style="background-color: white; width: 48px; height: 48px; position: absolute; top: -10px; left: -10px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2842" width="200" height="200"><path d="M731.3 296.1c-120.7-120.7-316.4-120.7-437 0s-120.7 316.4 0 437c120.7 120.7 316.4 120.7 437 0 120.6-120.7 120.6-316.4 0-437z m-93.4 395.1L512.6 566 387.9 690.7c-14.1 14.1-36.9 14.1-50.9 0-14.1-14.1-14.1-36.9 0-50.9l124.7-124.7-124.3-124.4c-14.1-14.1-14.1-36.9 0-50.9 14.1-14.1 36.9-14.1 50.9 0l124.4 124.4L639 337.9c14.1-14.1 36.9-14.1 50.9 0 14.1 14.1 14.1 36.9 0 50.9L563.5 515.1l125.3 125.3c14.1 14.1 14.1 36.9 0 50.9s-36.9 14-50.9-0.1z" p-id="2843" fill="#f23a30"></path></svg></div></a>' + 
    '</div>';
    
    document.body.appendChild(createElementFromHTML(html));
  }

  function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild; 
  }

  // export interface
  return {
    open_naifei_store,
    close_naifei_store,
  };
}

// bind to window
window.open_naifei_store = __naifeiStoreRefModule().open_naifei_store;
window.close_naifei_store = __naifeiStoreRefModule().close_naifei_store;


let bottom = 20;
if (window.CRISP_WEBSITE_ID) {
	bottom = 98;
}

document.body.innerHTML += '<a id="naifei_store_popup_btn" style="z-index: 1000000; position: fixed; right: 24px; bottom: ' + bottom + 'px;" href="javascript:open_naifei_store();"><img style="width: 60px; height: 60px; background: black; padding: 5px; border-radius: 100px; " src="https://cdn.jsdelivr.net/gh/naifei-store/fe-dist@202007021531/favicon.png" /></a>';

const copyToClipboard = (event, el) => {
  event.stopPropagation();
  navigator.clipboard.writeText(el.urls.regular).then(
    () => {},
    (err) => console.log(err)
  );
};

async function toDataURL(url) {
  return fetch(url)
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      return URL.createObjectURL(blob);
    });
}

function addToLocalStorage(item) {
  const LS = window.localStorage;
  let storedItems = [...JSON.parse(LS["unsplash-app-storage"] || "[]")];
  storedItems.push(item);
  LS.setItem("unsplash-app-storage", JSON.stringify(storedItems));
}

function removeDuplicateObjs(arr) {
  return arr.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
}

export { copyToClipboard, toDataURL, addToLocalStorage, removeDuplicateObjs };

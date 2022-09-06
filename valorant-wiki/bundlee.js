const getBundlee = async () => {
    let url = "https://valorant-api.com/v1/bundles";
    let res = await fetch(url);
    let data = await res.json();
    createBundleBox(data);
  };
  
  const createBundleBox = (element) => {
    const bundleContainer = document.querySelector(".bundlecontainer");
  
    let bundlees = element.data;
    bundlees.forEach((bundlee) => {
      let bundleeName = bundlee.displayName;
      let bundleeImage = bundlee.displayIcon;
  
      const BundleesEl = document.createElement("div");
      BundleesEl.classList.add("bundlecard");
  
      BundleesEl.innerHTML = `<h1>${bundleeName}</h1>
          <img src=${bundleeImage} alt="#">`;
  
      bundleContainer.appendChild(BundleesEl);
    });
  };
  
  getBundlee();
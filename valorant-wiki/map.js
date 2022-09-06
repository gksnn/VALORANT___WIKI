const getMap = async () => {
    let url = "https://valorant-api.com/v1/maps";
    let res = await fetch(url);
    let data = await res.json();
  
    createMapBox(data);
  };
  
  const createMapBox = (elements) => {
    const mapContainer = document.querySelector(".mapcontainer");
  
    let maps = elements.data;
    const result = maps.filter((map) => map.displayIcon !== null);
    result.forEach((map) => {
      let mapName = map.displayName;
      let mapImage = map.splash;
      let mapDetail = map.displayIcon;
  
      const x = ` <div class="mapcard">
          <h1>${mapName}</h1>
         <div class="card-element">
              <img src=${mapImage} alt="#">
              <div class="map">
                  <img src=${mapDetail} alt="#">
              </div>
          </div>
          
      </div>`;
  
      mapContainer.innerHTML += x;
    });
  };
  
  getMap();
//Get Data from api
const getGun = async () => {
    let url = "https://valorant-api.com/v1/weapons";
    let res = await fetch(url);
    let data = await res.json();
    createGunBox(data);
  };
  //Gun Box
  const createGunBox = (element) => {
    const gunContainer = document.querySelector(".gun-container");
  
    let guns = element.data;
    let result = guns.filter((gun) => gun.weaponStats !== null);
    result.forEach((gun) => {
      let gunName = gun.displayName;
      let gunImage = gun.displayIcon;
      let fr = gun.weaponStats.fireRate;
      let ms = gun.weaponStats.magazineSize;
      let reload = gun.weaponStats.reloadTimeSeconds;
      let acc = gun.weaponStats.firstBulletAccuracy;
      let equip = gun.weaponStats.equipTimeSeconds;
      let hd1 = gun.weaponStats.damageRanges[0].headDamage;
   
      let bd1 = gun.weaponStats.damageRanges[0].bodyDamage;
      let ld1 = gun.weaponStats.damageRanges[0].legDamage;
      let y = ld1.toFixed(0)
     
  
      let x = `<div class="gun-box">
          <img
            src=${gunImage}
            alt="#"
            height='65px'
            
          />
          <h1>${gunName}</h1>
  
          <button href="#" class='seeDetails'>View
              <div class="details">
              <i class="fa-solid fa-xmark close"></i>
              <div class="fireRateBox">
                  <h1>${gunName}</h1>
                  <img
                  src=${gunImage}
                  alt="#" height="150px"
                  />
                  <div class="tables">
                  <table class="table-1">
                      <tr>
                      <th>Fire Rate</th>
                      <th>Magazine Size</th>
                      <th>Reload</th>
                      <th>Bullet Accuracy</th>
                      <th>Equip Time</th>
                      </tr>
                      <tr>
                      <td>${fr}</td>
                      <td>${ms}</td>
                      <td>${reload}</td>
                      <td>${acc}</td>
                      <td>${equip}</td>
                      </tr>
                  </table>
                  <h5>0-30M</h5>
                  <table class="table-2">
                      <tr>
                      <th>Head Damage</th>
                      <th>Body Damage</th>
                      <th>Leg Damage</th>
                      </tr>
                      <tr>
                      <td>${hd1}</td>
                      <td>${bd1}</td>
                      <td>${y}</td>
                      </tr>
                  </table>
                  
                  
                     
                  
                  </div>
              </div>
              </div>
          </div>
      </button>`;
  
      gunContainer.innerHTML += x;
    });
  
    //Open Info
    let seeDetails = document.querySelectorAll(".seeDetails");
  
    seeDetails.forEach((seeDetail) => {
      seeDetail.addEventListener("click", showInfos);
    });
  
    function showInfos(e) {
      const details = e.target.querySelector(".details");
      if (details === null) {
        return null;
      } else {
        return (details.style.display = "block");
      }
    }
  
    //Close Info
    let closeDetails = document.querySelectorAll(".close");
  
    closeDetails.forEach((closeDetail) => {
      closeDetail.addEventListener("click", closeInfos);
    });
  
    function closeInfos(e) {
      const closee = e.target.parentElement;
  
      return (closee.style.display = "none");
    }
  };
  
  getGun();
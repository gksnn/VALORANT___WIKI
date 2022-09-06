const getAgent = async () => {
    let url = "https://valorant-api.com/v1/agents";
    let res = await fetch(url);
    let data = await res.json();
    createAgentBox(data);
  };
  
  const createAgentBox = (element) => {
    const agentContainer = document.querySelector(".agent-container");
  
    let agents = element.data;
    const results = agents.filter((agent) => agent.isPlayableCharacter === true);
    results.forEach((agent) => {
      let agentName = agent.displayName;
      let agentImage = agent.fullPortrait;
      let desc = agent.description;
      let abilitiesImage1 = agent.abilities[0].displayIcon;
      let abilitiesImage2 = agent.abilities[1].displayIcon;
      let abilitiesImage3 = agent.abilities[2].displayIcon;
      let abilitiesImage4 = agent.abilities[3].displayIcon;
      let abilitiesName1 = agent.abilities[0].displayName;
      let abilitiesName2 = agent.abilities[1].displayName;
      let abilitiesName3 = agent.abilities[2].displayName;
      let abilitiesName4 = agent.abilities[3].displayName;
  
      let x = `<div class="agentbox">
          <img src=${agentImage} alt="">
          <h1 class='agentname'>${agentName}</h1>
      
          <button class="seeDetails" >View
              <div class="showdetails"  >
                  <i class="fa-solid fa-xmark closebtn"></i>
                          <p>${desc}</p>
                      <div class='boxs'>
                          <div class="box1">
                              <img src=${abilitiesImage1} alt="">
                              <p>${abilitiesName1}</p>
                          </div>
                          <div class="box2">
                              <img src=${abilitiesImage2} alt="">
                              <p>${abilitiesName2}</p>
                          </div>
                          <div class="box3">
                              <img src=${abilitiesImage3} alt="">
                              <p>${abilitiesName3}</p>
                          </div>
                          <div class="box4">
                              <img src=${abilitiesImage4} alt="">
                              <p>${abilitiesName4}</p>
                          </div>
                      </div>    
                      </div>
                  </div>
              
              </button>
               
          
      </div>`;
  
      agentContainer.innerHTML += x;
    });
    //Open details
    let seeDetails = document.querySelectorAll(".seeDetails");
  
    seeDetails.forEach((seeDetail) => {
      seeDetail.addEventListener("click", showInfos);
    });
  
    function showInfos(e) {
      const showdetails = e.target.querySelector(".showdetails");
      if (showdetails === null) {
        return null;
      } else {
        return (showdetails.style.display = "block");
      }
    }
  //close details
    let closeDetails = document.querySelectorAll(".closebtn");
  
    closeDetails.forEach((closeDetail) => {
      closeDetail.addEventListener("click", function (e) {
        let abv = e.target.parentElement;
        abv.style.display = "none";
      });
    });
  };
  
  getAgent();
  
  //search
  let searcInput = document.querySelector(".searchbox");
  
  searcInput.addEventListener("input", function () {
    const agentsName = document.querySelectorAll(".agentname");
    let container = document.querySelector(".container");
  
    const search = searcInput.value;
  
    agentsName.forEach((agentName) => {
      agentName.parentElement.style.display = "block";
      container.style.height = "100%";
      if (!agentName.innerHTML.toLowerCase().includes(search)) {
        agentName.parentElement.style.display = "none";
        container.style.height = "100vh";
      }
    });
  });
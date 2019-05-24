const membersArr = [
  {
    h2Content: "Nate Boyette",
    h3Content: "Team Lead",
    paraContent:
      "Nate is the team lead, he keeps track of the day activities. He is incharge of making sure the developers are on track to give you the product you deserve",
    imageSrc: "./assets/images/nate.jpg"
  },

  {
    h2Content: "Kelechi Ogbonna",
    h3Content: "UI Developer",
    paraContent:
      "Kelechi is part of the team working hard to build build an interface to give you the marketing page you deserve.",
    imageSrc: "./assets/images/kelechi.jpg"
  },
  {
    h2Content: "George Adams",
    h3Content: "UI Developer",
    paraContent:
      "George is part of the team working hard to build build an interface to give you the marketing page you deserve.",
    imageSrc: "./assets/images/george.jpg"
  },
  {
    h2Content: "Firealem Eko",
    h3Content: "Frontend developer",
    paraContent:
      "firealem is part of the team dedicated to building the application tools you interact with when you use corporate event planner. A team dedicated to building amazing functionalities for your needs.",
    imageSrc: "./assets/images/firealempic.jpg"
  },
  {
    h2Content: "April Ding",
    h3Content: "UX designer",
    paraContent:
      "April is part of the team dedicated to creating a seamless user experience, focusing on making the website user friendly, so you could have the best experience.",
    imageSrc: "./assets/images/april.jpg"
  },
  {
    h2Content: "Dayton Stienmeyer",
    h3Content: "Backend Developer",
    paraContent:
      "Dayton is part of the team dedicated to building the functionalities we provide at corporate event planner. A team dedicated to building amazing functionalities for your needs.",
    imageSrc: "./assets/images/dayton.png"
  }
];

class About {
  constructor(data) {
    this.data = data;
    this.cards = document.querySelector(".cards");
    this.cards.appendChild(this.createTeamMemberCard());
  }
  createTeamMemberCard() {
    const divTeam = document.createElement("div");
    divTeam.classList.add("team-member");
    divTeam.appendChild(this.createTextContent());
    divTeam.appendChild(this.createTeamImage());
    return divTeam;
  }

  createTextContent() {
    const divTextcontent = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const para = document.createElement("p");

    h2.textContent = this.data.h2Content;
    h3.textContent = this.data.h3Content;
    para.textContent = this.data.paraContent;

    divTextcontent.classList.add("text-content");
    divTextcontent.appendChild(h2);
    divTextcontent.appendChild(h3);
    divTextcontent.appendChild(para);
    return divTextcontent;
  }

  createTeamImage() {
    const divImage = document.createElement("div");
    const image = document.createElement("img");

    image.setAttribute("src", this.data.imageSrc);
    divImage.classList.add("team-image");
    divImage.appendChild(image);
    return divImage;
  }
}

const memebers = membersArr.forEach(member => {
  new About({
    h2Conent: member.h2Content,
    h3Content: member.h3Content,
    paraContent: member.paraContent,
    imageSrc: member.imageSrc
  });
});

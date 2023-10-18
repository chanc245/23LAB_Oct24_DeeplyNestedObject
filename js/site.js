const allNames = {
  nameEn: {
    name1: "Jia-Yu Chang",
    name2: "Yu-Tung, Chang"
  },

  nameCh: {
    name1: "張珈瑜",
    name2: "張語彤"
  },

  memories: {
    name1Memory: "When I was in elementary school in a cram school, I remember my teacher once joked about my name sounding similar to 'Octopus.' I recall being so mad that I literally stood up and left the room. I sat outside the room until the teacher told me to go back.",
    name2Memory: "After I changed my name, I didn't initially realize the connection between my name and an octopus head. However, when my friends found out about my new name and wouldn't stop joking about it, I eventually realized that my name once again sounded similar to 'octopus.' At that point, I stopped being offended by it and simply embraced it."
  },

  changeNameAge: 15,

  oldNameUse: false,

  newNameUse: true,
}

const octo = {
  orderDescription: "The order called Octopoda refers to octopuses that consist of two eyes, four pairs of arms and bilateral symmetry (Encyclopedia of Life). An octopus is made up of a completely merged foot and head with a hard beak, and its mouth at the center of its muscular tentacles (Aquarium of the Pacific).",

  types: [
    "Dumbo Octopus",
    "Mimic octopus",
    "Blanket octopus",
    "Giant Pacific octopus"
  ],

  typesDescription: [
    {
      title: "Dumbo Octopus",
      id: "dumbo",
      imgLink: "/image/dumbo/dumbo.jpeg",
      gifLinks: [
        "/image/dumbo/dumbo_1.gif",
        "/image/dumbo/dumbo_2.gif",
        // "/image/dumbo/dumbo_3.gif"
      ],
      description: "Grimpoteuthis is a genus of pelagic cirrate (finned) octopods known as the dumbo octopuses.",
      facts: [
        "The name 'dumbo' originates from their resemblance to the title character of Disney's 1941 film Dumbo, having two prominent ear-like fins which extend from the mantle above each eye.",
        "The dumbo octopus (Grimpoteuthis ) is a deep sea animal that lives on the ocean floor at extreme depths of 9,800 to 13,000 feet.",
        "They are small animals, around 8 inches tall, and have a pair of fins located on their mantle—their namesake—and webbing between their arms.",
      ],
      source: "https://ocean.si.edu/ocean-life/invertebrates/grimpoteuthis-dumbo-octopus#:~:text=The%20dumbo%20octopus%20(Grimpoteuthis%20)%20is,and%20webbing%20between%20their%20arms."
    },

    {
      title: "Mimic Octopus",
      id: "mimic",
      imgLink: "/image/mimic/mimic1.jpeg",
      gifLinks: [
        "/image/mimic/mimic_1.gif",
        "/image/mimic/mimic_2.gif"
      ],
      description: "The mimic octopus (Thaumoctopus mimicus) is a species of octopus from the Indo-Pacific region. Like other octopuses, it uses its chromatophores to disguise itself with its background.",
      facts: [
        "The mimic octopus is a smaller octopus, growing to a total length of about 60 cm (2 ft), including arms, with a diameter approximately that of a pencil at their widest.",
        "Small horns protrude from each eye. The octopus' natural color is light brown/beige, but it usually takes on a more noticeable hue of striped white and brown to scare off predators by imitating poisonous species and vicious, territorial sea creatures. Its ability to change shape is the reason it was named the 'mimic' octopus, which is its main defense besides camouflage.",
        "The mimic octopus was first discovered off the coast of Sulawesi, Indonesia in 1998 on the bottom of a muddy river mouth.",
        "The mimic octopus uses a jet of water through its funnel to glide over the sand while searching for prey, typically small fish, crabs, and worms."
      ],
      source: "https://en.wikipedia.org/wiki/Mimic_octopus"
    },

    {
      title: "Blanket octopus",
      id: "blanket",
      imgLink: "/image/blanket/blanket.jpg",
      gifLinks: [
        "/image/blanket/blanket_1.gif",
        "/image/blanket/blanket_2.gif"
      ],
      description: "Tremoctopus is a genus of pelagic cephalopods, containing four species that occupy surface to mid-waters in subtropical and tropical oceans.",
      facts: [
        "They are commonly known as blanket octopuses, in reference to the long, transparent webs that connect the dorsal and dorsolateral arms of the adult females. The other arms are much shorter and lack webbing.",
        "Females may reach 2 m (6.6 ft) in length, whereas the males are 2.4 cm (1 inch). The weight ratio is at least 10,000:1, and can probably reach as much as 40,000:1. The males have a large arm in a spherical pouch modified for mating, known as a hectocotylus.",
        "The common blanket octopus (Tremoctopus violaceus) exhibits one of the most extreme sexual size-dimorphism known in any animal near its size or larger."
      ],
      source: "https://en.wikipedia.org/wiki/Blanket_octopus"
    },

    {
      title: "Giant Pacific octopus",
      id: "giant",
      imgLink: "/image/giant/giantPacific.jpg",
      gifLinks: [
        "/image/giant/giant_1.gif"
      ],
      description: "The giant Pacific octopus (Enteroctopus dofleini), also known as the North Pacific giant octopus, is a large marine cephalopod belonging to the genus Enteroctopus.",
      facts: [
        "Its spatial distribution includes the coastal North Pacific, along Mexico (Baja California), The United States (California, Oregon, Washington, and Alaska), Canada (British Columbia), Russia, Eastern China, Japan, and the Korean Peninsula.",
        "It can be found from the intertidal zone down to 2,000 m (6,600 ft), and is best adapted to cold, oxygen-rich water.",
        "It is arguably the largest octopus species."
      ],
      source: "https://en.wikipedia.org/wiki/Giant_Pacific_octopus"
    }
  ],

  generalFact: [
    "Octopuses live in oceans all over the world. Most are pelagic, meaning they live near the water's surface in shells, reefs and crevices. Some species live on the floor of the ocean, making their homes out of caves.",
    "Octopuses tend to be solitary, though they do interact with other octopuses at times. Some species of octopuses hunt at night, while others only hunt at dusk and dawn.",
    "Octopus have three hearts and blue blood",
    "The order Octopoda includes 289 species, according to the World Animal Foundation. The word also refers specifically to animals in the genus Octopus.",
    "The word octopus comes from the Greek, októpus, which means 'eight foot'",
    "Two-thirds of an octopus' neurons are in its arms rather than its head; that means that an octopus can focus on exploring a cave for food with one arm while another arm tries to crack open a shellfish.",
    "Octopuses have an excellent sense of touch, according to the World Animal Foundation. Their suckers have receptors that enable an octopus to taste what it is touching.",
    "Most octopuses — those in the suborder Incirrata (or Incirrina) — have no internal skeletons or protective shells. Their bodies are soft, enabling them to squeeze into small cracks and crevices, according to National Geographic.",
    "In April 2016, an octopus at the National Aquarium of New Zealand squeezed out of its tank and made an eight-armed dash for a drainpipe that — luckily for him — led directly to the sea.",
    "An octopus has three hearts. One pumps blood through its organs; the two others pump blood through its gills, according to the World Animal Foundation. Octopus blood is blue because it has a copper-based protein called hemocyanin.",
    "When an octopus is swimming, the organ that delivers blood to the organs stops beating. This exhausts the octopus, which is likely the reason they prefer to crawl than swim, according to the Smithsonian article.",
    "Octopuses come in many different sizes. The common octopus (Octopus vulgaris) is 12 to 36 inches (30.5 to 91.4 centimeters) long and weighs 6.6 to 22 lbs. (3 to 10 kilograms).",
    "The giant Pacific octopus (Enteroctopus dofleini) is the largest octopus. They typically grow to 16 feet (5 meters) long and weight around 110 lbs. (50 kg), but one was recorded to weigh more than 600 lbs. (272 kg) and measure 30 feet (9.1 m) across, according to National Geographic.",
    "The smallest octopus is the Octopus wolfi. It is smaller than an inch (2.5 cm) long and weighs less than a gram.",
    "When scared, octopuses will shoot a dark liquid, sometimes called ink, at the thing that scared them. This will temporarily blind and confuse a potential attacker, giving the octopus time to swim away. The ink can also dull the attacker’s smelling and tasting abilities, according to the Smithsonian article.",
    "Octopuses can also change color to hide and match their surroundings. They can turn blue, gray, pink, brown or green. The mimic octopus can also flex its body to resemble more dangerous animals, such as eels and lionfish, according to the World Animal Foundation.",
    "If an octopus does get caught — no problem. They can lose arms and regrow them, according to National Geographic.",
    "Octopuses are carnivores, which means they eat meat. Meals can include clams, shrimp, lobsters, fish, sharks and even birds. Octopuses typically drop down on their prey, envelop it with their arms and pull the animal into their mouth.",
    "Octopuses have short life spans. Some species only live for around six months. Other species, like the North Pacific giant octopus can live as long as five years. Typically, the larger the octopus, the longer it lives, according to the World Animal Foundation.",
    "The standard plural in English of octopus is octopuses, according to the Oxford English Dictionary. As a word that comes from Greek, it follows Greek rules for plurals. The word 'octopi,' which follows Latin rules for plurals, is incorrect.",
    "Not all octopuses have long arms. The Opisthoteuthis adorabilis’ arms are very short and have webbing in between each one. This gives the tiny octopus the look of an orange ghost.",
    "Octopuses are about as smart as house cats. ",
    "The oldest octopus fossil is from an animal that lived 296 million years ago, during the Carboniferous period, — millions of years before the dinosaurs lived.",
    "octopuses that do not escape their own ink cloud can die.",
    "After mating, it’s game over for octopuses."
  ]
  //source: https://www.livescience.com/55478-octopus-facts.html

}


const octopusList = document.getElementById('octopus-list');
const showInfoButton = document.getElementById('showOctopusInfo');

showInfoButton.addEventListener('click', displayOctopusInfo);

function displayOctopusInfo() {
  octopusList.innerHTML = ''; // Clear existing list

  octo.typesDescription.forEach(octopus => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <div class="box" id="${octopus.id}">
    <br>
      <h2>${octopus.title}</h2>
      <img src="${octopus.imgLink}" alt="${octopus.title}">
      <p>${octopus.description}</p>
      <h3>Facts:</h3>
      <ul>
        ${octopus.facts.map(fact => `<li>${fact}</li>`).join('')}
      </ul>
      <a href="${octopus.source}" target="_blank">Learn More</a>
      </div>
    `;

    //GIFs
    const gifDiv = document.createElement('div');
    octopus.gifLinks.forEach(gifLink => {
      const gifImage = document.createElement('img');
      gifImage.src = gifLink;
      gifImage.alt = octopus.title;
      gifDiv.appendChild(gifImage);
    });

    listItem.appendChild(gifDiv);

    octopusList.appendChild(listItem);
  });
}


const ask = {
  whatNameAtAge: function (age) {
    let nameChinese = "";
    let nameEnglish = "";
    let order;

    if (age <= 15) {
      nameChinese = allNames.nameCh.name1;
      nameEnglish = allNames.nameEn.name1;
      order = "first";

      console.log(`When Christine was ${age} years old, her name was ${nameEnglish}, which in Chinese is ${nameChinese}, and that's her ${order} name.`);
    } else if (age <= 22) {
      nameChinese = allNames.nameCh.name2;
      nameEnglish = allNames.nameEn.name2;
      order = "second";

      console.log(`When Christine was ${age} years old, her name was ${nameEnglish}, which in Chinese is ${nameChinese}, and that's her ${order} name.`);
    } else if (age > 22) {
      console.log("Hey belkjsdsdflkj im typing stuff hehehahahha hello there im typing typing stuff laskdjf js");
    }
  },

  randomOctoFact: function () {
    let numberOfFacts = octo.generalFact.length;
    let randomIndex = Math.floor(Math.random() * numberOfFacts);
    let randomFact = octo.generalFact[randomIndex];

    console.log(`${randomFact}`);
  },

  nameInChinese: function (nameType) {
    if (nameType == 1) {
      console.log(`Christine's first name ${allNames.nameEn.name1} in Chinese is ${allNames.nameCh.name1}`);
    } else {
      console.log(`Christine's second name ${allNames.nameEn.name2} in Chinese is ${allNames.nameCh.name2}`);
    }
  },

  nameInEnglish: function (nameType) {
    if (nameType == 1) {
      console.log(`Christine's first name ${allNames.nameCh.name1} in English is ${allNames.nameEn.name1}`);
    } else {
      console.log(`Christine's second name ${allNames.nameCh.name2} in English is ${allNames.nameEn.name2}`);
    }
  }
}

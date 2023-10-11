const octopoda = {
  nameEnglish: {
    name1: "Jia-Yu Chang",
    name2: "Yu-Tung, Chang"
  },

  nameChinese: {
    name1: "張珈瑜",
    name2: "張語彤"
  },

  changeNameAge: 15,

  oldNameUse: false,

  newNameUse: true,

  octopodaFamily: [
    "Alloposidae",
    "Amphitretidae",
    "Argonautidae",
    "Bolitaenidae",
    "Cirroteuthidae",
    "Grimpoteuthididae",
    "Idioctopodidae",
    "Octopodidae",
    "Ocythoidae",
    "Opisthoteuthidae",
    "Stauroteuthidae",
    "Tremoctopodidae",
    "Vitreledonellidae"
  ],

  memories: {
    name1Memory: "When I was in elementary school in a cram school, I remember my teacher once joked about my name sounding similar to 'Octopus.' I recall being so mad that I literally stood up and left the room. I sat outside the room until the teacher told me to go back.",
    name2Memory: "After I changed my name, I didn't initially realize the connection between my name and an octopus head. However, when my friends found out about my new name and wouldn't stop joking about it, I eventually realized that my name once again sounded similar to 'octopus.' At that point, I stopped being offended by it and simply embraced it."
  },

  octopusFact: {
    Fact1: "Octopuses live in oceans all over the world. Most are pelagic, meaning they live near the water's surface in shells, reefs and crevices. Some species live on the floor of the ocean, making their homes out of caves.",
    Fact2: "Octopuses tend to be solitary, though they do interact with other octopuses at times. Some species of octopuses hunt at night, while others only hunt at dusk and dawn.",
    Fact3: "Octopus have three hearts and blue blood",
    Fact4: "The order Octopoda includes 289 species, according to the World Animal Foundation. The word also refers specifically to animals in the genus Octopus.",
    Fact5: "The word octopus comes from the Greek, októpus, which means 'eight foot'",
    Fact6: "Two-thirds of an octopus' neurons are in its arms rather than its head; that means that an octopus can focus on exploring a cave for food with one arm while another arm tries to crack open a shellfish.",
    Fact7: "Octopuses have an excellent sense of touch, according to the World Animal Foundation. Their suckers have receptors that enable an octopus to taste what it is touching.",
    Fact8: "Most octopuses — those in the suborder Incirrata (or Incirrina) — have no internal skeletons or protective shells. Their bodies are soft, enabling them to squeeze into small cracks and crevices, according to National Geographic.",
    Fact9: "In April 2016, an octopus at the National Aquarium of New Zealand squeezed out of its tank and made an eight-armed dash for a drainpipe that — luckily for him — led directly to the sea.",
    Fact10: "An octopus has three hearts. One pumps blood through its organs; the two others pump blood through its gills, according to the World Animal Foundation. Octopus blood is blue because it has a copper-based protein called hemocyanin.",
    Fact11: "When an octopus is swimming, the organ that delivers blood to the organs stops beating. This exhausts the octopus, which is likely the reason they prefer to crawl than swim, according to the Smithsonian article.",
    Fact12: "Octopuses come in many different sizes. The common octopus (Octopus vulgaris) is 12 to 36 inches (30.5 to 91.4 centimeters) long and weighs 6.6 to 22 lbs. (3 to 10 kilograms).",
    Fact13: "The giant Pacific octopus (Enteroctopus dofleini) is the largest octopus. They typically grow to 16 feet (5 meters) long and weight around 110 lbs. (50 kg), but one was recorded to weigh more than 600 lbs. (272 kg) and measure 30 feet (9.1 m) across, according to National Geographic.",
    Fact14: "The smallest octopus is the Octopus wolfi. It is smaller than an inch (2.5 cm) long and weighs less than a gram.",
    Fact15: "When scared, octopuses will shoot a dark liquid, sometimes called ink, at the thing that scared them. This will temporarily blind and confuse a potential attacker, giving the octopus time to swim away. The ink can also dull the attacker’s smelling and tasting abilities, according to the Smithsonian article.",
    Fact16: "Octopuses can also change color to hide and match their surroundings. They can turn blue, gray, pink, brown or green. The mimic octopus can also flex its body to resemble more dangerous animals, such as eels and lionfish, according to the World Animal Foundation.",
    Fact17: "If an octopus does get caught — no problem. They can lose arms and regrow them, according to National Geographic.",
    Fact18: "Octopuses are carnivores, which means they eat meat. Meals can include clams, shrimp, lobsters, fish, sharks and even birds. Octopuses typically drop down on their prey, envelop it with their arms and pull the animal into their mouth.",
    Fact19: "Octopuses have short life spans. Some species only live for around six months. Other species, like the North Pacific giant octopus can live as long as five years. Typically, the larger the octopus, the longer it lives, according to the World Animal Foundation.",
    Fact20: "The standard plural in English of octopus is octopuses, according to the Oxford English Dictionary. As a word that comes from Greek, it follows Greek rules for plurals. The word 'octopi,' which follows Latin rules for plurals, is incorrect.",
    Fact21: "Not all octopuses have long arms. The Opisthoteuthis adorabilis’ arms are very short and have webbing in between each one. This gives the tiny octopus the look of an orange ghost.",
    Fact22: "Octopuses are about as smart as house cats. ",
    Fact23: "The oldest octopus fossil is from an animal that lived 296 million years ago, during the Carboniferous period, — millions of years before the dinosaurs lived.",
    Fact24: "octopuses that do not escape their own ink cloud can die.",
    Fact25: "After mating, it’s game over for octopuses."
  },

  //source: https://www.livescience.com/55478-octopus-facts.html

  whatNameAtAge: function (age) {
    let nameChinese = "";
    let nameEnglish = "";
    let order;

    if (age >= 15) {
      nameChinese = this.nameChinese.name1;
      nameEnglish = this.nameEnglish.name1;
      order = "first";
    } else {
      nameChinese = this.nameChinese.name2;
      nameEnglish = this.nameEnglish.name2;
      order = "second";
    }

    console.log(`When Christine was ${age} years old, her name was ${nameEnglish}, which in Chinese is ${nameChinese}, and that's her ${order} name.`);
  },

  randomOctoFact: function () {
    let numberOfFacts = Object.keys(octopusFacts).length;
    let randomFact = octopusFacts[`Fact${Math.floor(Math.random() * numberOfFacts) + 1}`];

    console.log(`Your random octopus related fact of the day: ${randomFact}`);
  },

  nameInChinese: function (name) {
    if (name == 1) {
      console.log(`Christine's first name ${this.nameEnglish.name1} in Chinese ${this.nameChinese.name1}`);
    } else {
      console.log(`Christine's second name ${this.nameEnglish.name2} in Chinese ${this.nameChinese.name2}`);
    }
  },

  nameInEnglish: function (name) {
    if (name == 1) {
      console.log(`Christine's first name ${this.nameChinese.name1} in English ${this.nameEnglish.name1}`);
    } else {
      console.log(`Christine's second name ${this.nameChinese.name2} in English ${this.nameEnglish.name2}`);
    }
  }

}

//// - Be at least 100 lines of code.
//// - Have at least 10 properties at the top level.
//// - Have at least 3 nested properties (object within object).
//// - Have at least 2 functions.
//// - Incorporate all of the following data types: 
//// Number, 
//// String, 
//// Boolean, 
//// Function, 
//// Object, 
//// Array
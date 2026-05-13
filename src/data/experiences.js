import morningImage from "../assets/images/morning-silence.png";
import fireImage from "../assets/images/fire.png";
import walksImage from "../assets/images/walk.png";
import healingImage from "../assets/images/healing.png";
import diningImage from "../assets/images/dining.png";
import bathImage from "../assets/images/bath.png";
import nightImage from "../assets/images/night.png";

const experiences = [
  {
    id: "01",
    title: "Morning Silence",
    description:
      "Before the world awakens, Athira belongs only to mist and pine air.",
    details:
      "Slow mornings begin with cedar tea, cold mountain fog, and silence untouched by time.",
    image:
      morningImage,
    position: "left",
  },
  {
    id: "02",
    title: "Fire Ritual",
    description:
      "As night falls, strangers become stories around warmth and firelight.",
    details:
      "Flames crackle softly beneath the mountains while conversations dissolve into the dark forest air.",
    image:
      fireImage,
    position: "right",
  },
  {
    id: "03",
    title: "Forest Walks",
    description:
      "Every path disappears softly into fog, silence, and cold mountain air.",
    details:
      "Hidden trails wind through pine forests where every step feels slower than the last.",
    image:
      walksImage ,
    position: "center",
  },
  {
    id: "04",
    title: "Mountain Healing",
    description:
      "Stillness becomes something you can finally hear again.",
    details:
      "Breathwork, warmth, and sacred silence create a retreat from the movement of modern life.",
    image:
      healingImage,
    position: "left",
  },
  {
    id: "05",
    title: "Sacred Dining",
    description:
      "Slow candlelit evenings shaped by warmth, stone, and conversation.",
    details:
      "Meals unfold slowly beside firelight, mountain herbs, and architecture shaped by stillness.",
    image:
      diningImage,
    position: "right",
  },
  {
    id: "06",
    title: "Stone Bath Ritual",
    description:
      "Warm water, cold air, and silence held deep within the mountains.",
    details:
      "Steam rises slowly through stone spaces designed for solitude, restoration, and reflection.",
    image:
      bathImage,
    position: "center",
  },
  {
    id: "07",
    title: "Night Under the Mountains",
    description:
      "When the fire fades, only stars and silence remain.",
    details:
      "The retreat disappears quietly into darkness while the mountains remain endlessly awake.",
    image:
      nightImage,
    position: "left",
  },
];

export default experiences;
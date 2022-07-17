import { FaAccessibleIcon, FaGg } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";

export const FeatureList = [
  {
    id: 1,
    icon: <FaAccessibleIcon color="#0a1930" size={22} />,
    heading: "Transparent pricing",
    text: "Fixed prices. No hidden charges.",
  },
  {
    id: 2,
    icon: <SiDatabricks color="#0a1930" size={22} />,
    heading: "Experts only",
    text: "Our professsionals are some of the best present in the market and have on-job expertise.",
  },
  {
    id: 3,
    icon: <MdConnectWithoutContact color="#0a1930" size={22} />,
    heading: "Fully equipped",
    text: "We bring everything needed to get the job done well and in the given time period.",
  },
  {
    id: 4,
    icon: <FaGg color="#0a1930" size={22} />,
    heading: "100% quality assured",
    text: "If you don't love our service, we will make it right in every way possible.",
  },
];

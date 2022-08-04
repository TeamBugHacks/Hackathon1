import { useParams } from "react-router-dom";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

const ContentDetails = () => {
  return (
    <ServiceDetails
      logo={"Content Writing"}
      icon={<NoteAltIcon />}
      title={"Content Writing services at its peek."}
      description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
        cumque possimus nisi.`}
      img={`https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
    />
  );
};

export default ContentDetails;

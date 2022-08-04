import {useParams} from "react-router-dom";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import WebIcon from "@mui/icons-material/Web";

const WebsiteDetails=()=>{
    return(
        <ServiceDetails logo={"Web"} icon={<WebIcon/>}  title={"Web services at its peek."}  description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
        cumque possimus nisi.`}  img={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80`}/>
    )
}

export default WebsiteDetails
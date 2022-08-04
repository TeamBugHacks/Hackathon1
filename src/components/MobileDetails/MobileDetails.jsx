import {useParams} from 'react-router-dom'
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import ServiceDetails from "../ServiceDetails/ServiceDetails";


const MobileDetails = () => {
    return(
        <ServiceDetails logo={"App"} icon={<AppShortcutIcon/>}  title={"App services at its peek."}  description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
        cumque possimus nisi.`}  img={`https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}/>
    )
}

export default MobileDetails
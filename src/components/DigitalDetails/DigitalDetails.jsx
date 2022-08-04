import {useParams} from 'react-router-dom'
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

const DigitalDetails = () => {
    return(
        <ServiceDetails logo={"Digtal Marketing"} icon={<CurrencyBitcoinIcon/>}  title={"Digital marketing services at its peek."}  description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
        cumque possimus nisi.`}  img={`https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80`}/>
    )
}

export default DigitalDetails
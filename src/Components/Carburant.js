import Showquestion from './Bubllyquestion.js';
import { carburantData } from '../Datas/datastest.js';

function CarburantType (){
    return(
        <div>
            <Showquestion defaultsData={carburantData}/>
        </div>
    )
}

export default CarburantType;

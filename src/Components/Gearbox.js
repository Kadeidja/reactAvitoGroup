import Showquestion from './Bubllyquestion.js';
import { GearBox } from '../Datas/datastest.js';

function GearBoxType (){
    return(
        <div>
            <Showquestion defaultsData={GearBox}/>
        </div>
    )
}

export default GearBoxType;

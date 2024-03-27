import Showquestion from './Bubllyquestion.js';
import { originData } from '../Datas/datastest.js';

function OrigindataType (){
    return(
        <div>
            <Showquestion defaultsData={originData}/>
        </div>
    )
}

export default OrigindataType;

import Showquestion from './Bubllyquestion.js';
import { stateData } from '../Datas/datastest.js';

function StatesdataType (){
    return(
        <div>
            <Showquestion defaultsData={stateData}/>
        </div>
    )
}

export default StatesdataType;

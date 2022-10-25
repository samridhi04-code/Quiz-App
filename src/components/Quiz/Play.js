import React, {Fragment, useEffect, useState}  from 'react';
import {Helmet} from 'react-helmet';
import { useNavigate } from "react-router-dom";


// class Play extends React.Component{

    export const Play = ({fetchedData}) => {
        
        // console.log(fetchedData);

    const [answer, setAnswer] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
      setAnswer(fetchedData.results || {});
      
    }, [fetchedData]);
    var i=0;
   
    function handleNext(i){
        // alert('heyy');
        i++;
        // alert(i);
        // if(i>10){
        //     handleQuit();
        // }
        return i;
    }




// increaseCount = () =>{
// this.setState({
// counter:5
// });
// };


// render(){
    return(
        <Fragment>
            <Helmet><title>Quiz Page</title></Helmet>
            <div className='Questions'>
                <h2>Quiz Mode</h2>
                <div className='lifeline-container'>
                    <p>
                        <span className='mdi mdi-set-center mdi-24px lifeline-icon'></span><span className='lifeline'>2</span>
                    </p>
                    <p>
                        <span className='mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon'></span><span className='lifeline'>5</span>
                    </p>
                </div>
                <div className=''>
                    <p className='Hashh'>
                        <span className='leftt'>{i} of 15</span>
                       <span className='rightt'>2:15<span className='mdi mdi-clock-outline mdi-24px'></span></span>
                    </p>

                </div>
<h5>{(answer[i] || {}).question}</h5>
<div className='options-container'>
    <p className='option'>{(answer[i] || {}).incorrect_answers}</p>
    <p className='option'>{(answer[i] || {}).incorrect_answers}</p>
</div>
<div className='options-container'>
    <p className='option'>{(answer[i] || {}).incorrect_answers}</p>
    <p className='option'>{(answer[i] || {}).correct_answer}</p>
</div>
<div className='button-container'>
    {/* <button onClick={handleNext}>Previous</button> */}
    <a href='/play/quiz'>Previous</a>
    {/* <button>Next</button> */}
    <a href='/play/quiz' onClick={handleNext}>Next</a>
    <a href='/play/quiz'>Quit</a>
    {/* <button>Quit</button> */}
</div>
            </div>
        </Fragment>
    );
}

// }
export default Play;
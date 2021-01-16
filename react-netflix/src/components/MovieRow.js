import React, { useState } from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, itens}) => {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 20;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX + (-Math.round(window.innerWidth / 2));
        let xx = (itens.results.length * 150);
        if((window.innerWidth - xx > x) ){
            x = (window.innerWidth - xx) - 60;
        }
        setScrollX(x);
    }

    return(
        <div className="movieRow">
           <h2>{title}</h2> 
               <div className="movieRow-left" onClick={handleLeftArrow} >
                   <NavigateBeforeIcon style={{fontSize: 50}} />
               </div>
                <div className="movieRow-right" onClick={handleRightArrow}>
                    <NavigateNextIcon style={{fontSize: 50}} />
                </div>
           <div className="movieRow-listarea" style ={{
               marginLeft: scrollX,
               width: (itens.results.length * 150),
           }}>
               <div className="movieRow-list">
                   {itens.results.length > 0 && itens.results.map((item, key) => (
                       <div key={key} className="movieRow-item"> 

                           <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}  />
                       </div>
                    ))}
                </div>
           </div>
        </div>
    )
}
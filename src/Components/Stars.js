import React, { useEffect } from 'react';
import "./styles/stars.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';

function Stars(props) {
    const numberOfStars = [];
    const[clickedStars, setClickedStars] = useState([]);
    const[para, setPara] = useState("");

    for(let i = 1; i <= (props.noOfStars ? props.noOfStars : 5); i++) {
        numberOfStars.push(i);
    }
    
    useEffect(() => {
        if(clickedStars.length === 1) {
            setPara("Very Poor");
        } else if(clickedStars.length === 2) {
            setPara("Poor");
        } else if(clickedStars.length === 3) {
            setPara("Average");
        } else if(clickedStars.length === 4) {
            setPara("Good");
        } else if(clickedStars.length === 5) {
            setPara("Very Good");
        } else {
            setPara("");
        }
    }, [clickedStars])

    function handleClick(e) {
        if(clickedStars.length >= 1 && (clickedStars.indexOf(e.currentTarget.id) in clickedStars)) {
            setClickedStars([]);
            return;
        }
        setClickedStars([]);
        const id = e.currentTarget.id;
        for(let i = 1; i <= id; i++) {
            setClickedStars((prev) => {
                return [...prev, id];
            });
        }
    }

    return(
        <div className='stars'>
            {numberOfStars.map((val) => {
                if((val - 1) in clickedStars) {
                    return(
                        <div className='stars__clickable' id={val} onClick={handleClick}>
                            <StarIcon key={val} sx={{height: props.size, width: props.size, color: props.clickColor}} />
                        </div>
                    );
                } else {
                    return (
                        <div className='stars__clickable' id={val} onClick={handleClick}>
                            <StarBorderIcon key={val} sx={{height: props.size, width: props.size, color: props.color}}/>
                        </div>
                    );
                }
            })}
            <p style={{color: props.textColor, fontSize: props.fontSize}}>{(props.text) && para}</p>
        </div>
    );
}

export default Stars;


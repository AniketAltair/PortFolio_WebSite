import React, { useEffect, useState } from 'react'
import { GET_SCREEN_INDEX, TOTAL_SCREENS } from '../../../utilities/commonUtils';
import ScrollService from '../../../utilities/ScrollService';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import './Header.css'

export default function Header() {

    const[selectedScreen,setSelectedScreen] = useState(0);
    const[showHeaderOptions,setShowHeaderOptions] = useState(false);

    const updateCurrentScreen = (currentScreen) =>{
        if(!currentScreen || !currentScreen.screenInView)
            return;
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
        if(screenIndex<0)
            return;
    }

    let currentScreenSubscription = ScrollService.currScreenBroadCaster.subscribe(updateCurrentScreen);

    const getHeaderOptions = () =>{
        return(
            TOTAL_SCREENS.map((screen,i)=>(
                <div key={screen.screen_name} className={getHeaderOptionsClass(i)}
                onClick={()=>switchScreen(i,screen)}>
                    <span>{screen.screen_name}</span>
                </div>
            ))
        )
    }

    const getHeaderOptionsClass = (index) => {
        let classes = "header-option ";
        if(index<(TOTAL_SCREENS.length-1)){
            classes+="header-option-seperator "
        }
        if(selectedScreen===index){
            classes+="selected-header-option ";
        }
        return classes;
    }

    const switchScreen = (index,screen) =>{
        console.log("inside switch screen");
        let screenComponent = document.getElementById(screen.screen_name);
        if(!screenComponent){
            setSelectedScreen(0);
            return;
        }

        screenComponent.scrollIntoView({behavior:"smooth"});
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    }

    useEffect(()=>{
        console.log("selectedScreen "+selectedScreen);
    },[selectedScreen]);

    return (
        <div>
            <div className='header-container' onClick={()=>setShowHeaderOptions(!showHeaderOptions)}>
                <div className='header-parent'>
                    <div className='header-hamburger' onClick={()=>setShowHeaderOptions(!showHeaderOptions)}>
                        <FontAwesomeIcon className='header-hamburger-bars' icon={faBars}/>
                    </div>
                    <div className='header-logo'>
                        <span>ANIKET~</span>
                    </div>
                    <div className={(showHeaderOptions?"header-options show-hamburger-options":"header-options")}>
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>

        </div>
    )
}

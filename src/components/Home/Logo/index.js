import './index.scss'
import LogoS from '../../../assets/images/lgg.png';
import { useEffect, useRef } from 'react';
import DrawSvgPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';
const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const outlineLogoRef2 = useRef();
    const outlineLogoRef3 = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSvgPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1
        })
        .from(outlineLogoRef2.current, {
            drawSVG:0,
            duration:1.5,
        }).from(outlineLogoRef.current,{
            drawSVG:0,
            duration:1.5,
            delay:0,
        }).from(outlineLogoRef3.current,{
            drawSVG:0,
            duration:3,
        })

        gsap.fromTo(solidLogoRef.current,{
            opacity:0,
        }, {
            opacity:1,
            delay:6,
            duration:4,
        })
    },[])

    return(
        <div className="logo-container"  ref={bgRef}>
            <img ref={solidLogoRef} src={LogoS} alt="BK" className='solid-logo'/>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196.83 223.96">
            <g className='svg-container' transform='translate(0 0) scale(1 1)' fill='none' >
            <path ref={outlineLogoRef} class="cls-1" d="M592.53,420.82c0,1,0,2-.08,3H542.3a24.39,24.39,0,0,0-1.48-5.37c-4.94-12.49-18.77-15.62-33.44-15.62H459.24v21H407.82V362.85h110c43.71,0,73.54,13.88,74.63,55.58C592.51,419.21,592.53,420,592.53,420.82Z" transform="translate(-407.32 -362.35)"/>
            <path ref={outlineLogoRef2} class="cls-1" d="M603.63,520.11c0,1.83-.14,3.61-.33,5.35-4,42.19-42.2,60.35-82.15,60.35H407.82v-65.7h51.42v25.75h55c16.75,0,32.14-4.61,36.65-20.4a32.27,32.27,0,0,0,1.06-5.35Z" transform="translate(-407.32 -362.35)"/>
            <path ref={outlineLogoRef3} class="cls-1 lastlogo" d="M603,512.85H551.67a36.61,36.61,0,0,0-1.69-6.64c-4.92-13.48-17.6-19.11-34.73-19.11h-56v25.75H407.82V431.06h51.42v21h52.07c13.39,0,24-4.38,28.73-14.37a27.07,27.07,0,0,0,2.12-6.64h48.48a8.31,8.31,0,0,1-.27.9,41.45,41.45,0,0,1-2,5.74c-4.9,11.46-14.16,20-27.57,26.47,22.81,6.48,36.38,21.57,41.07,42C602.33,508.35,602.72,510.58,603,512.85Z" transform="translate(-407.32 -362.35)"/>
            </g>
            </svg>
        </div>
    )
}

export default Logo;



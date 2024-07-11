import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function App() {

    return (
        <div>
            <video autoPlay muted playsInline loop>
                <source src="dog.mp4" />
            </video>
            <div className="absolute z-10 ml-[1%] mt-[9.5%] font-windows-terminal text-7xl text-white">
                <SocialMedia />
                <Faq />
            </div>
            <video autoPlay muted playsInline loop>
                <source src="terminal.mov" />
            </video>
            <video autoPlay muted playsInline loop>
                <source src="dog-on-pc.mov" />
            </video>
        </div>
    )
}


const typingSpeed = 30

function Faq() {
    return (

        <TypeAnimation
            sequence={[
                250,
                "C:\>FAQ\n", 700,
                "C:\>FAQ\n" + ">he has no friends\n", 700,
                "C:\>FAQ\n" + ">he has no friends\n" + ">he has no personal life\n", 700,
                "C:\>FAQ\n" + ">he has no friends\n" + ">he has no personal life\n" + ">he gambles on pumpfun 24/7\n", 800,
                "C:\>FAQ\n" + ">he has no friends\n" + ">he has no personal life\n" + ">he gambles on pumpfun 24/7\n" + ">he is just like you, anon",

            ]}
            wrapper="span"
            speed={typingSpeed}
            style={{ whiteSpace: 'pre-line', }}
            repeat={0}
        />
    )
}

function SocialMedia() {

    // let [text, setText] = useState('C:>doomer_dog\n')

    return (
        <>
            <TypeAnimation
                sequence={[
                    "C:>doomer_dog", (thiz) => showCursorAnimation(thiz, false)
                    //        (()=> {text += '>telegram\n'}),
                    // text , 500,
                    // 'C:>doomer_dog\n' + '>pumpfun\n' + '>telegram\n' + '>twitter', 1500, 
                    // 'C:>doomer_dog\n' + '>pumpfun\n' + '>telegram\n' + '>X', 
                    // 'C:>doomer_dog\n' + '>pumpfun\n' + '>telegram\n' + '>X\n\n',
                    // 'C:>doomer_dog\n' + '>pumpfun\n' + '>telegram\n' + '>X\n\n',
                    // C:\>FAQ
                    // >he has no friend
                    // >he has no personal life
                    // >he gambles on pumpfun 24/7
                    // >he is just like you, anon
                    //
                    // whiteSpace: 'pre-line',
                ]}
                wrapper="span"
                speed={typingSpeed}
                style={{ display: 'flex', flexDirection: "column" }}
                repeat={0}
            />
        </>
    )
}


const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

function showCursorAnimation(ref, isShown) {
    if (!ref.current) {
        return;
    }

    console.log("hell")
    const el = ref.current;
    if (isShown) {
        el.classList.add(CURSOR_CLASS_NAME);
    } else {
        el.classList.remove(CURSOR_CLASS_NAME);
    }
};

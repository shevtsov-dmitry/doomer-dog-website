import { TypeAnimation } from 'react-type-animation'

export default function App() {

    return (
        <div className='bg-black'>
            <video autoPlay muted playsInline loop>
                <source src="dog.mp4" />
            </video>
            <div className="absolute z-10 ml-[1%] mt-[9.5%] font-windows-terminal text-7xl text-white gap-12">
                <SocialMedia />
                <br />
                <Faq />
            </div>
            <video autoPlay muted playsInline loop>
                <source src="terminal.mp4" />
            </video>
            <video autoPlay muted playsInline loop>
                <source src="dog-on-pc.mp4" />
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

    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

    return (
        <div className=''>
            <Media name="C:\>doomer_dog" wait="0" />
            <Media name="pump.fun" wait="1" />
            <Media name="telegram" wait="2" />
            <Media name="twitter" wait="3" />
        </div>
    )

    function Media(props) {
        const waitChuck = 800
        if (props.name === "twitter") {
            return <TypeAnimation
                sequence={[
                    parseInt(props.wait) * waitChuck,
                    '>' + props.name, 2300, '>X'
                ]}
                className={CURSOR_CLASS_NAME}
                cursor={false}
                wrapper="div"
                speed={typingSpeed}
                repeat={0}
            />
        }
        return <TypeAnimation
            sequence={[
                parseInt(props.wait) * waitChuck,
                '>' + props.name
            ]}
            className={CURSOR_CLASS_NAME}
            cursor={false}
            wrapper="div"
            speed={typingSpeed}
            repeat={0}
        />
    }
}


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

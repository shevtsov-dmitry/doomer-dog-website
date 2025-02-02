import { TypeAnimation } from 'react-type-animation'
import { useRef, useState, useEffect } from 'react'

export default function App() {

    const [isScrolledDown, setIsScrolledDown] = useState(false)
    const [isSocialMediaFinished, setIsSocialMediaFinished] = useState(false)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        setIsMobile(isMobile);
    }, []);

    useEffect(() => {
        function handleScroll() {
            if (isScrolledDown) {
                return
            }
            setTimeout(() => {
                setIsScrolledDown(true)
                setIsSocialMediaFinished(true)
            }, 1000)
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='bg-black'>
            <video autoPlay muted playsInline loop>
                <source src="dog.mp4" />
            </video>
            <div className="absolute z-10 ml-[1%] mt-[9.5%] font-windows-terminal text-7xl text-white gap-12 max-laptop:text-4xl max-[1113px]:text-xs">
                {(isMobile || isScrolledDown) && <SocialMedia />}
                <br />
                {(isMobile || isSocialMediaFinished) && <Faq />}
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
    // const componentRef = useRef(null);
    // const isVisible = useIntersectionObserver(componentRef);


    return (
        <TypeAnimation
            sequence={[
                250,
                "C:\>FAQ\n", 700,
                "C:\>FAQ\n" + ">he has no friends\n", 700,
                "C:\>FAQ\n" + ">he has no friends\n" + ">he has no personal life\n", 700,
                "C:\>FAQ\n" + ">he has no friends\n" + ">he has no personal life\n" + ">he gambles on pumpfun 24/7\n", 300,
                "C:\>FAQ\n" + ">he has no friends\n" + ">he has no personal life\n" + ">he gambles on pump.fun 24/7\n", 800,
                "C:\>FAQ\n" + ">he has no friends\n" + ">he has no personal life\n" + ">he gambles on pump.fun 24/7\n" + ">he is just like you, anon",

            ]}
            wrapper="span"
            speed={typingSpeed}
            style={{ whiteSpace: 'pre-line', }}
            repeat={0}
        />
    )
}


function SocialMedia() {
    const SERVER_URL = "https://corvette-sol.xyz:8080"

    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
    const linkStyle = 'hover:cursor-pointer hover:text-red-600'

    const [urls, setUrls] = useState({
        twitter: "https://twitter.com",
        telegram: "https://web.telegram.com",
        pumpfun: "https://pump.fun",
    })

    useEffect(() => {
        async function getUrls() {
            const req = await fetch(SERVER_URL + "/urls/list")
            const urls = req.json()
            const prefix = "doomer_dog_"
            setUrls({
                twitter: urls[prefix + "twitter"],
                pumpfun: urls[prefix + "pumpfun"],
                telegram: urls[prefix + "telegram"],
            })
        }
        getUrls()
    }, [])

    return (
        // isSocialMediaFinished &&
        // <div ref={componentRef}>
        <>
            <Media name="C:\>doomer_dog" wait="0" />
            <a href={urls["pumpfun"]}>
                <u className={`${linkStyle}`}><Media name="pump.fun" wait="1" /></u >
            </a >
            <a href={urls["telegram"]}>
                <u className={`${linkStyle}`}><Media name="telegram" wait="2" /></u>
            </a >
            <a href={urls["twitter"]}>
                <u className={`${linkStyle}`}><Media name="twitter" wait="3" /></u>
            </a >
        </ >

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

    const el = ref.current;
    if (isShown) {
        el.classList.add(CURSOR_CLASS_NAME);
    } else {
        el.classList.remove(CURSOR_CLASS_NAME);
    }
};

function useIntersectionObserver(options) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
            },
            options
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [options]);

    return [elementRef, isVisible];
}


function App() {
    return (
        <div>
            <video autoPlay muted playsInline loop>
                <source src="dog.mp4" />
            </video>
            <div className="absolute ml-12 mt-48 font-windows-terminal text-2xl font-bold text-white z-10">
                <ul id="social-media">
                    <li>C:\&#10095;doomer_dog</li>
                    <li>&#10095;twitter</li>
                    <li>&#10095;telegram</li>
                    <li>&#10095;pumpfun</li>
                </ul>
                <ul id="faq">
                    <li>C:\&#10095;FAQ</li>
                    <li>&#10095;twitter</li>
                    <li>&#10095;telegram</li>
                    <li>&#10095;pumpfun</li>
                </ul>
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

export default App

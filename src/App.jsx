function App() {
    return (
        <div>
            <video autoPlay muted playsInline loop>
                <source src="dog.mp4" />
            </video>
            <div className="absolute z-10 ml-[5%] mt-[13%] font-windows-terminal text-5xl text-white">
                <ul id="social-media" className="mb-[8%] flex flex-col gap-2">
                    <li>C:\&gt;doomer_dog</li>
                    <li>&gt;twitter</li>
                    <li>&gt;telegram</li>
                    <li>&gt;pumpfun</li>
                </ul>
                <ul id="faq">
                    <li>C:\&gt;FAQ</li>
                    <li>&gt;he has no friend</li>
                    <li>&gt;he has no personal life</li>
                    <li>&gt;he gambles on pumpfun 24/7</li>
                    <li>&gt;he is just like you, anon</li>
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

import Next from "/assets/next.svg";
import Prev from "/assets/previous.svg";
import Play from "/assets/play-circle.svg";

const Navbar = () => {
    return (
        <footer className="flex flex-col h-[10vh]">
            <div className="flex flex-row p-5">
                <p className="text-white px-5">../..</p>
                <input className="rounded w-full bg-transparent" type="range" step="any"/>
                <p className="text-white px-5">../..</p>
            </div>

            <div className="relative flex flex-row pb-5 mx-auto">
                <button onClick={() => console.log("Previous Song")}>
                    <img src={Prev} alt="Previous Song" className="size-12"/>
                </button>
                <button onClick={() => console.log("Play")}>
                    <img src={Play} alt="Play Song" className="size-12"/>
                </button>
                <button onClick={() => console.log("Next Song")}>
                    <img src={Next} alt="Next Song" className="size-12"/>
                </button>
            </div>
        </footer>
    )
}

export default Navbar;
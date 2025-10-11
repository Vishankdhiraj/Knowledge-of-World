import './main.css'
import { useRef } from 'react'

export default function Home() {
    const exploreRef = useRef(null)

    const handleScroll = () => {
        if (exploreRef.current) {
            exploreRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <>
            <div className="home">
                <h1 className='vk'>Welcome to the </h1>
                <h1 className='dk'>Knowledge of World</h1>
                <p className='pk'>
                    Travel opens the door to creating <br /> memories all around the world
                </p>
                <img src="/image/map2.jpg" alt="map" className='map' />
                <button className='scrollbtn' onClick={handleScroll}>
                    Explore
                </button>
            </div>

            <div ref={exploreRef} className="down">
                <h2>Explore The World's iconic places</h2>
            </div>
        </>
    )
}

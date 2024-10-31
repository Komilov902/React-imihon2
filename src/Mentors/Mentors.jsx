import React from 'react';
import './mentors.css';
import men from '../img/javohir.jpg'
import man from '../img/python.jpg'

const Marquee = () => {
    const pauseMarquee = (e) => {
        const marquee = e.currentTarget.closest('marquee');
        marquee.stop();
    };

    const resumeMarquee = (e) => {
        const marquee = e.currentTarget.closest('marquee');
        marquee.start();
    };

    return (
        <div className="marquee-container">
            <h2>Our Mentors</h2>
            <marquee behavior="scroll" direction="left">
                <div className="marquee-content">
                    <div className="mentor" onMouseOver={pauseMarquee} onMouseOut={resumeMarquee}>
                        <img src={men} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Фронтенд</p> Javohir <br /> Yusupov</div>
                    </div>
                    <div className="mentor" onMouseOver={pauseMarquee} onMouseOut={resumeMarquee}>
                        <img src={man} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Backend</p> Bekmuhammad <br /> Mamadiyev</div>
                    </div>
                    <div className="mentor" onMouseOver={pauseMarquee} onMouseOut={resumeMarquee}>
                        <img src={men} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Фронтенд</p> Javohir <br /> Yusupov</div>
                    </div>
                    <div className="mentor" onMouseOver={pauseMarquee} onMouseOut={resumeMarquee}>
                        <img src={man} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Backend</p> Bekmuhammad <br /> Mamadiyev</div>
                    </div>
                    <div className="mentor" onMouseOver={pauseMarquee} onMouseOut={resumeMarquee}>
                        <img src={men} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Фронтенд</p> Javohir <br /> Yusupov</div>
                    </div>
                    <div className="mentor" onMouseOver={pauseMarquee} onMouseOut={resumeMarquee}>
                        <img src={man} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Backend</p> Bekmuhammad <br /> Mamadiyev</div>
                    </div>
                    <div className="mentor" onMouseOver={pauseMarquee} onMouseOut={resumeMarquee}>
                        <img src={men} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Фронтенд</p> Javohir <br /> Yusupov</div>
                    </div>
                    <div className="mentor" onMouseOver={pauseMarquee} onMouseOut={resumeMarquee}>
                        <img src={man} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Backend</p> Bekmuhammad <br /> Mamadiyev</div>
                    </div>
                    <div className="mentor" onMouseOver={pauseMarquee} onMouseOut={resumeMarquee}>
                        <img src={men} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Фронтенд</p> Javohir <br /> Yusupov</div>
                    </div>
                    <div className="mentor" onMouseOver={pauseMarquee} onMouseOut={resumeMarquee}>
                        <img src={man} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Backend</p> Bekmuhammad <br /> Mamadiyev</div>
                    </div>
                    <div className="mentor" onMouseOver={pauseMarquee} onMouseOut={resumeMarquee}>
                        <img src={men} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Фронтенд</p> Javohir <br /> Yusupov</div>
                    </div>
                    <div className="mentor" onMouseOver={pauseMarquee} onMouseOut={resumeMarquee}>
                        <img src={man} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Backend</p> Bekmuhammad <br /> Mamadiyev</div>
                    </div>  
                    <div className="mentor" onMouseOver={pauseMarquee} onMouseOut={resumeMarquee}>
                        <img src={men} alt="Mentor" />
                        <div className="overlay"></div>
                        <div className="mentor-text"><p style={{color: 'orange'}}>Фронтенд</p> Javohir <br /> Yusupov</div>
                    </div>
                </div>
            </marquee>
        </div>
    );
};

export default Marquee;

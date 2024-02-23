import React, {useState} from 'react';
import Slider from './Slider.jsx'
import carp from '../assets/carp.jpeg'
import teach from '../assets/teach.jpeg'
import art from '../assets/art.jpeg'
import music from '../assets/music.jpeg'
import design from '../assets/design.jpeg'
import finance from '../assets/finance.webp'
import programming from '../assets/programming.png'
import {useNavigate} from 'react-router-dom'


function Slides(){
    const navigate = useNavigate();

    const handleButtonArt = () => {
      // Navigate to the desired route
      navigate('/art');
    };
    const handleButtonCarp = () => {
      // Navigate to the desired route
      navigate('/carpentry');
    };
    const handleButtonFinance = () => {
      // Navigate to the desired route
      navigate('/finance');
    };
    const handleButtonMusic = () => {
      // Navigate to the desired route
      navigate('/music');
    };
    const handleButtonProgram = () => {
      // Navigate to the desired route
      navigate('/programmer');
    };
    const handleButtonLearn = () => {
      // Navigate to the desired route
      navigate('/learn');
    };
    const handleButtonDesign = () => {
      // Navigate to the desired route
      navigate('/design');
    };

    const [slides, newSlide] = useState(0);
    const slide = [
        <Slider 
            img={carp}
            author="JOSHUA GOOLD"
            title="QUEST"
            category="CARPENTRY"
            description="Quest 
            Carpentry, or woodworking, is a skilled craft that transforms 
            wood into functional and artistic pieces. This timeless practice 
            merges creativity and precision, resulting in handmade masterpieces 
            that reflect dedication and attention to detail. Beyond creating 
            beautiful objects, carpentry offers a fulfilling outlet for self-expression
            and a sense of accomplishment. Embracing woodworking is not just about crafting 
            with wood; it's a journey of creativity, self-discovery, and the satisfaction 
            of bringing your visions to life."
                     lclick={handleSlideLeft} 
                    rclick={handleSlideRight}
                    nav={handleButtonCarp}/>,
        <Slider
            img={teach}
            author="JOSHUA GOOLD"
            title="QUEST"
            category="Teach"
            description="Quest Teach is a transformative journey that goes beyond the 
            classroom walls. It's the art of inspiring minds, fostering curiosity, and
             shaping futures. As educators, we hold the key to unlocking the vast 
             potential within each student. It's not just about imparting knowledge; 
             it's about igniting a lifelong love for learning. Every lesson is a chance
             to mold resilient thinkers, compassionate leaders, and creative problem solvers.
             Teaching isn't a job; it's a calling—a profound opportunity to make a lasting
             impact on the world by empowering the next generation. Join the ranks of those
             who don't just teach subjects but inspire dreams and cultivate the seeds of 
             greatness within every student. Embrace the journey, and together, let's build
             a brighter future through education." 
             lclick={handleSlideLeft} 
             rclick={handleSlideRight}
             nav={handleButtonLearn}/>, 

             <Slider
            img={art}
            author="JOSHUA GOOLD"
            title="QUEST"
            category="ART"
            description="Quest Art is more than strokes on canvas; it's the language of the soul,
            a universal expression that transcends boundaries. It's the power to evoke emotions, 
            challenge perspectives, and ignite creativity. Embrace the canvas of your imagination, 
            for in every brushstroke lies the potential to transform, inspire, and make a profound impact. 
            Art invites you to step into a world where your unique voice matters, where imagination knows 
            no bounds. So, pick up the brush, mold the clay, or dance with colors. Let art be your vessel 
            for self-discovery, a journey that not only enriches your life but has the power to shape a 
            world filled with beauty and meaning. Seize the palette of possibilities, and let your creativity 
            paint a vibrant and compelling narrative." 
             lclick={handleSlideLeft} 
             rclick={handleSlideRight}
             nav={handleButtonArt}/>,
             <Slider
            img={music}
            author="JOSHUA GOOLD"
            title="QUEST"
            category="MUSIC"
            description=" Quest Music, the universal language that speaks to the heart and soul. Beyond mere notes and melodies, 
            it is a transformative force that has the power to heal, inspire, and connect. Imagine a world where 
            every rhythm, every beat, and every lyric becomes your personal soundtrack, guiding you through life's 
            highs and lows. Embrace the symphony of possibilities, let the music be your refuge, and dance to the rhythm 
            of your own journey. Whether you're a listener, a creator, or both, music invites you to a realm of boundless 
            creativity and emotional resonance. So, tune in, let the melodies unfold, and unlock the extraordinary tapestry 
            of experiences that music weaves. Let the music be your compass, guiding you to a life filled with harmony and meaning." 
             lclick={handleSlideLeft} 
             rclick={handleSlideRight}
             nav={handleButtonMusic}/>,
             <Slider
            img={design}
            author="JOSHUA GOOLD"
            title="QUEST"
            category="DESIGN"
            description="Quest Design is the art of crafting purpose and beauty into the fabric of everyday life. It's not just about 
            aesthetics; it's about creating solutions that seamlessly integrate into our world, enhancing functionality and 
            elevating experiences. Every line, color, and element serves a purpose, turning ordinary into extraordinary. Consider 
            this: in a world of chaos, design empowers us to organize, simplify, and innovate. It's the silent storyteller that 
            communicates ideas, emotions, and aspirations. Embrace the power of design, for it is the conduit between imagination 
            and reality, a force that shapes the way we perceive and interact with the world. Dive into the realm of design, where 
            innovation meets elegance, and let your ideas transform into tangible, impactful creations. Design is not just an 
            aesthetic choice; it's a catalyst for a better, more intelligently crafted world." 
             lclick={handleSlideLeft} 
             rclick={handleSlideRight}
             nav={handleButtonDesign}/>,
             <Slider
            img={finance}
            author="JOSHUA GOOLD"
            title="QUEST"
            category="FINANCE"
            description=" Quest Finance is the engine that propels dreams into reality. It goes beyond numbers and transactions; it's 
            the strategic navigator guiding individuals and businesses toward success. Picture this: every dollar saved, invested, 
            or strategically spent is a building block for a prosperous future. Finance is the cornerstone of empowerment, 
            providing the tools to turn aspirations into achievements. By understanding the language of money, one gains control 
            over their destiny. It's not just about accumulating wealth; it's about securing freedom, enabling choices, and 
            building a life of abundance. Embrace the world of finance, where every financial decision becomes a step closer 
            to the life you envision. Let your money work for you, unlocking doors to possibilities you may have never imagined. 
            Finance is not just about making cents; it's about making sense of a future brimming with possibilities." 
             lclick={handleSlideLeft} 
             rclick={handleSlideRight}
             nav={handleButtonFinance}/>,
             <Slider
            img={programming}
            author="JOSHUA GOOLD"
            title="QUEST"
            category="PROGRAMMING"
            description="Quest Programming is the wizardry of the digital age, empowering you to conjure solutions from the realms 
            of imagination. It's more than just coding; it's sculpting the future with keystrokes. Every line of code is a brushstroke, 
            crafting the canvas of innovation. Don't be intimidated; be inspired. Programming is the language of endless possibilities, 
            where your creativity is the source code. Dive into the world of algorithms and syntax, and you'll discover the enchantment 
            of bringing ideas to life. Embrace the power to create, automate, and revolutionize, for in the realm of programming, you're 
            not just a coder; you're a digital sorcerer sculpting reality with logic and precision."
             lclick={handleSlideLeft} 
             rclick={handleSlideRight}
             nav={handleButtonProgram}/>
            ];

            function handleSlideLeft(){
                newSlide(slides - 1);
                if (slides - 1 == -1){
                    newSlide(6)
                }
            }
            function handleSlideRight(){
                    newSlide(slides + 1);
                    if(slides + 1 == 7){
                        newSlide(0)
                    }
            }
    return(
        <div>
            {slide[slides]}               
        </div>
    );
}
export default Slides
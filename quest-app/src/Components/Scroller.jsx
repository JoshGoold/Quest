import React, { useEffect } from 'react';
import carp from '../assets/carp.jpeg'
import teach from '../assets/teach.jpeg'
import art from '../assets/art.jpeg'
import music from '../assets/music.jpeg'
import design from '../assets/design.jpeg'
import finance from '../assets/finance.webp'
import programming from '../assets/programming.png'

function Scroller() {
  const ScrollersComponent = () => {
    useEffect(() => {
      const scrollers = document.querySelectorAll(".scroller");
      addAnimation(scrollers);

      function addAnimation(scrollers) {
        scrollers.forEach((scroller) => {
          scroller.setAttribute("data-animated", true);

          const scrollerInner = scroller.querySelector(".scroller__inner");
          const scrollerContent = Array.from(scrollerInner.children);
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        });
      }
    }, []);

    return null; // React components must return a single root element
  };

  return (
    <>
    
    <body className="scrollerbody">
        <h1 className="scrolltitle">We Support all forms of Creativty</h1>
        <hr></hr>
      <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
          <li><img src={carp}></img></li>
          <li><img src={teach}></img></li>
          <li><img src={art}></img></li>
          <li><img src={music}></img></li>
          <li><img src={design}></img></li>
          <li><img src={finance}></img></li>
          <li><img src={programming}></img></li>
        </ul>
      </div>
      <hr></hr>
      <br></br>
      <p className="categories">Art  |  Carpentry  |  Design  |  Finance  |
                                Programming  |  Music  |  Teaching  |  Photography  | 
                                Scientists  | Engineer's | Physician's 
                                |  Nutritionist's |  Philospher's  |  Authors  |  Etc. <br></br></p>
                                <hr className="divider"></hr>
                                <p className="categoriestext">Here at Quest we encourage any and all skilled individuals from any field come together and form a 
                                community to build a brighter, innovative and passion driven future.
                                </p>
      <ScrollersComponent />
    </body>
    </>
  );
}

export default Scroller;

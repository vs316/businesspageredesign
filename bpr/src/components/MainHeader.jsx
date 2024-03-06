import { Link } from "react-router-dom";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";

const MainHeader = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(0);

  const imageUrls = useMemo(
    () => [
      require("../images/slide1.jpg"),
      require("../images/slide2.jpg"),
      // Add more image URLs if needed
    ],
    []
  );

  const imageOrder = useMemo(() => {
    const shuffledIndices = Array.from(
      { length: imageUrls.length },
      (_, i) => i
    );
    // Shuffle the indices to get a random order
    for (let i = shuffledIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledIndices[i], shuffledIndices[j]] = [
        shuffledIndices[j],
        shuffledIndices[i],
      ];
    }
    return shuffledIndices;
  }, [imageUrls]);

  const getNextIndex = useCallback(() => {
    const index = imageOrder[nextImageIndex];
    setNextImageIndex((nextImageIndex + 1) % imageUrls.length);
    return index;
  }, [imageOrder, imageUrls.length, nextImageIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = getNextIndex();
      setCurrentImageIndex(randomIndex);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(intervalId);
  }, [getNextIndex]);

  const containerRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <header className="main__header">
      <div className="main__header-image">
        <img src={imageUrls[currentImageIndex]} alt="banner" />
      </div>
      <br ref={containerRef} />
      <div className="container main__header-container">
        <div className="main__header-left">
          <h1>Helping Small Businesses Grow and Expand</h1>
          <p>
            We're all about helping you reach your next financial goal and loan
            help.
          </p>
          <h3>WE ARE OPEN:</h3>
          <p>Monday - Saturday : 9:30 AM to 18:30 PM</p>
          <Link to="/contact" className="btn lg">
            Book Appointments
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle">
            <div className="col-md-4 col-sm-6 col-xs-12 mb-sm-30">
              {/* Add your address content here */}
              <div className="icon-upper">
                <a
                  className="icon"
                  href="https://maps.app.goo.gl/W24vMmFrHTEhtqvD7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-location-dot" />
                </a>
              </div>

              <ul className="link-small">
                <li>
                  <div className="icon-lower-left">
                    <a
                      href="mailto:srivasagaenterprises12@gmail.com"
                      className="icon"
                    >
                      <i className="fa-solid fa-envelope"></i>{" "}
                    </a>
                  </div>
                  {/*<a href="mailto:ssventerprises015@gmail.com">
                    <i class="fa-regular fa-envelope"></i>
                  </a>*/}
                </li>
                <li>
                  <div className="icon-lower-right">
                    <a href="tel:+914448560424" className="icon">
                      <i className="fa-solid fa-phone"></i>
                    </a>
                    {/*<br />
                  <i className="fa-solid fa-mobile"></i>
                  <a href="tel:+91 98418 85702"></a> */}
                  </div>
                </li>
              </ul>
            </div>
            {/*<img src={AboutImage} alt="about" className="about-img" />*/}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;

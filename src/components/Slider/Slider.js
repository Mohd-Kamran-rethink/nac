import React from "react";

const Slider = () => {
  const sliderData = [
    {
      id: 1,
      heading1: "NAC brings you everything at one place",
      heading2: `Entertainment has a new definition1`,
      img: "./home2/slider/slider1.png",
    },
    {
      id: 2,
      heading1: "NAC brings you everything at one place",
      heading2: "Entertainment has a new definition1",
      img: "./home2/slider/slider2.png",
    },
    {
      id: 3,
      heading1: "NAC brings you everything at one place",
      heading2: "Entertainment has a new definition1",
      img: "./home2/slider/slider3.png",
    },
  ];
  return (
    <>
      <section className="slider">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* <!-- Indicators --> */}
          {/* <ol className="carousel-indicators">
		    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
		    <li data-target="#myCarousel" data-slide-to="1"></li>
		    <li data-target="#myCarousel" data-slide-to="2"></li>
		  </ol>  */}

          {/* Wrapper for slides  */}
          <div className="carousel-inner">
            {sliderData.map((item) => {
              return (
                <div key={item.id} className="item active">
                  <img src={item.img} alt="Los Angeles" />
                  <div className="carousel-caption">
                    <h5>{item.heading1}</h5>
                    <h1>{item.heading2}</h1>
                    <button>Get Started</button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <a className="left carousel-control" href="#myCarousel" data-slide="prev">
		    <span className="glyphicon glyphicon-chevron-left"></span>
		    <span className="sr-only">Previous</span>
		  </a>
		  <a className="right carousel-control" href="#myCarousel" data-slide="next">
		    <span className="glyphicon glyphicon-chevron-right"></span>
		    <span className="sr-only">Next</span>
		  </a>  */}
        </div>
      </section>
    </>
  );
};

export default Slider;

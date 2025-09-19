import React from "react";

const ServicesCard = () => {
  const businessServices = [
    {
      name: "Security Systems",
      description: "Advanced CCTV and surveillance solutions",
      image: "/images/security/1.jpg",
      link: "#services",
      left: 15,
      bottom: 75,
    },
    {
      name: "Audio Visual",
      description: "Professional sound and lighting systems",
      image: "/images/featured/audiovisual.jpg",
      link: "#services",
      left: 66,
      bottom: 77,
    },
    {
      name: "Server Infrastructure",
      description: "Data center and server rack solutions",
      image: "/images/IT/ilya-pavlov-OqtafYT5kTw-unsplash.jpg",
      link: "#services",
      left: 65,
      bottom: 45,
    },
    {
      name: "Access Control",
      description: "Secure entry and door control systems",
      image: "/images/security/2.jpg",
      link: "#services",
      left: 20,
      bottom: 35,
    },
    {
      name: "Wireless Solutions",
      description: "Enterprise WiFi and wireless access points",
      image: "/images/wireless/1.png",
      link: "#services",
      left: 40,
      bottom: 20,
    },
  ];

  const renderCard = (item) => {
    return (
      <div className="group-hover:opacity-100 group-hover:visible group-hover:-mt-12 flex opacity-0 invisible transition-all duration-300 ease-in-out flex-row rounded-lg shadow-lg bg-base-100 text-primary z-30 absolute cursor-pointer p-2 min-w-64 max-w-80 -ml-32 -mt-8 border border-base-300">
        <img className="w-24 h-24 object-cover rounded flex-shrink-0" src={item.image} alt={item.name} />
        <div className="flex flex-col justify-between p-2 flex-1 text-left">
          <div className="text-lg font-semibold leading-tight text-base-content text-left">{item.name}</div>
          <div className="text-sm text-base-content/70 my-1 leading-tight text-left">{item.description}</div>
          <a 
            className="btn btn-neutral btn-sm rounded-full font-garamond shadow-md no-underline inline-flex items-center justify-center self-start hover:scale-105 hover:shadow-lg hover:bg-primary hover:text-primary-content transition-all duration-200" 
            href={item.link}
          >
            learn more
          </a>
        </div>
      </div>
    );
  };

  const renderPins = () => {
    return businessServices.map((item, index) => {
      return (
        <div
          key={index}
          className="absolute group"
          style={{ left: `${item.left}%`, bottom: `${item.bottom}%` }}
        >
          <div className="bg-primary/90 text-primary-content text-sm w-6 h-6 z-20 absolute rounded-full cursor-pointer shadow-lg animate-pulse flex items-center justify-center font-medium border-2 border-primary-content/20 hover:bg-primary hover:text-primary-content hover:scale-110 transition-all duration-200">
            +
          </div>
          {renderCard(item)}
        </div>
      );
    });
  };

  const renderImage = () => {
    return (
      <div className="relative inline-block max-w-3xl">
        {renderPins()}
        <img
          className="opacity-100 max-w-full rounded-lg z-10"
          src="/images/featured/linesofbusiness.png"
          alt="Veritas Business Solutions"
        />
      </div>
    );
  };

  return (
    <div className="m-2 text-center">
      {renderImage()}
    </div>
  );
};

export default ServicesCard;

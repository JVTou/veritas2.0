import React from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";

const photos = [
  { src: "/images/electrical/image1.jpg", width: 4032, height: 3024 },
  { src: "/images/electrical/image2.jpg", width: 768, height: 1024 },
  { src: "/images/electrical/image3.jpg", width: 1200, height: 1600 },
  { src: "/images/electrical/image4.jpg", width: 1200, height: 1600 },
  { src: "/images/electrical/image5.jpg", width: 480, height: 640 },
  { src: "/images/electrical/image6.jpg", width: 480, height: 640 },
  { src: "/images/electrical/image7.jpg", width: 640, height: 480 },
  { src: "/images/electrical/image8.jpg", width: 480, height: 640 },
  { src: "/images/electrical/image9.jpg", width: 480, height: 640 },
  { src: "/images/electrical/image10.jpg", width: 480, height: 640 },
  { src: "/images/electrical/image11.jpg", width: 480, height: 640 },
  { src: "/images/electrical/image12.jpg", width: 480, height: 640 },
  { src: "/images/electrical/image13.jpg", width: 480, height: 640 },
  { src: "/images/electrical/image14.jpg", width: 480, height: 640 },
];
export default function ElectricalPhotoAlbum() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <h1
        id="projects"
        className="font-urbanist text-center text-2xl font-semibold md:text-5xl py-5"
      >
        Electrical Projects
      </h1>
      <MasonryPhotoAlbum
        photos={photos}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Thumbnails]}
      />
    </>
  );
}

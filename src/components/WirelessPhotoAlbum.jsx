import React from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";

const photos = [
  { src: "/images/wireless/1.png", width: 1567, height: 781 },
  { src: "/images/wireless/2.jpg", width: 1920, height: 2560 },
  { src: "/images/wireless/3.jpg", width: 1920, height: 3413 },
  { src: "/images/wireless/4.jpg", width: 1920, height: 1305 },
  { src: "/images/wireless/5.jpg", width: 1920, height: 2561 },
  { src: "/images/wireless/6.jpg", width: 1920, height: 1440 },
  { src: "/images/wireless/7.jpg", width: 1920, height: 2560 },
  { src: "/images/wireless/8.jpg", width: 3072, height: 4080 },
  { src: "/images/wireless/9.jpg", width: 3072, height: 4080 },
];

export default function WirelessPhotoAlbum() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <h1
        id="wireless-projects"
        className="font-garamond text-center text-2xl font-semibold md:text-5xl py-5"
      >
        Wireless Projects
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

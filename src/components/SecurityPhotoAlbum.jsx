import React from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";

const photos = [
  { src: "/images/security/1.jpg", width: 1920, height: 2560 },
  { src: "/images/security/2.jpg", width: 1920, height: 2560 },
  { src: "/images/security/3.jpg", width: 1920, height: 2560 },
  { src: "/images/security/4.jpg", width: 1920, height: 2560 },
  { src: "/images/security/5.jpg", width: 1920, height: 2560 },
  { src: "/images/security/6.jpg", width: 1920, height: 2560 },
  { src: "/images/security/7.jpg", width: 1920, height: 2560 },
  { src: "/images/security/8.jpg", width: 1920, height: 2560 },
  { src: "/images/security/9.jpg", width: 1920, height: 2560 },
  { src: "/images/security/data.jpg", width: 3072, height: 4080 },
  { src: "/images/security/data3.jpg", width: 3072, height: 4080 },
];

export default function SecurityPhotoAlbum() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <h1
        id="security-projects"
        className="font-garamond text-center text-2xl font-semibold md:text-5xl py-5"
      >
        Security Projects
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

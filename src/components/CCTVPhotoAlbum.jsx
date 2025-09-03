import React from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";

const photos = [
  { src: "/images/cctv/1.jpg", width: 1920, height: 2560 },
  { src: "/images/cctv/2.jpg", width: 1920, height: 3413 },
  { src: "/images/cctv/3.jpg", width: 1920, height: 2560 },
  { src: "/images/cctv/4.jpg", width: 1920, height: 3412 },
  { src: "/images/cctv/5.jpg", width: 1920, height: 2560 },
  { src: "/images/cctv/6.jpg", width: 1920, height: 2560 },
  { src: "/images/cctv/7.jpg", width: 1920, height: 2560 },
];

export default function CCTVPhotoAlbum() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <h1
        id="cctv-projects"
        className="font-garamond text-center text-2xl font-semibold md:text-5xl py-5"
      >
        CCTV Projects
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

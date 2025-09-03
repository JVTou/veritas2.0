import React from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";

const photos = [
  { src: "/images/IT/ilya-pavlov-OqtafYT5kTw-unsplash.jpg", width: 3543, height: 2365 },
  { src: "/images/IT/jainath-ponnala-9wWX_jwDHeM-unsplash.jpg", width: 6720, height: 4480 },
  { src: "/images/IT/markus-spiske-70Rir5vB96U-unsplash.jpg", width: 5760, height: 3840 },
  { src: "/images/IT/sammyayot254-knUZi7dzb58-unsplash.jpg", width: 2122, height: 2829 },
  { src: "/images/IT/sammyayot254-vIQDv6tUHYk-unsplash.jpg", width: 2828, height: 2122 },
  { src: "/images/IT/samuel-ramos-tYvZUVEve6s-unsplash.jpg", width: 6000, height: 4000 },
];

export default function ITPhotoAlbum() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <h1
        id="it-projects"
        className="font-garamond text-center text-2xl font-semibold md:text-5xl py-5"
      >
        IT Projects
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

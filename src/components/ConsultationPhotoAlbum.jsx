import React from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";

const photos = [
  { src: "/images/consultation/alvaro-reyes-qWwpHwip31M-unsplash.jpg", width: 5184, height: 3456 },
  { src: "/images/consultation/benjamin-child-GWe0dlVD9e0-unsplash.jpg", width: 5184, height: 3456 },
  { src: "/images/consultation/charlesdeluvio-Lks7vei-eAg-unsplash.jpg", width: 5418, height: 3612 },
  { src: "/images/consultation/consultation1.jpg", width: 7360, height: 4912 },
  { src: "/images/consultation/headway-5QgIuuBxKwM-unsplash.jpg", width: 5472, height: 3648 },
  { src: "/images/consultation/priscilla-du-preez-nNMBa7Y1Ymk-unsplash.jpg", width: 3407, height: 5111 },
  { src: "/images/consultation/sean-pollock-PhYq704ffdA-unsplash.jpg", width: 6000, height: 4000 },
];

export default function ConsultationPhotoAlbum() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <h1
        id="consultation-projects"
        className="font-garamond text-center text-2xl font-semibold md:text-5xl py-5"
      >
        Consultation Projects
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

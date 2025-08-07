import React from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";

const photos = [
  { src: "/images/painting/image1.jpg", width: 1200, height: 1600 },
  { src: "/images/painting/image2.jpg", width: 1600, height: 1200 },
  { src: "/images/painting/image3.jpg", width: 1536, height: 2048 },
  { src: "/images/painting/image4.jpg", width: 1200, height: 1600 },
  { src: "/images/painting/image5.jpg", width: 1500, height: 1125 },
  { src: "/images/painting/image6.jpg", width: 768, height: 1024 },
  { src: "/images/painting/image7.jpg", width: 2048, height: 1536 },
  { src: "/images/painting/image8.jpg", width: 900, height: 1200 },
  { src: "/images/painting/image9.jpg", width: 1530, height: 2040 },
  { src: "/images/painting/image10.jpg", width: 1531, height: 1148 },
  { src: "/images/painting/image11.jpg", width: 1024, height: 768 },
  { src: "/images/painting/image12.jpg", width: 480, height: 640 },
  { src: "/images/painting/image13.jpg", width: 768, height: 1024 },
  { src: "/images/painting/image14.jpg", width: 480, height: 640 },
  { src: "/images/painting/image15.jpg", width: 640, height: 480 },
  { src: "/images/painting/image16.jpg", width: 640, height: 480 },
  { src: "/images/painting/image17.jpg", width: 640, height: 480 },
  { src: "/images/painting/image18.jpg", width: 640, height: 480 },
  { src: "/images/painting/image19.jpg", width: 480, height: 640 },
  { src: "/images/painting/image20.jpg", width: 480, height: 640 },
  { src: "/images/painting/image21.jpg", width: 640, height: 480 },
  { src: "/images/painting/image22.jpg", width: 480, height: 640 },
  { src: "/images/painting/image23.jpg", width: 480, height: 640 },
  { src: "/images/painting/image24.jpg", width: 360, height: 480 },
  { src: "/images/painting/image25.jpg", width: 480, height: 640 },
  { src: "/images/painting/image26.jpg", width: 480, height: 640 },
  { src: "/images/painting/image27.jpg", width: 480, height: 640 },
  { src: "/images/painting/image28.jpg", width: 480, height: 640 },
  { src: "/images/painting/image29.jpg", width: 640, height: 480 },
  { src: "/images/painting/image30.jpg", width: 480, height: 640 },
  { src: "/images/painting/image31.jpg", width: 480, height: 640 },
  { src: "/images/painting/image32.jpg", width: 480, height: 640 },
  { src: "/images/painting/image33.jpg", width: 480, height: 640 },
];
export default function PaintingPhotoAlbum() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <h1 className="font-urbanist text-center text-2xl font-semibold md:text-5xl py-5">
        Painting Projects
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

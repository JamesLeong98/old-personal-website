import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./Photos";
import "./styles/PhotoGallery.css";

function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className={"main-content"}>
      <h3>{`<Gallery/>`}</h3>
      <p>A collection of photos from my meanderings</p>
      <Gallery photos={photos} onClick={openLightbox} targetRowHeight={300}/>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal allowFullscreen={false} onClose={closeLightbox}>
            <Carousel
              styles={{maxWidth: "80%", maxHeight: "80%"}}
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default PhotoGallery;
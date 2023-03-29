import { Modal } from "components/Modal/Modal";
import { ImageGalleryItemImage, ImageGalleryItemStyled } from './ImageGalleryItem.styled'
import { useEffect, useState } from "react";

export const ImageGalleryItem = ({ itemData }) => {
  const [showModal, setShowModal] = useState(false)

  const clickHandlerPreview = () => {
    setShowModal(true)
  }

  const clickHandlerBackdrop = () => {
    setShowModal(false)
  }

  const onEscapeClick = (e) => {
    if (e.code === 'Escape')
      setShowModal(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', onEscapeClick)
    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [showModal])


  const { webformatURL, largeImageURL } = itemData;
  return (
    <ImageGalleryItemStyled
      className="gallery-item"
      onClick={clickHandlerPreview}
    >
      <ImageGalleryItemImage src={webformatURL} alt="" />
      {showModal && (
        <Modal
          image={largeImageURL}
          onBackdropClick={clickHandlerBackdrop}
        />
      )}
    </ImageGalleryItemStyled>
  );
}
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryStyled } from "./ImageGallery.styled";

export const ImageGallery = ({gallery}) => {
    return (
        <ImageGalleryStyled>
            {gallery.map(item => <ImageGalleryItem itemData={item} key={item.id} />)}
        </ImageGalleryStyled>
    )
};

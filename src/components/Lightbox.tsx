import React from 'react';
import SimpleReactLightbox from "simple-react-lightbox";
import styled from 'styled-components';


// Max width - padding
const postWidth = 520 - 30;
const imagePerRow = 3;
const imageMargin = 3;
// const imageSize = 157;
const imageSize  = (postWidth - ((imageMargin * 2) * imagePerRow)) / 3;

const imageContainerSize = imageSize * imagePerRow + ((imageMargin * 2) * imagePerRow)

const StyledLightbox = styled.div`
.asdf {
    display: flex;
    flex-wrap: wrap;
    max-width: ${imageContainerSize}px;
    margin: 3rem 0;
}

.asdf img {
    width: ${imageSize}px;
    height: 150px;
    object-fit: cover;
    margin: 3px;
}
`;

const options = {
    overlayColor: "rgb(25, 136, 124)",
    captionStyle: {
        captionColor: "#a6cfa5",
        captionFontFamily: "Raleway, sans-serif",
        captionFontSize: "22px",
        captionFontWeight: "300",
        captionFontStyle: "capitalize"
    },
    buttonsStyle: {
        buttonsBackgroundColor: "#1b5245",
        buttonsIconColor: "rgba(126, 172, 139, 0.8)"
    },
    autoplaySpeed: 1500,
    transitionSpeed: 900,
    showCaption: true,
    showThumbnails: true
};

export const Lightbox: React.FC = ({ children }) => {
    return (
        <StyledLightbox>
            <SimpleReactLightbox {...options}>
            {children}
            </SimpleReactLightbox>
        </StyledLightbox>
    )
}

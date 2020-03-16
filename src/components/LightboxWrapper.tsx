import React from 'react';
import Simple from 'simple-react-lightbox';
// console.log(Simple);

let SRLWrapper;
if (typeof window !== 'undefined') {
    SRLWrapper = require("simple-react-lightbox").SRLWrapper;
    console.log(SRLWrapper);
}

export const LightboxWrapper: React.FC = ({ children }) => {
    if (typeof window !== 'undefined' && SRLWrapper) {
        return (
            <SRLWrapper className="asdf" options={{ showThumbnails: false, showCaption: false }}>
                {children}
            </SRLWrapper>
        )
    }

    return (
        <div className="generic-lightbox-wrapper">
            {children}
        </div>
    )
}

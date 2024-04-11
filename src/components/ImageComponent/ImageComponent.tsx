import { useState } from "react";

import UserIcon from "../../assets/icons/user-icon.svg";

interface ImageComponentTypes {
    srcImg: string;
}

const ImageComponent = ({ srcImg }: ImageComponentTypes) => {
    //STATES

    const [imgWithError, setImgWithError] = useState(false);

    return (
        <img
            src={srcImg ? (imgWithError ? UserIcon : srcImg) : UserIcon}
            alt="userPhoto"
            className="rounded-[100px] w-[100px]"
            onError={() => setImgWithError(true)}
        />
    );
};

export default ImageComponent;

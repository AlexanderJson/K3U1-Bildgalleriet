import { singleImg } from "./singleImg.js";

export const galleryContainer = (metadata = []) => 
{
    const figure = document.createElement('figure');
    figure.classList.add('gallery-grid');
    figure.setAttribute("aria-label", "Image gallery");

    metadata.forEach(element => {
        const imgEl = singleImg(element);
        figure.append(imgEl);
    });


    //figure.append(...els);
    return figure;
}
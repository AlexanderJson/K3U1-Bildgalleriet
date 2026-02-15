import { singleImg } from "./singleImg.js";

export const galleryContainer = (metadata = []) => 
{
    const div = document.createElement('div');
    div.classList.add('gallery-grid');

    metadata.forEach(element => {
        const imgEl = singleImg(element);
        div.append(imgEl);
    });


    //div.append(...els);
    return div;
}
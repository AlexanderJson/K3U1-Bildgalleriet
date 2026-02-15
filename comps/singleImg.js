
export const singleImg = (imgData) =>
{
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.classList.add("image-frame");
    img.src = imgData.src;
    img.alt = imgData.alt;
    div.append(img);
    return div;

}


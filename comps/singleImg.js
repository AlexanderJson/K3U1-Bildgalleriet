
export const singleImg = (metadata) =>
{
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.classList.add("image-frame");
    img.src = metadata.src;
    img.alt = metadata.alt;
    img.loading = "lazy";
    div.append(img);
    return div;

}


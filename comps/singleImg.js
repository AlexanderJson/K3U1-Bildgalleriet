
export const singleImg = (metadata) =>
{
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.classList.add("image-frame");
    img.src = metadata.src;
    img.alt = metadata.alt;
    img.loading = "lazy";
    img.decoding = "async";
    // accessibility since they are clickable 
    img.setAttribute("role", "button");
    img.setAttribute("tabindex", "0");
    img.setAttribute("aria-label", "Open larger image");

    img.addEventListener("click", () =>
    {
        img.classList.toggle("fullsize");

    })
    figure.append(img);
    return figure;

}


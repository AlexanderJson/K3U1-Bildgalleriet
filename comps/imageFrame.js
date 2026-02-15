export const imageFrame = (url) =>
{
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.id = "image-frame";
    img.src = url;
    div.append(img);
    return div;

}
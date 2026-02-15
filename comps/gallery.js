export const galleryContainer = (els = []) => 
{
    const div = document.createElement('div');
    div.classList.add('gallery-grid');
    div.append(...els);
    return div;
}
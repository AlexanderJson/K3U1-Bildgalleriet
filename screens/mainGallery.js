
import { galleryContainer } from "../comps/gallery.js";

export const mainGallery = async (service) =>
{
    const div = document.createElement('div');
    
    const searchBar = document.createElement('div');
    
    
    const data = service.getByTag("architecture");
    const gallery = galleryContainer(data);
    div.append(gallery);
    return div;
}
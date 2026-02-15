import { singleImg } from "./comps/singleImg.js"
import { galleryContainer } from "./comps/gallery.js";
import { imageService } from "./data/api/imageService.js";
async function initApp()
{
    const appDiv = document.getElementById('app');
    const data = await imageService.getByTag("./data/images/imgData/images.json", "snow");
    
    const gallery = galleryContainer(data);
    appDiv.append(gallery);
    return appDiv;

}

initApp();
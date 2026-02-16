import { ImageService } from "../data/api/imageService.js";
import { mainGallery } from "./screens/mainGallery.js";
import {imageRepository} from "./data/api/ImageRepository.js"
import { header } from "./header/header.js";
import { footer } from "./header/footer.js";

const repo = new imageRepository("./data/images/imgData/images.json");
const imageService = new ImageService(repo);

async function initApp()
{

    header();
    footer();
    const appDiv = document.getElementById('app');
    
    try 
    {
        await imageService.init();
        const gallery = await mainGallery(imageService);
        appDiv.replaceChildren(gallery);


    } catch(error)
    {
        console.error("Failed to retrieve data", error);
    }
    
    return appDiv;

}

initApp();
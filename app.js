import { ImageService } from "../data/api/imageService.js";
import { mainGallery } from "./screens/mainGallery.js";
import {imageRepository} from "./data/api/ImageRepository.js"
import { header } from "./header/header.js";
import { footer } from "./header/footer.js";
import { menu } from "./header/nav.js";

const repo = new imageRepository("./data/images/imgData/images.json");
const imageService = new ImageService(repo);

async function initApp()
{
    await imageService.init();

    header();
    footer();
    const nav = menu();
    const appDiv = document.getElementById('app');
    const gallery = await mainGallery(imageService);
    appDiv.append(nav,gallery);
    return appDiv;

}

initApp();
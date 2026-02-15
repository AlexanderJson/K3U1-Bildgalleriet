import { singleImg } from "./comps/singleImg.js"
import { fetchApi } from "./data/api/apiFetch.js";


async function initApp()
{
    const appDiv = document.getElementById('app');
    const data = await fetchApi("./data/images/imgData/images.json");

    data.images.forEach(element => {
        const imgEl = singleImg(element);
        appDiv.append(imgEl);
    });
    return appDiv;

}

initApp();
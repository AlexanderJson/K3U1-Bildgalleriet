import { imageFrame } from "./comps/imageFrame.js";
import { galleryContainer } from "./comps/gallery.js"; 
function initApp()
{
    const appDiv = document.getElementById('app');
    const ap = './data/images/cat1/alexandra-Ao_aHzy6IC8-unsplash.jpg';
    const bp = './data/images/cat2/aldebaran-s-uXchDIKs4qI-unsplash.jpg';
    const cp = './data/images/cat3/anastasiia-buchinskaia-GLbsWvBQk_8-unsplash.jpg';
    const dp = './data/images/cat4/aaron-burden-6csuZQ9oZcI-unsplash.jpg';

    const a = imageFrame(ap);    
    const b = imageFrame(bp);    
    const c = imageFrame(cp); 
    const d = imageFrame(dp);    

    const gallery = galleryContainer([a,b,c,d])

    appDiv.append(gallery);
    return appDiv;

}

initApp();
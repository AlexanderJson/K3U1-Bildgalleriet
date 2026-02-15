
import { galleryContainer } from "../comps/gallery.js";



export const mainGallery = async (service) =>
{
    const div = document.createElement('div');
    let currentResult = service.getByTag("banner"); //todo remove hardcode

    const galleryDiv = document.createElement('div');
    const gallery = galleryContainer(currentResult);
    galleryDiv.append(gallery);
    const searchBar = document.createElement('div');
    searchBar.classList.add('search-bar');
    const input = document.createElement('input');
    input.type = "text";
    input.classList.add('search-input');
    input.placeholder = "Search by tags..";

    const searchBtn = document.createElement('button');
    searchBtn.innerText = "Search";
    searchBtn.classList.add('search-btn');
    searchBar.append(input,searchBtn);    

    const render = (data) => 
    {
        galleryDiv.innerHTML = '';
        galleryDiv.append(galleryContainer(data));
    }


    const handleSearch = () => 
    {
        const query = input.value.trim();
        if(!query) return;
        currentResult = query ? service.getByTag(query) : service.getTrending();
        render(currentResult);
    }



    searchBtn.addEventListener("click", handleSearch);
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleSearch();
    });

    
    render(currentResult);
    div.append(searchBar,galleryDiv);
    return div;
}
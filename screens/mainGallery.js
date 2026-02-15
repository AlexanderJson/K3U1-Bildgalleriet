
import { galleryContainer } from "../comps/gallery.js";



export const mainGallery = async (service) =>
{
    const div = document.createElement('div');
    const data = service.getByTag("architecture");

    const galleryDiv = document.createElement('div');
    const gallery = galleryContainer(data);
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

    const handleSearch = () => 
    {
        const query = input.value.trim();
        if(!query) return;
        const newData = service.getByTag(query);
        galleryDiv.innerHTML = '';
        galleryDiv.append(searchBar,galleryContainer(newData));
    }

    searchBtn.addEventListener("click", handleSearch);
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleSearch();
    });

    
    
    div.append(searchBar,galleryDiv);
    return div;
}
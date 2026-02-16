
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
    input.setAttribute("aria-label", "Search images by tag");
    input.classList.add('search-input');
    input.placeholder = "Search by tags..";

    const searchBtn = document.createElement('button');
    searchBtn.innerText = "Search";
    searchBtn.classList.add('search-btn');
    searchBar.append(input,searchBtn);    
    searchBtn.setAttribute("aria-label", "Search");

    const chipCategories = ["nature", "space", "architecture", "bee"];
    const chipContainer = document.createElement('div');
    chipContainer.classList.add('chip-container');
    chipCategories.forEach(chip =>
        {
            const chipBtn = document.createElement('button');
            chipBtn.classList.add('chip-btn');
            chipBtn.innerText = chip;
            chipBtn.setAttribute("role", "button");
            chipBtn.setAttribute("aria-pressed", "false");
            chipBtn.addEventListener('click', () => 
            {
                currentResult = service.getByTag(chip);
                chipBtn.setAttribute("aria-pressed", "true");
                render(currentResult); 
            });
            chipContainer.append(chipBtn);
        });


    const render = (data) => 
    {
        galleryDiv.replaceChildren(galleryContainer(data));
    }


    const handleSearch = () => 
    {
        const query = input.value.trim();
        if(!query) return;
        currentResult = query ? service.getByTag(query) : service.getTrending();
        render(currentResult);
    }

    galleryDiv.addEventListener('click', (e) => {
        const img = e.target.closest('.image-frame');
            if (img) 
                {
                    img.classList.toggle("fullsize");
                    document.body.style.overflow = img.classList.contains('fullsize') ? 'hidden' : '';
                }
        });



    searchBtn.addEventListener("click", handleSearch);
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleSearch();
    });

    
    render(currentResult);
    div.append(searchBar,chipContainer,galleryDiv);
    return div;
}




export class ImageService 
{
    constructor(repo) {
        this.repo = repo;
        this.data = null; 
        this.categorizedData = new Map();
        this.initialized = null;

    }

    async init()
    {
        // Singleton, otherwise we will rerun all the filter logic over and over
        if(this.data) return this.data;
        if(this.initialized) return this.initialized;

        this.initialized = (async () =>
        {
            this.data = await this.repo.fetch();
            this.categorizedData = this.categorize(this.data.images);
            return this.data;
        })();
        return this.initialized;

    }



   


    /*
        I am using a reducer here to reorganise
        every key/value pair by tag words in a new list.
        This is mostly for optimizing data retrieval for user
        requests. 
        
        The reducer is a single pass function (it runs once to create all categories) that
        basically sums/reorders data. This is smart in a scenario
        like this project, where I have to display images based on categories. 
        Since we only have to run this once, store it and reuse the data, instead
        of performing lookups in the json data over and over. 

        The way it works is that it creates a container (accumulator),
        takes a list of objects (in this case). First it "looks" at each
        object in the data by key (for example tags), then checks if 
        the accumulator has created a list based on that key already, 
        if it hasn't, it creates a new empty list for that key and then
        pushes the object into that list. Otherwise same with existing list.
        So we could get "nature: img1,img3, food:img2"
        instead of "img1: tags:nature", "img2:tags:food", "img3:tags:nature"
       
    */
    categorize(images, key = 'tags')
    {
        return images.reduce((acc, img) =>
        {
            img[key]?.forEach(tag => 
                {
                    const normTag = tag.toLowerCase();
                    if(!acc.has(normTag)) acc.set(normTag,[])
                    acc.get(normTag).push(img);
                });
            return acc;
        }, new Map());
    }



    getLatestByAmount(tag,n)
    {
        const data = this.categorizedData.get(tag) || [];
        return data.slice(0,n);
    }

    getTrending()
    {
        return this.getLatestByAmount("trending", 10) || [];
    }

    getMonthlyBanner()
    {
        return this.getLatestByAmount("banner", 5) || [];
    }

    getByTag(tag)
    {
        return this.getLatestByAmount(tag, 10) || [];
    }




}
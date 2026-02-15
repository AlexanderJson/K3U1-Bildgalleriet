const URL = "./data/images/imgData/images.json";




export class ImageService 
{
    constructor(repo) {
        this.repo = repo;
    }

    async init()
    {
        const data = await this.repo.read();
        this.tagIndex = this.buildTagIndex(data);
    }


    filter(data,key,query)
    {
        if(!query) return data;
        
        return data.images
        .filter(img => img[key]?.includes(query))
        .map(img => img.url);
    }

    buildTagIndex(data)
    {
        return data.images.reduce((index,img) =>
        {
            img.tags?.forEach(tag => {
                index[tag] ??= [];
                index[tag].push(img);
            });
            return index;
        }, {});
    }

    async getByTag(tag)
    {
        return this.tagIndex?.[tag]  || [];
    }

    async getLatestByAmount(n)
    {
        return this.repo.read();
    }



}




/*
    filter(data,key,query)
    {
        if(!query) return data;
        
        return data.images.filter
            (
                img => img[key]?.includes(query)
            )
    }
*/

/*

export const imageService =
{
    read: async () => 
    {
        try
            {
                const resp = await fetch(URL);
                if(resp.ok) return await resp.json(); 
            }

        catch(e)
            {
                if(e.code === 'ENOENT') return null;
                throw new Error(`Error occured! Status: ${resp.status} Error: ${error}`);
            }
    },
        
    filter: (data,key,query) => 
        {
            try 
                {
                    if(!query) return data;
                    return data.images.filter(img =>
                        img[key]?.includes(query)
                    )
                }
            catch(e)
                {
                    if(e.code === 'ENOENT') return null;
                    throw e;
                }
        },
    
    
    fetchImages: async(key, query) =>
        {
            if(key == null && query == null)
            {
                return fetchApi.read(URL);
            }
            else
            {
                return getByTag(URL,tag, query);
            }

        },

    write: async(path) => {},
    delete: async(path) => {}
}
*/
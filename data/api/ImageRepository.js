export class imageRepository 
{
    constructor(url) 
    {
        this.url = url;
    }

    
    async fetch() 
        {
            try
                {
                    const resp = await fetch(this.url);
                    if(resp.ok) return await resp.json(); 
                }

            catch(e)
                {
                    if(e.code === 'ENOENT') return null;
                }
        }
    


}


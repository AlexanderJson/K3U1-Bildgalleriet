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
                    else
                        {
                        throw new Error(`Error fetching data: ${resp.status} `)
                        } 
                }

            catch(e)
                {
                    console.log(`Error occured: ${e}`);
                    throw e;
                }
        }
    


}


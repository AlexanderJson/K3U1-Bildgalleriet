export async function fetchApi(url)
{
    try
        {
            const resp = await fetch(url);
            if(resp.ok) return await resp.json(); 
        }
    catch(error)
    {
        throw new Error(`Error occured! Status: ${resp.status} Error: ${error}`);
    }
}
const fs = require('fs').promises;

export const jsonHelper =
{


    read: async (url) => 
    {
        try
            {
                const resp = await fetch(url);
                if(resp.ok) return await resp.json(); 
            }

        catch(e)
            {
                if(error.code === 'ENOENT') return null;
                throw new Error(`Error occured! Status: ${resp.status} Error: ${error}`);
            }
    },

    write: async (path, data) => 
    {
            try 
            {
                const jString = JSON.stringify(data, null, 2);
                await fs.writeFile(path, jString, 'utf8');
                console.log(`Data added to ${path}!`)
                return true;
            }
        catch(e)
            {
                if(error.code === 'ENOENT') 
                    {
                        return false;
                    };
            }
    },

    getSpecific: async (path,key) =>
    {
            try {
                const data = await fs.readFile(path, 'utf8');
                const found = JSON.parse(data);
                return found[key];
            }
        catch(e)
            {
                if(error.code === 'ENOENT') 
                    {
                        return null;
                    }
            }
    },
    delete: async(path) => 
    {
        try {
                await fs.unlink(path);
                return true;
            }
        catch(e)
            {
                if(error.code === 'ENOENT') return false;
                throw error;
            }
    }
};

module.exports = jsonHelper;
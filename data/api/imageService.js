import { jsonHelper } from "./json/jsonHelper.js"
const path = require('path');
const fs = require('fs').promises;



export const imageService =
{
    read: async(path) => {},
    readSpecific: async(path) => {},
    write: async(path) => {},
    delete: async(path) => {}
}


async function fetchFiles(dir)
{
    try
        {
            const files = await fs.readdir(dir);
            files.forEach(file => 
                {
                    console.log(file);
                }
            );
        }
    catch(e)
        {
            console.error("Couldn't scan!", e)
        }

}
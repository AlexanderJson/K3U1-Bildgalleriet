import { jsonHelper } from "../data/api/json/jsonHelper"
import { singleImg } from "../comps/singleImg"


export const mainGallery = () =>
{
    const path = "data/images/imgData";
    const fileName = "/images.json"
    const url = jsonHelper.read(path+fileName);
    const ia = singleImg();
}
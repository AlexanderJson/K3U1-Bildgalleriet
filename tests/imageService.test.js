
import { describe, test, expect, jest, beforeEach} from '@jest/globals';
import { ImageService } from "../data/api/imageService.js";


const mockData = 
{
    images: 
        [
            {
            "id": "29",
            "title": "Desert Shed",
            "alt": "A simple peach-colored wooden garage structure in a dry, sandy landscape",
            "tags": ["architecture", "minimalism", "desert", "sunlight"],
            "src": "data/images/cat1/dan-begel-pbfkmEL3QaU-unsplash.jpg"
            },
            {
            "id": "30",
            "title": "Shadowed Grandeur",
            "alt": "A dark, atmospheric view of stone pillars and a grand staircase leading toward light",
            "tags": ["architecture", "interior", "pillars", "cinematic"],
            "src": "data/images/cat1/peter-herrmann-1__n2B24HB8-unsplash.jpg"
            },
            {
            "id": "31",
            "title": "The Collector",
            "alt": "Macro shot of a honeybee with full pollen baskets landing on a small yellow wildflower",
            "tags": ["architecture", "minimalism", "desert", "sunlight"],
            "src": "data/images/cat1/ankith-choudhary-AbBZKCPzLQQ-unsplash.jpg"
            } 
        ]
}

const mockRepo = 
{
    fetch:jest.fn()
};





describe("categorize()", () => 
{

        beforeEach(() => 
        {
            jest.clearAllMocks();
            mockRepo.fetch.mockResolvedValue(mockData);
        })

    test("should return map with matching data of tag",() => 
        {

        })
    test("should return empty map when missing  input",() => 
        {
            const service = new ImageService(null);
            const r = service.categorize([]);
            expect(r.size).toBe(0);
        });

    test("should return none when tag doesn't exist",() => 
        {
            const service = new ImageService(null);
            const r = service.categorize(mockData.images);
            expect(r.get(" ")).toBeUndefined();
        });

})
import { imageRepository } from "../data/api/ImageRepository.js";
import { describe, test, expect, jest } from '@jest/globals';

global.fetch = jest.fn();

describe("imageRepository", () => 

    {

        beforeEach(() => 
            {
                jest.clearAllMocks();
            }
        );

        test("returns json data with ok response", async () => 
        {
            fetch.mockResolvedValue(
                {
                  ok:true,
                  json: async () => ({test:true})  
                })
            const repo = new imageRepository("/test.json");
            const data = await repo.fetch();
            expect(data).toEqual({test:true});
        });

        test("throws error when response is not ok", async () =>
        
            {
                fetch.mockResolvedValue(
                    {
                        ok:false,
                        json: async () => ({})
                    }
                );

                const repo = new imageRepository("/test.json");
                await expect(repo.fetch()).rejects.toThrow();

            }
        )
    });
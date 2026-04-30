import { createClient } from "microcms-js-sdk";

export const client = createClient(
    {
        serviceDomain: 'jc1glg2bgg',
        apiKey:process.env.MICROCMS_API_KEY!
    }
);
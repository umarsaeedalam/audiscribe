import { AssemblyAI } from 'assemblyai';

const API_KEY = process.env.NEXT_PUBLIC_ASSEMBLY_AI_API_KEY;

if (!API_KEY) {
    throw new Error('AssemblyAI API key not found in environment variables');
}

const client = new AssemblyAI({
    apiKey: API_KEY,
});

export default client;
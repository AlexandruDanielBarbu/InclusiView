import { Mistral } from '@mistralai/mistralai';

const apiKey = "y7JBDqhZyNRdL700gMI4SCHHYkkcNFKL";

const client = new Mistral({apiKey: apiKey});

const question = "What is the best French cheese"

const chatResponse = await client.chat.complete({
    model: "codestral-latest",
    messages: [{role: 'user', content: question}]
});

console.log('Chat:', chatResponse.choices[0].message.content);
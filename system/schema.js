import fetch from "node-fetch";

class ApiGratis {
    constructor(baseURL = 'https://api.apigratis.site') {
        this.baseURL = baseURL || 'https://api.apigratis.site';
    }


async sendMessage(message) {
        try {
            const response = await fetch(`https://api.apigratis.site/cai/send_message`, {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    external_id: "Jsx-1TlZMsui0ZoX3BxAFu3h0e9TchHp7QyXumWKNbE",
                    message,
                    chat_id: "",
                    n_ressurect: false
                })
            });
            const data = await response.json();
            return response.ok ? data : Promise.reject(new Error('Failed to send message'));
        } catch (error) {
            console.error('Error sending message:', error.message);
            throw error;
        }
    }
}

export {
    ApiGratis
};
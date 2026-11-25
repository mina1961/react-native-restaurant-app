import axios from 'axios';

const base = axios.create({
    baseURL:'https://khlpoklznbdfxlqrqheo.supabase.co',
    headers: {
        'apikey': 'sb_publishable_P-N3rk4HA4owj940nx8lyQ_KhVtD9bT',
        'Content-Type': 'application/json'
    }
});

const api = axios.create({
    ...base.defaults,
    baseURL: `${base.defaults.baseURL}/rest/v1`
});

export default api;
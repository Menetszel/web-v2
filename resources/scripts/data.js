import { transport } from './ui.js';

export function manualData(service, name, type, icon, start_time, start_location, end_time, end_location, ticket_url) {
    let data = {
        service: service,
        name: name,
        start_time: start_time,
        start_location: start_location,
        end_time: end_time,
        end_location: end_location,
        type: type,
        icon: icon,
        ticket_url: ticket_url,
    };
    return data;
}

export function ui_inject(type, data) {
    if (type === 'transport') {
        let html = transport(data);
        document.body.innerHTML += html;
    }
}

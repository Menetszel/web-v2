export function transport(data) {
    return `
    <div class="transport ${data.service}">
        <div class="t_head">
            <span class="material-symbols-outlined">${data.icon}</span>
            <div class="t_name">${data.name}</div>
            <div class="t_type">${data.type}</div>
        </div>
        <div class="t_body">
            <span class="material-symbols-outlined">
                    pin_drop
            </span>
            <div class="t_details">
                <div class="t_details_sub">
                    <div class="t_start">${data.start_time}</div>
                    <div class="t_start">${data.start_location}</div>
                </div>
                <div class="t_details_sub">
                    <div class="t_end">${data.end_time}</div>
                    <div class="t_end">${data.end_location}</div>
                </div>
            </div>
            </div>
            <div class="clearfix"><button class="t_buyticket" onclick="window.location.href='${data.ticket_url}'">
                <span class="material-symbols-outlined">shopping_cart</span><div class="t_buyticket_text">Jegyvásárlás</div>
            </button></div>
    </div>
    `;
}

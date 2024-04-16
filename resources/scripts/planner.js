import { transport } from './ui.js';
import { manualData, ui_inject } from './data.js';

window.onload = function() {
    ui_inject('transport', manualData(
        'volan', '7071', 'autóbusz', 'directions_bus',
        '9:35', 'Kapuvár, autóbusz-állomás',
        '10:47', 'Győr, autóbusz-állomás',
        'https://www.volanbusz.hu/hu/jegyvasarlas',
    ));
}
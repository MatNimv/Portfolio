
function screen_converter() {

    let screen_width = window.innerWidth;
    let screen_size = "";

    if (screen_width <= 640) screen_size = "mobile";
    else if (screen_width <= 768 && screen_width >= 640) screen_size = "tablet";
    else if (screen_width >= 976) screen_size = "desktop";
    return screen_size;
}

export default screen_converter;
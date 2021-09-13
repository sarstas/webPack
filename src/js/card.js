export default item => {
    const itemEl = document.createElement('div');
    itemEl.className = "gallery-item";

    const resourseWrapEl = document.createElement('div');
    resourseWrapEl.className = 'gallery-item__resource';

    if(item.type === 'image'){
        const imgEl = document.createElement('img');
        imgEl.className = "gallery-item__img";
        imgEl.src = item.src;
        resourseWrapEl.appendChild(imgEl);
    } else if (item.type === 'audio') {
        const audioEl = document.createElement('audio');
        audioEl.className = "gallery-item__audio";
        audioEl.controls = true;
        audioEl.src = item.src;
        resourseWrapEl.appendChild(audioEl);
    }
    // else if (item.type === 'video') {
    //     const videoEl = document.createElement('video');
    //     videoEl.className = "gallery-item__video";
    //     videoEl.controls = true;
    //     videoEl.src = item.src;
    //     resourseWrapEl.appendChild(videoEl);
    // }

    const titleEl = document.createElement('h3');
    titleEl.className = "gallery-item__title";
    titleEl.textContent = item.title;
    itemEl.appendChild(resourseWrapEl);
    itemEl.appendChild(titleEl);

    return itemEl;
}
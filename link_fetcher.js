/* event listener */
document.getElementById("urlInput").addEventListener('input', doThing);

/* function */
function doThing(){
    const url_prefix = "https://rochester.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=";
    let is_prefix_right = true;
    for(var i = 0; i < url_prefix.length && i < this.value.length; i++){
        if(url_prefix[i] != this.value[i]){
            is_prefix_right = false;
        }
    }
    if(url_prefix.length >= this.value.length){
        is_prefix_right = false;
    }

    let dl_button = document.getElementById("downloadButton");

    if(!is_prefix_right){
        dl_button.classList.add("disabled");
        dl_button.href = '';
        return;
    }

    var id_index = url_prefix.length;
    var id = "";
    if(this.value.length - id_index >= 36){
        for(var i = id_index; i < id_index + 36; i++){
            id += this.value[i];
            if(this.value[i] == '-' || ('a' <= this.value[i] && this.value[i] <= 'f') || ('0' <= this.value[i] && this.value[i] <= '9')){
            } else {
                dl_button.classList.add("disabled");
                dl_button.href = '';
                return;
            }
        }
    } else {
        dl_button.classList.add("disabled");
        dl_button.href = '';
        return;
    }

    let dl_url = `https://rochester.hosted.panopto.com/Panopto/Podcast/Syndication/${id}.mp4?mediaTargetType=videoPodcast`;
    dl_button.classList.remove("disabled");
    dl_button.href = dl_url;
}

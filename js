// 在playTrack函数中添加
document.getElementById('album-cover').style.backgroundImage = 
    `url('${track.cover || "images/default-cover.jpg"}')`;

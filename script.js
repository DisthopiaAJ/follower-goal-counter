document.addEventListener("DOMContentLoaded", function() {
    let followerCount = 0;
    const maxFollowers = 100;
    const followerCountElement = document.getElementById("followerCount");
    const goldCover = document.querySelector(".gold-cover");

    function updateFollowerCount() {
        followerCount++;
        if (followerCount <= maxFollowers) {
            followerCountElement.textContent = followerCount;
            const coverHeight = (followerCount / maxFollowers) * 100;
            goldCover.style.height = coverHeight + "%";
        }
    }

    setInterval(updateFollowerCount, 1000);
});

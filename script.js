document.addEventListener("DOMContentLoaded", function() {
    let followerCount = 0;
    const maxFollowers = 100;
    const followerCountElement = document.getElementById("followerCount");
    const swordBlade = document.querySelector(".sword-blade");
    const goldCover = document.createElement("div");
    goldCover.classList.add("gold-cover");
    swordBlade.appendChild(goldCover);

    function updateFollowerCount() {
        followerCount++;
        if (followerCount <= maxFollowers) {
            followerCountElement.textContent = followerCount;
            const coverHeight = (followerCount / maxFollowers) * 100;
            goldCover.style.height = coverHeight + "%";

            const shimmer = document.createElement("div");
            shimmer.classList.add("shimmer");
            goldCover.appendChild(shimmer);

            setTimeout(() => {
                goldCover.removeChild(shimmer);
            }, 2000);
        }
    }

    setInterval(updateFollowerCount, 1000);
});

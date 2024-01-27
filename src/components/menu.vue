<template>
     <nav class="menu" ref="menu">
        <div class="actionsBar">
            <div>
                <button id="menuBtn" @click="handleMenu" type="button">
                    <i class="iconfont icon-hanbaocaidan"></i>
                </button>
                <h3 class="menuText">Wey SAI</h3>
            </div>
        </div>
        <ul class="optionsBar">
            <li class="menuItem">
                <a href="https://sai.weydev.top/" class="menuOption">
                    <i class="iconfont icon-shouye"></i>
                    <h5 class="menuText">Home</h5>
                </a>
            </li>
            <li class="menuItem">
                <a href="#" class="menuOption">
                    <img src="../assets/image/search.webp">
                    <h5 class="menuText">SAI search</h5>
                </a>
            </li>

            <li class="menuBreak">
                <hr>
            </li>
            <li class="menuItem">
                <button class="menuOption" type="button" onclick="window.location.href='https://sai.weydev.top/AGI';">
                    <svg t="1701354856444" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="16464" width="32" height="32">
                        <path class="p"
                            d="M896 85.333333h-768C76.8 85.333333 34.133333 128 34.133333 179.2v535.893333c0 51.2 42.666667 93.866667 93.866667 93.866667h768c51.2 0 93.866667-42.666667 93.866667-93.866667V179.2c0-51.2-42.666667-93.866667-93.866667-93.866667zM334.506667 570.026667c13.653333 13.653333 13.653333 34.133333 0 47.786666-6.826667 6.826667-15.36 10.24-23.893334 10.24s-17.066667-3.413333-23.893333-10.24l-126.293333-126.293333c-13.653333-13.653333-13.653333-34.133333 0-47.786667l126.293333-126.293333c13.653333-13.653333 34.133333-13.653333 47.786667 0s13.653333 34.133333 0 47.786667l-102.4 102.4 102.4 102.4z m250.88-238.933334l-80.213334 273.066667c-5.12 15.36-18.773333 23.893333-32.426666 23.893333-3.413333 0-6.826667 0-10.24-1.706666-18.773333-5.12-29.013333-23.893333-23.893334-42.666667l80.213334-273.066667c5.12-18.773333 23.893333-29.013333 42.666666-23.893333 18.773333 6.826667 29.013333 27.306667 23.893334 44.373333z m278.186666 160.426667l-126.293333 126.293333c-6.826667 6.826667-15.36 10.24-23.893333 10.24s-17.066667-3.413333-23.893334-10.24c-13.653333-13.653333-13.653333-34.133333 0-47.786666l102.4-102.4-102.4-102.4c-13.653333-13.653333-13.653333-34.133333 0-47.786667s34.133333-13.653333 47.786667 0l126.293333 126.293333c13.653333 11.946667 13.653333 34.133333 0 47.786667zM781.653333 947.2H242.346667c-18.773333 0-34.133333-15.36-34.133334-34.133333s15.36-34.133333 34.133334-34.133334h539.306666c18.773333 0 34.133333 15.36 34.133334 34.133334s-15.36 34.133333-34.133334 34.133333z"
                            fill="#ffffff" p-id="16465"></path>
                    </svg>
                    <h5 class="menuText">Wey SAI</h5>
                </button>
            </li>

            <li class="menuItem">
                <button class="menuOption" type="button" onclick="window.location.href='#';">
                    <svg t="1701354622338" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="8662" width="32" height="32">
                        <path  class="p"
                            d="M547.487 491.464c55.648-42.051 92.172-108.582 92.172-184.227 0-127.363-102.102-230.605-228.063-230.605-125.957 0-228.055 103.242-228.055 230.605 0 74.352 35.395 139.766 89.418 181.938-115.941 52.43-197.738 168.023-201.879 303.93 0 20.984 17.008 38 37.996 38 20.984 0 38-17.016 38-38 9.43-135.813 118.422-250.391 253.746-256.359l20.543 0.102c85.426 3.242 160.488 46.523 206.816 112.633h86.486c-35.391-71.033-95.414-125.392-167.18-158.017zM414.804 459.331l-8.172-0.098c-81.676-2.438-147.41-69.344-147.41-152.512 0-84.723 67.93-153.406 151.719-153.406s151.695 68.684 151.695 153.406c0 83.329-65.938 150.407-147.832 152.61zM655.776 159.741c64.891 17.398 133.836 75.891 133.836 146.98 0 53.93-37.148 108.469-79.039 135.098l-0.047 0.043c-19.789 7.629-33.984 26.672-33.984 49.359l-0.078 4.938c0 28.195 22.461 50.719 49.93 52.492 0 0 1.398 0.203 1.539 0.391 44.219 20.922 86.281 56.875 119.094 100.438h94.266c-34.337-67.813-90.829-121.329-159.204-153.938l-0.297-3.063c52.531-43.242 84.813-111.18 84.813-185.242 0-121.105-92.688-218.813-210.055-228.258l-2.695 0.094c-21.461 1.16-38.813 18.191-38.813 39.938 0 22.492 18.234 40.73 40.734 40.73z"
                            fill="#ffffff" p-id="8663"></path>
                        <path class="p" d="M642.683 706.667h256v51.2h-256v-51.2z" fill="#ffffff" p-id="8664"></path>
                        <path class="p" d="M642.683 809.067h256v51.2h-256v-51.2z" fill="#ffffff" p-id="8665"></path>
                        <path class="p" d="M642.683 911.467h256v51.2h-256v-51.2z" fill="#ffffff" p-id="8666"></path>
                    </svg>
                    <h5 class="menuText">成员列表（不可用）</h5>
                </button>
            </li>
            <li class="menuItem">
                <button class="menuOption" type="button" onclick="window.location.href='https://weycloud.top/';">
                    <svg t="1701354178752" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4406" width="32" height="32">
                        <path class="p"
                            d="M640 725.333333a42.666667 42.666667 0 1 0 42.666667 42.666667 42.666667 42.666667 0 0 0-42.666667-42.666667z m-256 0H256a42.666667 42.666667 0 0 0 0 85.333334h128a42.666667 42.666667 0 0 0 0-85.333334z m384 0a42.666667 42.666667 0 1 0 42.666667 42.666667 42.666667 42.666667 0 0 0-42.666667-42.666667z m-128-256a42.666667 42.666667 0 1 0 42.666667 42.666667 42.666667 42.666667 0 0 0-42.666667-42.666667z m-256 0H256a42.666667 42.666667 0 0 0 0 85.333334h128a42.666667 42.666667 0 0 0 0-85.333334z m384-256a42.666667 42.666667 0 1 0 42.666667 42.666667 42.666667 42.666667 0 0 0-42.666667-42.666667z m0 256a42.666667 42.666667 0 1 0 42.666667 42.666667 42.666667 42.666667 0 0 0-42.666667-42.666667z m170.666667-256a128 128 0 0 0-128-128H213.333333a128 128 0 0 0-128 128v85.333334a128 128 0 0 0 33.28 85.333333A128 128 0 0 0 85.333333 469.333333v85.333334a128 128 0 0 0 33.28 85.333333A128 128 0 0 0 85.333333 725.333333v85.333334a128 128 0 0 0 128 128h597.333334a128 128 0 0 0 128-128v-85.333334a128 128 0 0 0-33.28-85.333333 128 128 0 0 0 33.28-85.333333v-85.333334a128 128 0 0 0-33.28-85.333333A128 128 0 0 0 938.666667 298.666667z m-85.333334 597.333334a42.666667 42.666667 0 0 1-42.666666 42.666666H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666666v-85.333334a42.666667 42.666667 0 0 1 42.666666-42.666666h597.333334a42.666667 42.666667 0 0 1 42.666666 42.666666z m0-256a42.666667 42.666667 0 0 1-42.666666 42.666666H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666666v-85.333334a42.666667 42.666667 0 0 1 42.666666-42.666666h597.333334a42.666667 42.666667 0 0 1 42.666666 42.666666z m0-256a42.666667 42.666667 0 0 1-42.666666 42.666666H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666666V213.333333a42.666667 42.666667 0 0 1 42.666666-42.666666h597.333334a42.666667 42.666667 0 0 1 42.666666 42.666666z m-213.333333-85.333334a42.666667 42.666667 0 1 0 42.666667 42.666667 42.666667 42.666667 0 0 0-42.666667-42.666667zM384 213.333333H256a42.666667 42.666667 0 0 0 0 85.333334h128a42.666667 42.666667 0 0 0 0-85.333334z"
                            p-id="4407" fill="#ffffff"></path>
                    </svg>
                    <h5 class="menuText">Wey Server</h5>
                </button>
            </li>

        </ul>
        <div class="about" id="about"></div>
        <div class="menuUser">
            <a href="#">
                <div>
                    <img src="https://static.codemao.cn/coco/player/unstable/BJQ01io7a.image/png?hash=Fj2DUDIeQV0wVRZsvT9D2pQ2AM08"
                        alt="./wy.jpg">
                </div>
                <h5 class="Username menuText">Wey Studio FOR SAI</h5>
                <p class="menuText">
                    <i class="iconfont icon-youjiantou"></i>
                </p>
            </a>
        </div>
        <div class="themeBar">
            <div>
                <button type="button">
                    <svg t="1701354997654" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="20429" width="32" height="32">
                        <path class="p"
                            d="M913.94086 431.828053c-4.878101-25.783223-20.693298-42.455951-40.947598-42.455951l-3.511987 0c-54.731532 0-99.248422-44.515866-99.248422-99.262748 0-17.294898 8.299013-37.015032 8.619308-37.798884 10.097986-22.722514 2.349511-50.567699-18.078751-64.859193l-102.701057-57.183374-1.509377-0.738827c-20.545942-8.909927-48.667419-3.207042-63.987337 12.753465-11.086499 11.434423-49.306986 44.037982-78.471213 44.037982-29.543873 0-67.849294-33.257451-78.992075-44.908816-15.293311-16.077164-43.12417-22.112624-63.902402-13.218046l-106.35733 58.272171-1.596358 1.016143c-20.430308 14.234189-28.207435 42.078351-18.165732 64.713884 0.346901 0.827855 8.676613 20.387329 8.676613 37.914518 0 54.746882-44.51689 99.262748-99.247398 99.262748l-4.149507 0c-19.617803 0-35.434024 16.671705-40.309054 42.455951-0.363274 1.814322-8.590656 45.446052-8.590656 80.429821 0 34.938744 8.227382 78.555124 8.590656 80.355119 4.875031 25.799596 20.691251 42.48665 40.946574 42.48665l3.511987 0c54.730509 0 99.247398 44.51689 99.247398 99.247398 0 17.411555-8.328689 37.058011-8.647961 37.812187-10.069333 22.766516-2.349511 50.567699 18.021445 64.787562l100.756775 56.531528 1.538029 0.696872c20.836561 9.17087 49.01432 3.191692 64.250326-13.464663 14.07353-15.207353 52.207036-46.782489 80.20981-46.782489 30.354332 0 69.445652 35.347043 80.706113 47.76691 10.387581 11.376095 26.349111 18.22713 42.687218 18.22713 7.631818 0 14.857383-1.511423 21.474081-4.354168l104.4724-57.574277 1.538029-0.989537c20.428262-14.276145 28.206412-42.077328 18.138102-64.727187-0.348947-0.842181-8.677637-20.402679-8.677637-37.928844 0-54.730509 44.51689-99.247398 99.248422-99.247398l4.093225 0c19.644409 0 35.488259-16.687054 40.365336-42.48665 0.347924-1.799996 8.588609-45.416376 8.588609-80.355119C922.529469 477.274104 914.288784 433.642374 913.94086 431.828053M862.982258 512.257873c0 22.605857-4.498454 51.655474-6.559393 63.785745-82.09781 6.732331-145.738245 75.335802-145.738245 158.303422 0 23.419386 7.430226 45.851281 11.377118 56.169277l-89.12076 49.216935c-4.38282-4.584412-17.325597-17.644869-34.939767-30.762631-30.93557-22.925129-60.595077-34.635845-88.106664-34.635845-27.278273 0-56.703443 11.420097-87.493703 34.05563-17.528212 12.768815-30.296003 25.479301-34.765805 30.18037l-85.724407-47.997154c4.179183-10.839883 11.405771-32.982182 11.405771-56.226582 0-82.96762-63.640436-151.571091-145.70857-158.303422-2.089591-12.130272-6.588045-41.178865-6.588045-63.785745 0-22.650883 4.498454-51.713802 6.588045-63.844074 82.068134-6.718005 145.70857-75.335802 145.70857-158.303422 0-23.288402-7.429203-45.792952-11.376095-56.095599l91.325985-50.190099c3.975545 3.976568 17.005302 16.730033 34.82311 29.411867 30.355355 21.663392 59.260685 32.633235 86.016049 32.633235 26.494421 0 55.19509-10.766205 85.346807-32.009018 17.963117-12.623505 30.964222-25.203008 34.736129-28.757974l87.900979 48.825009c-3.975545 10.244318-11.405771 32.676214-11.405771 56.18258 0 82.96762 63.640436 151.585417 145.738245 158.303422C858.483804 460.5717 862.982258 489.7523 862.982258 512.257873"
                            fill="#ffffff" p-id="20430"></path>
                        <path class="p"
                            d="M510.215866 365.633445c-80.530105 0-146.056494 65.527412-146.056494 146.057517 0 80.543408 65.527412 146.043191 146.056494 146.043191 80.530105 0 146.057517-65.499783 146.057517-146.043191C656.273383 431.160857 590.74597 365.633445 510.215866 365.633445M596.725148 511.690962c0 47.693232-38.799678 86.491887-86.509283 86.491887-47.708582 0-86.479607-38.798655-86.479607-86.491887 0-47.665603 38.771025-86.479607 86.479607-86.479607C557.925471 425.212378 596.725148 464.025359 596.725148 511.690962"
                            fill="#ffffff" p-id="20431"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
    const paths = document.querySelectorAll('.icon .p')
    paths.forEach(path =>{
        const len = path.getTotalLength()
        path.style.setProperty('--l', len);
    })
})

let menu = ref()

const handleMenu = () => {
    menu.value.classList.toggle('open');
    const menuText = document.querySelectorAll('.menuText');
    menuText.forEach(function (text, index) {
        setTimeout(() => {
            text.classList.toggle('open2');
        }, index * 50);
    });
}
</script>

<style scoped>
.p {
    stroke: #fff;
    stroke-width: 10;
    stroke-dasharray: var(--l);
    stroke-dashoffset: var(--l);
    animation: stroke 3s forwards;
    stroke-linecap: round;
}

@keyframes stroke {
    to {
        stroke-dashoffset: 0;
    }
    from {
        fill: none;
    }
}

#homepage {
    width: 100vw;
    height: 100vh;
}

iframe {
    border: medium none;
}

.iconfont {
    font-size: 20px;
}



.menu {
    position: fixed;
    width: 60px;
    height: 600px;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 10px;
    margin: auto;
    border-radius: 0.8rem;
    transition: 0.3s ease 0.15s;
    font-family: sans-serif;
}

.menu a {
    text-decoration: none;
}

.menu .actionsBar {
    width: 100%;
    height: 10%;
    padding: 0.5rem;
    overflow: hidden;
}

.menu .actionsBar div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.5rem;
    transition: 0.3s ease;
}

.menu .actionsBar div button {
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    color: #fff;
    width: 45px;
    height: 45px;
    transition: 0.3s ease;
    font-size: 1rem;
}

.menu .actionsBar div button:hover {
    background-color: #364152;
}

.menu .actionsBar div h3 {
    width: calc(100% - 45px);
    text-align: center;
}

.menu .optionsBar {
    overflow: hidden;
    display: flex;
    width: 100%;
    height: 60%;
    padding: 0 0.5rem;
    align-items: center;
    flex-direction: column;
}

.menu .optionsBar .menuItem {
    width: 100%;
    height: 45px;
    margin: 0.3rem;
}

.menu .optionsBar .menuItem .menuOption {
    font-size: 1rem;
    outline: none;
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.5rem;
    transition: 0.3s ease;
}

.menu .optionsBar .menuItem .menuOption:hover {
    background-color: #364152;
}

.menu .optionsBar .menuItem .menuOption i {
    width: 45px;
    text-align: center;
    color: #fff;
}

.menu .optionsBar .menuItem .menuOption h5 {
    text-align: left;
    width: calc(100% - 45px);
}

.menuText {
    color: rgba(255, 255, 255, 0.8);
    transform: translateX(-250px);
    opacity: 0;
    transition: transform 0.3s ease 0.1s;
}

.menu .about {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    flex-direction: column;
    font-family: sans-serif;
    opacity: 0;
    white-space: nowrap;
    transition: 0.3s ease 0.15s;
}

.menu.open {
    width: 240px;
}

.menuText.open2 {
    opacity: 1;
    transform: translateX(0);
}

.menu .menuBreak {
    width: 100%;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu .menuBreak hr {
    width: 70%;
    height: 3px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
}

.menu .themeBar {
    overflow: hidden;
    width: 100%;
    height: 10%;
    padding: 0.5rem;
}

.menu .themeBar div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.5rem;
    transition: 0.3s ease;
}

.menu .themeBar div button {
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    color: #fff;
    width: 100%;
    height: 45px;
    transition: 0.3s ease;
    font-size: 1rem;
}

.menu .themeBar div button:hover {
    background-color: #364152;
}

.menu .menuUser {
    width: 100%;
    height: 10%;
}

.menu .menuUser a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    padding: 0.5rem;
    position: relative;
}

.menu .menuUser a div {
    width: 45px;
    height: 45px;
    position: relative;
    border-radius: 0.5rem;
}

.menu .menuUser a div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
}

.menu .menuUser a .Username {
    font-size: 13px;
    width: calc(80% - 45px);
}

.menu .menuUser a p {
    width: calc(30% - 45px);
}

.menu .menuUser a:hover p {
    animation: animArrow 0.3s ease 2;
}

@keyframes animArrow {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(5px);
    }

    100% {
        transform: translateX(0);
    }
}

.menu .menuUser .userInfo {
    position: absolute;
    width: 20rem;
    height: 18rem;
    opacity: 0;
    pointer-events: none;
    top: 34%;
    left: 1.5rem;
    transition: 0.3s ease;
    transform: scale(0);
    transform-origin: bottom left;
}

.menu .menuUser:hover .userInfo {
    pointer-events: all;
    opacity: 1;
    transform: scale(1);
}
</style>
<template>
<div id="header">
    <div class="info">
        <div class="info__left">
            <div class="info__icon-left">
                <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />
            </div>
            <div class="info__icon-left">
                <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
            </div>
            <div class="info__icon-left">
                <font-awesome-icon class="icon" icon="fa-brands fa-google" />
            </div>
            <div class="info__icon-left">
                <font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in" />
            </div>
            <div class="info__icon-left">
                <font-awesome-icon class="icon" icon="fa-brands fa-youtube" />
            </div>
        </div>
        <div class="info__center">
            <div class="info__center-icon">
                <font-awesome-icon class="info__icon-right" icon="fa-solid fa-location-dot" />
                <p>358 Bùi Xương Trạch</p>
            </div>
            <div class="info__center-icon">
                <font-awesome-icon class="info__icon-right" icon="fa-solid fa-pen" />
                <p>cardealer@gmail.com</p>
            </div>
            <div class="info__center-icon">
                <font-awesome-icon class="info__icon-right" icon="fa-regular fa-clock" />
                <p>Working Hours: 24/7</p>
            </div>
        </div>
        <div class="info__right">
            <input type="text" placeholder="SEARCH KEYWORD">
            <font-awesome-icon class="info__right-icon" icon="fa-solid fa-magnifying-glass" />
        </div>
    </div>
    <header :class="{change__color: scrollPosition > 55}">
        <div class="logo">
            <img src="../../assets/img/logo.png" alt="">
        </div>
        <div>
            <a href="">TRANG CHỦ</a>
            <router-link to="/model"><a href="">MẪU XE</a></router-link>
            <a href="">SERVICES</a>
            <a href="">FEATURES</a>
            <a href="">GALLERY</a>
            <a href="">BLOG</a>
            <a href="">CONTACT US</a>
        </div>
        <div class="hotline">
            <h6>HOTLINE</h6>
            <h1>(+84)869 035 565</h1>
        </div>
    </header>
</div>
</template>

<script>
export default {
    data() {
        return {
            scrollPosition: '',
            isDefaultImage: true,
    } 
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
        handleScroll(event){
            if(window.scrollY > 55){
                return this.isDefaultImage = false
            }
            if (window.scrollY <= 55) {
                if (!this.defaultImage) {
                return this.isDefaultImage = true
                }
        }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
}
</script>

<style scoped>
/* -------INFO------- */
#header {
    width: 100%;
}
.icon:hover {
    cursor: pointer;
    color: var(--main-color-yellow);
}
.info {
    height: 55px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.info__left,
.info__center,
.info__right{
    display: flex;
    flex-direction: row;
}
.info__left {
    
}
.info__icon-left {
    margin: 0 12px;
    font-size: 0.9rem;
    color: #b2b2b2;
}
.info__center-icon {
    display: flex;
    margin-top: 18px;
}
.info__center-icon > p {
    font-size: 0.9rem;
}
.info__icon-right {
    color: var(--main-color-yellow);
    margin-top: 4px;
    margin-right: 6px;
    margin-left: 20px;
    font-size: 0.9rem;
}
input {
    border-radius: 30px;
    padding: 6px 60px 7px 30px;
    font-size: 1.1rem;
    border: 0.95px solid #b0b1b1;
    position: relative;
    outline: none;
    color: #5d6161;
}
::placeholder {
    color: #b8aeae;
    font-style: italic;
    font-size: 0.9rem;
}
p {
    color: #8d8c8c;
}
.info__right-icon {
    color: var(--main-color-yellow);
    position: absolute;
    right: 100px;
    top: 21px;
    font-size: 0.9rem;
}   
/* -------HEADER------- */
header {
    background-color: rgba(35, 38, 38, 0.57);
    height: 110px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    z-index: 9999;
    width: 100%;
}
img {
    width: 200px;
}
a {
    color: #fff;
    font-size: 0.9rem;
    font-weight: 700;
    padding: 40px 10px;
    margin: 0 6px;
    text-decoration: none;
}
.hotline {
    position: relative;
    margin-bottom: 30px;
}
h1 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 0;
    position: absolute;
    right: 0;
}
h6 {
    color: #fff;
    font-size: 1.06rem;
    font-weight: 370;
    margin-left: 160px;
    margin-bottom: 0;
}
.change__color {
    position: fixed;
    top: 0;
    height: 84px;
    transition: 0.3s ease;
    background-color: #212324;
}   

</style>
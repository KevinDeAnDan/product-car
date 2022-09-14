<template>
<div id="footer">
    <div class="banner">
        <a href=""><img src="../../assets/img/01.png" alt=""></a>
        <a href=""><img src="../../assets/img/02.png" alt=""></a>
        <a href=""><img src="../../assets/img/03.png" alt=""></a>
        <a href=""><img src="../../assets/img/04.png" alt=""></a>
        <a href=""><img src="../../assets/img/05.png" alt=""></a>
        <a href=""><img src="../../assets/img/06.png" alt=""></a>
        <a href=""><img src="../../assets/img/07.png" alt=""></a>
        <a href=""><img src="../../assets/img/08.png" alt=""></a>
        <a href=""><img src="../../assets/img/09.png" alt=""></a>
    </div>
    <footer>
        <div class="footer">
            <div class="items">
                <img class="logo" src="../../assets/img/logo.png" alt="">
                <p class="info">We provide the most proficient auto glass installation and replacement services in the greater San Diego. area. We can help you.</p>
                <img class="signature" src="../../assets/img/signature.png" alt="">
            </div>
            <div class="items">
                <h4>GET IN TOUCH</h4>
                <hr align="left">
                <div class="icon__contact">
                    <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
                    <p>385 Bùi Xương Trạch</p>
                </div>
                <div class="icon__contact">
                    <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
                    <p>(+84)869 035 565(operator)</p>
                </div>
                <div class="icon__contact">
                    <font-awesome-icon class="icon" icon="fa-solid fa-pen" />
                    <p>cardealer@gmail.com</p>
                </div>
                <div class="icon__contact">
                    <font-awesome-icon class="icon" icon="fa-regular fa-clock" />
                    <p>Working Hours: 24/7</p>
                </div>
            </div>
            <div class="items">
                <h4>OUR INSTAGRAM</h4>
                <hr align="left">
            </div>
            <div class="items">
                <h4>TWITTER WIDGET</h4>
                <hr align="left">
            </div>
        </div>
    </footer>
    <div class="end">
        <div class="contain">
            <p>© Copyright 2018. CarDealer. All Rights Reserved.</p>
            <div class="end__icons">
                <font-awesome-icon class="end__icon" icon="fa-brands fa-facebook-f" />
                <font-awesome-icon class="end__icon" icon="fa-brands fa-twitter" />
                <font-awesome-icon class="end__icon" icon="fa-brands fa-google" />
                <font-awesome-icon class="end__icon" icon="fa-brands fa-linkedin-in" />
                <font-awesome-icon class="end__icon" icon="fa-brands fa-youtube" />
            </div>
        </div>
    </div>
</div>
</template>
<script>

</script>
<style scoped>
#footer {
    background-color: var(--main-color-black);
}
.banner {
    background-color: var(--main-color-yellow);
    height: 180px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.logo {
    width: 200px;
    padding-bottom: 20px;
    padding-top: 30px;
}
.signature {
    margin-top: 10px;
}
.footer {
    color: #fff;
    display: flex;
    flex-direction: row;
    margin: 0 195px 50px;
}
hr {
    width: 25%;
    height: 1px;
    background-color: var(--main-color-yellow);
    margin-bottom: 26px;
}
.items {
    margin: 80px 20px;
    width: 25%;
}
h4 {
    padding-top: 30px;
}
.icon__contact {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0 20px; 
}
.icon {
    color: var(--main-color-yellow);
}
p {
    margin-bottom: 0;
    color: rgb(204, 202, 202);
    font-size: 1.1rem;
    margin-left: 10px;
}
.info {
    margin-left: 0;
}
.end {
    background-color: #212324;
    height: 100px;
}
.end__icons {
    display: flex;
    flex-direction: row;
}
.end__icon {
    color: rgb(204, 202, 202);
    padding: 0 15px;
}
.end__icon:hover {
    cursor: pointer;
    color: var(--main-color-yellow);
}
.contain {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 200px;
    padding-top: 40px;
}

</style>
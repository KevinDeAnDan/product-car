<template>
<div id="review">
    <div class="review">
        <div class="contain__one">
            <div class="left">
                <span>OUR SERVICES</span>
                <h2>Our Service Plans To Meet All Your Demands</h2>
                <hr class="line" align="left">
            </div>
            <div class="right">
                <p>CarDealer is incredibly flexible, friendly and easy to work with. Our list of services are widely acknowledged to assure you get the best quality service; Anytime. Anywhere! Pork loin capicola beef, pork tail strip steak pig ribeye cupim ball tip burgdoggen prosciutto biltong.</p>
            </div>
        </div>
        <hr class="hr">
        <div class="contain__two">
            <div class="item">
                <div class="media">
                    <div class="media__left"><img src="https://html.modernwebtemplates.com/clearview/images/service-icon/hood.png" alt=""></div>
                    <div class="media__right"><h5>WINDSHIELD<br>REMPLACEMENTS</h5></div> 
                </div>
            </div>
            <div class="item">
                <div class="media">
                    <div class="media__left"><img src="https://html.modernwebtemplates.com/clearview/images/service-icon/rear-window.png" alt=""></div>
                    <div class="media__right"><h5>WINDSHIELD<br>REMPLACEMENTS</h5></div>
                </div>
            </div>
            <div class="item">
                <div class="media">
                    <div class="media__left"><img src="https://html.modernwebtemplates.com/clearview/images/service-icon/door.png" alt=""></div>
                    <div class="media__right"><h5>WINDSHIELD<br>REMPLACEMENTS</h5></div>
                </div>
            </div>
            <div class="item">
                <div class="media">
                    <div class="media__left"><img src="https://html.modernwebtemplates.com/clearview/images/service-icon/car.png" alt=""></div>
                    <div class="media__right"><h5>WINDSHIELD<br>REMPLACEMENTS</h5></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
</script>
<style scoped>
.review {
    background-color: var(--main-color-black);
    height: 500px;
}
.contain__one {
    display: flex;
    flex-direction: row;
    padding: 120px 0 30px;
}
span {
    color: var(--main-color-yellow);
    font-weight: 700;
    font-size: 1.2rem;
}
h2 {
    color: #fff;
    font-size: 2.6rem;
}
p {
    color: rgb(204, 202, 202);
    font-size: 1.2rem;
}
.left {
    width: 50%;
    margin-left: 14.5%;
}
.right {
    width: 50%;
    margin-right: 13.5%;
}
.line {
    width: 10%;
    height: 1px;
    background-color: var(--main-color-yellow);
}
hr {
    width: 10%;
    height: 1px;
    background-color: rgb(80, 79, 79);
}
.hr {
    width: 70%;
}
.contain__two {
    display: flex;
    justify-content: space-between;
    margin: 60px 215px 0;
}
h5 {
    color: #fff;
    font-size: 1.2rem;
}
h5:hover {
    color: var(--main-color-yellow);
    cursor: pointer;
}
.media__left {
    border: 2px solid var(--main-color-yellow);
    border-radius: 50%; 
    padding: 10px;
    margin-right: 15px;
}
</style>
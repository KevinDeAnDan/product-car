<template>
<div id="intro">
    <div class="left">
        <div class="intro">
            <span>WHO IS CARDEALER?</span>
            <h2>About Our Company</h2>
            <hr align="left">
            <h5 class="intro__bold">A specialized team of experienced technicians thriving to help clients in their needs.</h5>
            <p>Since 2001, CarDealer has specialized in repairing and replacing auto glass, windshields, automotive tinting, mobile services and more!</p>
            <p>Our full line of services is backed by decades of delivering quality workmanship and value to our customers. At CarDealer, we pride ourselves on providing superior products and services for every one of our customers. It's what makes us the clear choice for all your glass needs.</p>
        </div>
        <div class="video">
            <iframe src="https://www.youtube.com/embed/Tb5aO78Au1c" width="515" height="295" frameborder="0">
            </iframe>
        </div>
    </div>
</div>
</template>
<script>

</script>
<style scoped>
/* ---------INTRO---------- */
#intro {
    height: 500px;
    margin: 100px 220px 0;
}
.left {
    display: flex;
    flex-direction: row;
}
.intro {
    width: 50%;
}
.intro span {
    color: var(--main-color-yellow);
    font-weight: 700;
    font-size: 1.2rem;
}
.intro h2 {
    font-size: 2.6rem;
    font-weight: 700;
    color: var(--main-color-black);
}
.intro__bold {
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--main-color-black);
}
.intro p {
    font-weight: 300;
    font-size: 1.2rem;
}
hr {
    background-color: var(--main-color-yellow);
    width: 10%;
    height: 1px;
}
.video {
    margin-top: 40px;
    margin-left: 5px;
}
.review {
    height: 500px;
    background: var(--main-color-yellow);
}

</style>

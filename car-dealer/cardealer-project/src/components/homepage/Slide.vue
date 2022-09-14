<template>
<div><div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                        <img class="d-block w-100" src="../../assets/img/slide01.jpg" alt="First slide">
                    <div class="carousel-caption d-none d-md-block title">
                        <div class="text">
                            <transition appear enter-class="" enter-active-class="animate__animated animate__fadeInUp" leave-class="" leave-active-class="">
                                <h5>WELCOME TO THE CARDEADER</h5>
                            </transition>
                            <transition appear enter-class="" enter-active-class="animate__animated animate__fadeInUp animate__delay-1s" leave-class="" leave-active-class="">
                                <h2>We Provide 24/7 Service</h2>
                            </transition>
                        </div>
                        <div>
                            <transition appear enter-class="" enter-active-class="animate__animated animate__fadeInUp animate__delay-2s" leave-class="" leave-active-class="">
                                <p>We Offer FREE mobile repair service, for all customers within a 25 mile range of our location.</p>
                            </transition>
                        </div>
                        <div class="title__left">
                            <a class="title__left-one" href="">FREE ESTIMATE</a>
                            <a class="title__left-two" href=""><span class="icon__left"><img class="icon__img" src="../../assets/img/bbb.png" alt=""></img></span>BUSSINESS</a>    
                            <span class="icon__right">A+</span>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                        <img class="d-block w-100" src="../../assets/img/slide02.jpg" alt="Second slide">
                    <div class="carousel-caption d-none d-md-block title">
                        <div class="text">
                            <h5>WELCOME TO THE CARDEADER</h5>
                            <h2>We Provide 24/7 Service</h2>
                        </div>
                        <div>
                            <p>We Offer FREE mobile repair service, for all customers within a 25 mile range of our location.</p>
                        </div>
                        <div class="title__left">
                            <a class="title__left-one" href="">FREE ESTIMATE</a>
                            <a class="title__left-two" href=""><span class="icon__left"><img class="icon__img" src="../../assets/img/bbb.png" alt=""></img></span>BUSSINESS</a>
                            <span class="icon__right">A+</span>   
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                        <img class="d-block w-100" src="../../assets/img/slide03.jpg" alt="Third slide">
                    <div class="carousel-caption d-none d-md-block title">
                        <div class="text">
                            <h5>WELCOME TO THE CARDEADER</h5>
                            <h2>We Provide 24/7 Service</h2>
                        </div>
                        <div>
                            <p>We Offer FREE mobile repair service, for all customers within a 25 mile range of our location.</p>
                        </div>
                        <div class="title__left">
                            <a class="title__left-one" href="">FREE ESTIMATE</a>
                            <a class="title__left-two" href=""><span class="icon__left"><img class="icon__img" src="../../assets/img/bbb.png" alt=""></img></span>BUSSINESS</a>   
                            <span class="icon__right">A+</span>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div></div>
</template>
<script>

</script>
<style scoped>
.title {
    top: 30%;
    margin-right: 36%;
    /* margin-left: 4%; */
}
.title__left {
    text-align: left;
    margin-top: 60px;
}
h5 {
    text-align: left;
    font-size: 1.1rem;
    color: var(--main-color-yellow);
}
h2 {
    text-align: left;
    font-size: 4.2rem;
}
.title p {
    margin-top: 10%;
    text-align: left;
    font-size: 1.3rem;
    color: rgb(214, 207, 207);
}
.title__left-one {
    background-color: var(--main-color-yellow);
    border-radius: 30px;
    padding: 21px 43px 22px;
}

.title__left .icon__left {
    background-color: var(--main-color-yellow);
    padding-left: 23px;
    position: absolute;
    top: -1px;
    left: -1px;
    border-radius: 30px 0 0 30px;
    line-height: 64px;
    width: 62px;
}
.title__left-two {
    border-radius: 30px;
    padding: 20px 38px 21px 80px;
    border: 1px solid var(--main-color-yellow);
    background-color: 30% var(--main-color-yellow);
    position: relative;
}
.title__left .icon__right {
    border-radius: 50%;
    background-color: var(--main-color-yellow);
    padding: 8px 9px;
    font-weight: 500;
    position: absolute;     
    text-align: center;
    bottom: 80px;
    left: 380px;
}
.icon__img {
    width: 24px;
}
a {
    text-decoration: none;
    color: #fff;
    font-weight: 700;
}
</style>
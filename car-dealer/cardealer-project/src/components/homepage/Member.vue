<template>
<div id="member">
    <div class="member">
        <div class="items">
            <span>OUR STAFF</span>
            <h2>The Team Of Our Best Workers</h2>
            <hr align="left">
            <div>
                <a href="">READ MORE</a>
            </div>
        </div>
        <div class="items">
            <div class="avt"><img src="https://html.modernwebtemplates.com/clearview/images/team/01.jpg" alt=""></div>
            <div class="bottom__links">
                <transition appear enter-class="" enter-active-class="animate__animated animate__fadeInUp" leave-class="" leave-active-class="animate__animated animate__bounceOutDown">
                    <a class="profile" href="">View profile</a>
                </transition>
            </div>
            <div class="info">
                <h4>Leanard Meyer</h4>
                <p>DIRECTOR</p>
            </div>
        </div>
        <div class="items">
            <div class="avt"><img src="https://html.modernwebtemplates.com/clearview/images/team/01.jpg" alt=""></div>
            <div class="bottom__links">
                <a class="profile" href="">View profile</a>
            </div>
            <div class="info">
                <h4>Leanard Meyer</h4>
                <p>DIRECTOR</p>
            </div>
        </div>
        <div class="items">
            <div class="avt"><img src="https://html.modernwebtemplates.com/clearview/images/team/01.jpg" alt=""></div>
            <div class="bottom__links">
                <a class="profile" href="">View profile</a>
            </div>
            <div class="info">
                <h4>Leanard Meyer</h4>
                <p>DIRECTOR</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>

</script>
<style scoped>
.member {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 13.5%;
}
.items {
    width: 255px;
    margin: 100px 14px;
}
img {
    width: 255px;
}
span {
    color: var(--main-color-yellow);
    font-weight: 700;
    font-size: 1.2rem;
}
h2 {
    color: #2f3233;
    font-size: 2.6rem;
    font-weight: 700;
}
hr {
    background-color: var(--main-color-yellow);
    width: 22%;
    height: 1px;
    margin-bottom: 114px;
}
a {
    background-color: var(--main-color-yellow);
    border-radius: 40px;
    padding: 20px 45px;
    font-size: 0.9rem;
    font-weight: 700;
    color: #fff;
}
.info {
    background-color: #f2f2f2;
    padding: 20px 0;
    border-bottom: 2px solid var(--main-color-yellow);
}
h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--main-color-black);
    margin-left: 30px;
    margin-bottom: 0;
}
h4:hover {
    color: var(--main-color-yellow);
    cursor: pointer;
}
p {
    color: var(--main-color-yellow);
    font-size: 0.8rem;
    font-weight: 500;
    margin-left: 30px;
    margin-bottom: 6px;
}
.avt {
    position: relative;
}
.items:hover .avt::before {
    opacity: 1;
}
.avt::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(47,50,51,.8);
    opacity: 0;
    transition: all .2s linear;
}
.profile {
    background-color: rgba(47,50,51,0);
    border: 2px solid var(--main-color-yellow);
    display: none;
    transition: .2s;
}
.profile:hover {
    color: var(--main-color-yellow);
    text-decoration: none;
}
.items:hover .profile {
    display: block;
    transition: all .2s linear;
}
.items {
    position: relative;
}
.bottom__links {
    position: absolute;
    top: 42%;
    left: 16.5%;
}
</style>
<template>
<div id="chart">
  <div class="contain">
    <div class="about">
      <div>
        <span>OUR ANVANTAGES</span>
        <h2>What We Can Do For You</h2>
      </div>
        <hr align="left">
        <div class="info">
          <p>We provide the most proficient auto glass installation and replacement services in the greater San Diego area. ClearView can help you with your car needs, whether it means replacing a windshield or repairing a chip.</p>
        </div>
    </div>
    <div class="chart">
      <div class="chart__pie">
        <div class="pie animate" style="--p:75;--c:#fab915">75%</div>
        <p>Replacement</p>
      </div>
      <div class="chart__pie">
        <div class="pie animate" style="--p:60;--c:#fab915">60%%</div>
        <p>Replacement</p>
      </div>
      <div class="chart__pie">
        <div class="pie animate" style="--p:57;--c:#fab915">57%</div>
        <p>Replacement</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>

</script>
<style scoped>
/* -----PIE CHART----- */
@property --p{
  syntax: '<number>';
  inherits: true;
  initial-value: 1;
}

.pie {
  --p:20;
  --b:12px;
  --c:darkred;
  --w:150px;

  width: var(--w);
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  margin: 10px;
  place-content: center;
  font-size: 25px;
  font-weight: bold;
  font-family: sans-serif;
}
.pie:before,
.pie:after {
  content: "";
  position: absolute;
  border-radius: 50%;
}
.pie:before {
  inset: 0;
  background:
    radial-gradient(farthest-side,var(--c) 98%,#0000) top/var(--b) var(--b) no-repeat,
    conic-gradient(var(--c) calc(var(--p)*1%),#0000 0);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
          mask: radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
          
}
.pie:after {
  inset: calc(50% - var(--b)/2);
  background: var(--c);
  transform: rotate(calc(var(--p)*3.6deg)) translateY(calc(50% - var(--w)/2));
  
}
.animate {
  animation: p 2s .5s both;
}
.no-round:before {
  background-size: 0 0, auto;
}
.no-round:after {
  content: none;
}
@keyframes p{
  from{--p:0}
}
/* -----END PIE CHART----- */

#chart {
  background-color: var(--main-color-black);
  color: #fff;
}
.contain {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 215px;
}
.about {
  margin: 110px 0 80px;
}
.chart {
  display: flex;
  flex-direction: row;
}
.info {
  margin-right: 40px;
}
span {
  color: var(--main-color-yellow);
  font-weight: 700;
  font-size: 1.2rem;
}
p {
  color: rgb(204, 202, 202);
  font-size: 1.2rem;
}
hr {
  width: 10%;
  height: 1px;
  background-color: var(--main-color-yellow);
}
h2 {
  font-size: 2.6rem;
  font-weight: 500;
  color: #fff;
}
.chart__pie p {
  text-align: center;
}
</style>
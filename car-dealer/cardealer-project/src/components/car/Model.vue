<template>
<div id="model">
    <div class="push__black"></div>
    <div class="contain">
        <div class="model">
            <h1>Các dòng xe BMW</h1>
            <div class="model__type">
                <button class="btn__option">Tất cả các dòng xe</button>
                <button class="btn__option">MERCEDES-EQ</button>
                <button class="btn__option">AMG</button>
                <button class="btn__option">MAYBACH</button>
                <button class="btn__option">Các dòng xe mới <font-awesome-icon icon="fa-regular fa-star" /></button>
            </div>
        </div>
        <div class="items">
            <div class="row">
            <div class="col-3">
                <h6>Loại nhiên liệu</h6>
                <label>
                    <input name="type" type="checkbox" value="Điện"> Điện
                </label>
                <h6 class="h6__car">Loại thân xe</h6>
                <div class="option__car">
                    <button id="name__car">
                        <span class="name__car">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.9 25.5" class="car"><path d="M12.559 14.698c-3.01 0-5.401 2.391-5.401 5.401S9.549 25.5 12.559 25.5s5.401-2.391 5.401-5.401c-.089-3.01-2.479-5.401-5.401-5.401zm0 8.766c-1.859 0-3.453-1.505-3.453-3.453 0-1.859 1.505-3.453 3.453-3.453s3.453 1.505 3.453 3.453c-.088 1.947-1.593 3.453-3.453 3.453z"></path><circle cx="12.559" cy="20.099" r="2.479"></circle><path d="M76.66 13.193l-.885-3.984.443-1.505-7.083-1.151S58.333 1.152 56.209.887C49.215.002 40.361-.353 34.163.976c0 0-2.922 1.062-11.156 6.817 0 0-13.458.885-18.416 2.745l-2.036.797-2.125 3.01.177 2.125-.62.708s.443 3.896.354 3.896l5.666.974h.177a7.38 7.38 0 01-.266-1.948c0-3.63 3.01-6.64 6.64-6.64s6.64 3.01 6.64 6.64c0 .708-.089 1.328-.266 1.948h37.806a6.911 6.911 0 01-.266-1.948c0-3.63 3.01-6.64 6.64-6.64s6.64 3.01 6.64 6.64c0 .443 0 .797-.089 1.151h.266l7.526-1.24.443-5.755c.002 0-.529-.443-1.238-1.063zM5.034 14.521l-3.01 1.151s.62-2.125 2.036-3.01c.796-.443 3.541-1.062 3.541-1.062l-2.567 2.921zm57.992-5.578c-6.64.708-14.874.531-30.191 1.328-5.578.266-10.005.443-10.713.531-3.01.266-9.031.354-10.89.62 2.302-.885 7.88-1.417 12.395-1.594 5.047-3.719 9.562-6.552 10.89-6.906 1.417-.443 4.515-1.062 8.677-.974l-.62 7.083c.885 0 2.568-.089 2.656-.089l.62-6.817c2.479.089 7.968.354 10.447.885l-.443 5.578c.266 0 1.417 0 1.859-.089l.443-5.047c4.692 2.125 7.614 5.312 7.614 5.312 0-.086-1.062.002-2.744.179z"></path><path d="M63.026 14.698c-3.01 0-5.401 2.391-5.401 5.401s2.391 5.401 5.401 5.401 5.401-2.391 5.401-5.401-2.391-5.401-5.401-5.401zm0 8.766c-1.859 0-3.453-1.505-3.453-3.453 0-1.859 1.505-3.453 3.453-3.453 1.859 0 3.453 1.505 3.453 3.453 0 1.947-1.594 3.453-3.453 3.453z"></path><circle cx="63.026" cy="20.099" r="2.479"></circle></svg>
                            Sedans
                        </span>
                    </button>
                    <button id="name__car">
                        <span class="name__car">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.271 30.626" class="car"><path d="M14.504 17.49c-3.649 0-6.568 2.919-6.568 6.568s2.919 6.568 6.568 6.568 6.568-2.919 6.568-6.568-2.92-6.568-6.568-6.568zm0 10.764c-2.372 0-4.287-1.916-4.287-4.287s1.916-4.287 4.287-4.287 4.287 1.916 4.287 4.287c0 2.463-1.916 4.287-4.287 4.287z"></path><path d="M14.504 20.683c-1.824 0-3.284 1.459-3.284 3.284s1.459 3.284 3.284 3.284 3.284-1.459 3.284-3.284c.091-1.733-1.46-3.284-3.284-3.284z"></path><path d="M79.085 15.392l-.091-3.74-3.831-8.666.73-.821-.183-1.094C68.778.159 35.757-.753 33.568.98c-4.378 3.466-8.574 7.571-8.574 7.571L4.196 11.288l-2.737 2.189L0 16.578l.821 1.459-.73.547 1.003 5.108 5.747.821c-.091-.547-.182-1.186-.182-1.733 0-4.287 3.557-7.845 7.845-7.845s7.845 3.557 7.845 7.845c0 .821-.182 1.733-.365 2.463h36.122c0-.091 0-.274-.091-.365a7.132 7.132 0 01-.274-2.007c0-4.378 3.557-7.936 7.936-7.936s7.936 3.557 7.936 7.936v.912l6.203-1.824.456-4.835-1.187-1.732zM4.561 16.578l-2.554.73 1.459-3.101 2.645-1.003 1.916 1.186-3.466 2.188zm6.75-3.557s2.919-.912 14.047-1.551c4.835-4.561 8.027-7.662 9.578-8.757 2.919-.912 11.767-.547 11.767-.547l-.639 8.392c1.186-.091 2.463-.091 3.649-.182l.547-8.301h12.406l2.007 7.845h1.733l-2.007-7.753 6.659.365 2.919 5.473-.456 2.098s-1.277.182-3.101.365c-1.916.182-4.561.365-7.753.456 0 0-28.642.912-35.848 1.459-8.119.638-15.508.638-15.508.638z"></path><path d="M65.677 17.49c-3.649 0-6.568 2.919-6.568 6.568s2.919 6.568 6.568 6.568c3.649 0 6.568-2.919 6.568-6.568s-2.92-6.568-6.568-6.568zm0 10.764c-2.372 0-4.287-1.916-4.287-4.287s1.916-4.287 4.287-4.287 4.287 1.916 4.287 4.287c0 2.463-1.916 4.287-4.287 4.287z"></path><path d="M65.677 20.683c-1.824 0-3.284 1.459-3.284 3.284s1.459 3.284 3.284 3.284 3.284-1.459 3.284-3.284c.091-1.733-1.46-3.284-3.284-3.284z"></path></svg>
                            Xe địa hình / SUV
                        </span>
                    </button>
                    <button id="name__car">
                        <span class="name__car">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.912 25.673" class="car"><path d="M13.016 17.673c-1.379 0-2.574 1.195-2.574 2.574 0 .368.092.736.276 1.103.46.828 1.287 1.471 2.299 1.471s1.931-.552 2.299-1.471c.184-.368.276-.736.276-1.103-.001-1.47-1.105-2.574-2.576-2.574zm52.777-3.034c-3.034 0-5.517 2.483-5.517 5.517s2.483 5.517 5.517 5.517c3.034 0 5.517-2.483 5.517-5.517s-2.483-5.517-5.517-5.517zm0 9.011c-1.931 0-3.494-1.563-3.494-3.494s1.563-3.494 3.494-3.494c1.931 0 3.494 1.563 3.494 3.494s-1.563 3.494-3.494 3.494z"></path><path d="M13.016 14.639c-3.034 0-5.517 2.483-5.517 5.517s2.483 5.517 5.517 5.517 5.517-2.483 5.517-5.517-2.482-5.517-5.517-5.517zm0 9.011c-1.931 0-3.494-1.563-3.494-3.494s1.563-3.494 3.494-3.494 3.494 1.563 3.494 3.494-1.563 3.494-3.494 3.494z"></path><path d="M79.625 13.076l-.919-4.138.46-1.563-7.265-1.195C59.581.204 47.536-1.267 36.962 1.031c0 0-3.034.644-11.493 6.436 0 0-15.723.919-20.78 2.758l-2.115.828L.46 14.179l.184 2.207-.644.828s.46 4.046.368 4.046l5.885 1.103h.184c-.184-.644-.368-1.379-.368-2.115 0-3.77 3.034-6.804 6.804-6.804s6.804 3.034 6.804 6.804c0 .736-.092 1.471-.368 2.115h.46l39.077-.092.184-.092a7.656 7.656 0 01-.276-2.023 6.788 6.788 0 016.804-6.804 6.788 6.788 0 016.804 6.804c0 .46 0 .828-.092 1.195h.276c1.287-.276 7.723-1.287 7.723-1.287l.644-5.885c-.001 0-.553-.459-1.288-1.103zM5.057 14.271l-3.126 1.195s.644-2.207 2.115-3.034c.828-.46 3.586-1.103 3.586-1.103l-2.575 2.942zm62.155-5.7c-1.655.184-4.046.368-6.896.46-15.907.46-35.767 1.563-35.951 1.563-4.046.184-9.654.552-9.654.552s2.666-1.103 11.677-1.563c4.505-3.77 10.206-6.528 10.206-6.528 2.85-.828 6.988-1.195 7.172-1.195 2.023-.184 4.138-.092 6.344.092l-.644 6.62c1.287-.092 2.483-.092 3.586-.092l.644-6.068c4.689.736 9.195 2.207 12.137 3.954.276.184-3.31 1.379-4.781 1.839 5.057-.276 8.735.092 8.735.092s-.92.09-2.575.274z"></path><circle cx="65.793" cy="20.156" r="2.574"></circle></svg>
                            Xe Coupe
                        </span>
                    </button>
                    <button id="name__car">
                        <span class="name__car">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.4 32.8" class="car"><path d="M72.875 23.625a3.013 3.013 0 110 6.026 3.013 3.013 0 010-6.026zm6.163 3.013c0 3.351-2.703 6.162-6.162 6.162-3.351 0-6.162-2.703-6.162-6.162 0-3.351 2.703-6.162 6.162-6.162 3.35 0 6.162 2.703 6.162 6.162zm-2.055 0a4.106 4.106 0 00-4.108-4.108 4.106 4.106 0 00-4.108 4.108 4.106 4.106 0 004.108 4.108 4.106 4.106 0 004.108-4.108zm-66.306 0a3.013 3.013 0 106.026 0 3.013 3.013 0 00-6.026 0zm9.175 0c0 3.351-2.703 6.162-6.162 6.162-3.351 0-6.162-2.703-6.162-6.162 0-3.351 2.703-6.162 6.162-6.162 3.351 0 6.162 2.703 6.162 6.162zm-2.054 0a4.106 4.106 0 00-4.108-4.108 4.106 4.106 0 00-4.108 4.108 4.106 4.106 0 004.108 4.108 4.106 4.106 0 004.108-4.108zM86.4 24.814l-.463 2.207-5.534 1.063a7.634 7.634 0 00-1.697-6.419c-.05-.061-.103-.12-.155-.179l-.002-.002a7.55 7.55 0 00-11.326-.025 7.635 7.635 0 00-2.014 5.178c0 .715.1 1.407.283 2.064-2.678.022-37.721.672-44.645.678a7.666 7.666 0 10-14.315.008L.483 28.102 0 22.797l1.092-1.274-.303-2.124s1.062-3.521 1.358-3.891c2.647-1.633 14.44-4.846 14.44-4.846 9.417-6.854 9.43-6.518 15.024-9.161C36.526-.38 80.697-.38 81.971 1.198c3.732 5.188 3.519 21.418 3.519 21.418l.91 2.198zM8.282 15.121l-4.945 1.957-1.148 3.374 5.456-3.397.637-1.934zm72.658-4.555s-.456-4.296-4.013-7.208c-1.213-.719-7.205-1.223-13.072-1.348l.887 7.881-1.731.08-.933-7.837c-8.383-.077-17.887.155-18.878.155l.245 8.531c-1.198.092-2.809.146-4.007.238l.243-8.708s-4.576.141-7.524 1.062c-2.913 1.335-9.101 4.482-14.046 8.911-7.473 1.896-8.216 2.141-8.216 2.141 14.405-1.83 58.272-3.939 71.045-3.898z"></path></svg>
                            Xe đa dụng
                        </span>
                    </button>
                </div>
                <hr>
                <span>
                    <button class="btn__all">Xem tất cả</button>
                </span>
            </div>
            <div class="col-9 row list__items">
                <div>{{ type }}</div>
                <hr>
                <div class="divide">
                    <div class="item">
                        <span class="item__car">A-Class</span>
                        <div class="price">Giá từ 2.429.000đ</div>
                        <img src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtGyItsd2sDcUfp8qXGEubYJ0l36xOB2NbFbApRnyI5ux5xQC31SFkzNBTwm7jAeShKV5YL%25vq4t9yLRgY6Yax%25XqrH1yC%25n8w0zEoiZB%25YM4FAOFTg9LQO6PDacpSeWHyhtsd8oxcUfDrNXGE5YrJbXSqxVKnn8wPbIoTnlR4M6oeIrTg97hN6PD4cmSeWq17tsdUvTcUfGLqXGE0nYJ0lBDtOB2Mr1bA4wHEcmqN1Iw4jiCFqpnIu2fzzjFm93Su9Q6DF1s1n2nvligKfLlCVz9Xu9&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700" alt="">
                        <a href="">Tìm hiểu thêm</a>
                    </div>
                    <div class="item">
                        <span class="item__car">A-Class</span>
                        <div class="price">Giá từ 2.429.000đ</div>
                        <img src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtGyItsd2sDcUfp8qXGEubYJ0l36xOB2NbFbApRnyI5ux5xQC31SFkzNBTwm7jAeShKV5YL%25vq4t9yLRgY6Yax%25XqrH1yC%25n8w0zEoiZB%25YM4FAOFTg9LQO6PDacpSeWHyhtsd8oxcUfDrNXGE5YrJbXSqxVKnn8wPbIoTnlR4M6oeIrTg97hN6PD4cmSeWq17tsdUvTcUfGLqXGE0nYJ0lBDtOB2Mr1bA4wHEcmqN1Iw4jiCFqpnIu2fzzjFm93Su9Q6DF1s1n2nvligKfLlCVz9Xu9&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700" alt="">
                        <a href="">Tìm hiểu thêm</a>
                    </div>
                    <div class="item">
                        <span class="item__car">A-Class</span>
                        <div class="price">Giá từ 2.429.000đ</div>
                        <img src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtGyItsd2sDcUfp8qXGEubYJ0l36xOB2NbFbApRnyI5ux5xQC31SFkzNBTwm7jAeShKV5YL%25vq4t9yLRgY6Yax%25XqrH1yC%25n8w0zEoiZB%25YM4FAOFTg9LQO6PDacpSeWHyhtsd8oxcUfDrNXGE5YrJbXSqxVKnn8wPbIoTnlR4M6oeIrTg97hN6PD4cmSeWq17tsdUvTcUfGLqXGE0nYJ0lBDtOB2Mr1bA4wHEcmqN1Iw4jiCFqpnIu2fzzjFm93Su9Q6DF1s1n2nvligKfLlCVz9Xu9&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700" alt="">
                        <a href="">Tìm hiểu thêm</a>
                    </div>
                    <div class="item">
                        <span class="item__car">A-Class</span>
                        <div class="price">Giá từ 2.429.000đ</div>
                        <img src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtGyItsd2sDcUfp8qXGEubYJ0l36xOB2NbFbApRnyI5ux5xQC31SFkzNBTwm7jAeShKV5YL%25vq4t9yLRgY6Yax%25XqrH1yC%25n8w0zEoiZB%25YM4FAOFTg9LQO6PDacpSeWHyhtsd8oxcUfDrNXGE5YrJbXSqxVKnn8wPbIoTnlR4M6oeIrTg97hN6PD4cmSeWq17tsdUvTcUfGLqXGE0nYJ0lBDtOB2Mr1bA4wHEcmqN1Iw4jiCFqpnIu2fzzjFm93Su9Q6DF1s1n2nvligKfLlCVz9Xu9&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700" alt="">
                        <a href="">Tìm hiểu thêm</a>
                    </div>
                    <div class="item">
                        <span class="item__car">A-Class</span>
                        <div class="price">Giá từ 2.429.000đ</div>
                        <img src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtGyItsd2sDcUfp8qXGEubYJ0l36xOB2NbFbApRnyI5ux5xQC31SFkzNBTwm7jAeShKV5YL%25vq4t9yLRgY6Yax%25XqrH1yC%25n8w0zEoiZB%25YM4FAOFTg9LQO6PDacpSeWHyhtsd8oxcUfDrNXGE5YrJbXSqxVKnn8wPbIoTnlR4M6oeIrTg97hN6PD4cmSeWq17tsdUvTcUfGLqXGE0nYJ0lBDtOB2Mr1bA4wHEcmqN1Iw4jiCFqpnIu2fzzjFm93Su9Q6DF1s1n2nvligKfLlCVz9Xu9&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700" alt="">
                        <a href="">Tìm hiểu thêm</a>
                    </div>
                    <div class="item">
                        <span class="item__car">A-Class</span>
                        <div class="price">Giá từ 2.429.000đ</div>
                        <img src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtGyItsd2sDcUfp8qXGEubYJ0l36xOB2NbFbApRnyI5ux5xQC31SFkzNBTwm7jAeShKV5YL%25vq4t9yLRgY6Yax%25XqrH1yC%25n8w0zEoiZB%25YM4FAOFTg9LQO6PDacpSeWHyhtsd8oxcUfDrNXGE5YrJbXSqxVKnn8wPbIoTnlR4M6oeIrTg97hN6PD4cmSeWq17tsdUvTcUfGLqXGE0nYJ0lBDtOB2Mr1bA4wHEcmqN1Iw4jiCFqpnIu2fzzjFm93Su9Q6DF1s1n2nvligKfLlCVz9Xu9&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700" alt="">
                        <a href="">Tìm hiểu thêm</a>
                    </div>  
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#model {
    
}
.push__black {
    background-color: #212324;
    height: 110px;
}
.contain {
    margin: 60px 120px;
}
.model__type {
    margin-top: 50px;
}
.btn__option {
    padding: 12px 40px;
    font-weight: 500;
    height: 100%;
    outline: none;
    border: 1px solid #bbb;
    background-color: #fff;
    margin-right: -6px;
    border-radius: 0px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
}
.btn__option:focus {
    background-color: var(--main-color-yellow);
    border: 1px solid var(--main-color-yellow);
    color: #fff;
    outline: none;
    box-shadow: 0px 1px rgba(250, 185, 21, 0.5);
}
.items {
    margin-top: 20px;
}
label {
    margin-bottom: 40px;
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
}
h6 {
    margin-bottom: 15px;
    font-weight: 700;
}
.h6__car {
    margin-top: 30px;
}
input[type=checkbox] {
    position: absolute;
    top: 2px;
    left: 0;
    width: 20px;
    height: 20px;
    outline: none;
    border: 1px solid #bbb;
}
.option__car {
    display: flex;
    flex-direction: column;
}
#name__car {
    display: flex;
    justify-content: start;
    border: none;
    background-color: #fff;
    outline: none;
    cursor: pointer;
    width: 200px;
}
.name__car {
    margin-bottom: 15px;
}
.name__car:hover {
    color: var(--main-color-yellow);
}
.car {
    width: 40px;
}
.btn__all {
    background-color: #fff;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.2rem;
    outline: none;
}
/* --------- */
.list__items {
    display: flex;
    flex-direction: column;
}
.divide {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 285px;
    margin: 10px;
    padding: 20px 0 80px;
    position: relative;
    transition: all .3s linear;
}
a {
    background-color: #fff;
    color: #000;
    text-decoration: none;
    padding: 10px 80px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
    bottom: 10px;
    display: none;
    position: absolute;
}
.item:hover {
    background-color: #f8f8f8;
}
.item:hover a {
    display: block;
}
.item__car {
    font-size: 1.3rem;
}
.price {
    color: #bbb;
}
img {
    width: 300px;
}
</style>
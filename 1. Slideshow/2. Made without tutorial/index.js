body {
    background-color: rgb(255, 255, 255);
    margin-top: 100px;
}

.carousel-container {
    width: 600px;
    height: 400px;
    position: relative;
    margin: 0 auto;
}

.navigation .prev {
    position: absolute;
    z-index: 10;
    font-size: 25px;
    top: 40%;
    left: 10px;
    font-weight: 700;
}

.navigation .next {
    right: 10px;
    position: absolute;
    font-size: 25px;
    z-index: 10;
    top: 40%;
}

.navigation .nav-btn {
    background: rgba(255, 255, 255, 0.55);
    cursor: pointer;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
}

.navigation .nav-btn:hover {
    background: white;
}

.carousel {
    margin-top: 20px;
    transition: all 0.3s ease;
}

.carousel img {
    width: 100%;
    transition: all 0.3s ease;
    border: 8px solid white;
}

.item {
    position: absolute;
    display: none;
}

.main {
    display: block;
}

.caption {
    position: absolute;
    bottom: 0;
    width: 103%;
    display: flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    background: rgba(0, 0, 0, 0.3);
    height: 35px;
}

.dot {
    height: 15px;
    width: 15px;
    background-color: darkgray;
    border-radius: 50%;
    display: inline-block;
}

.active, .dot:hover {
    cursor: pointer;
    background-color: gray;
}

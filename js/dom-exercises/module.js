import createHamburgerMenu from "./hamburger.js";
import scrollSpy from "./scroll_spy.js";
import toggleMode from "./toggle.js";
import createScrollButton from "./scroll.js";
import isUserOnline from "./user-online.js";
import runClock, { changeAlarmStatus } from "./clock.js";
import drawCanvas from "./keyboard-events.js";
import countDown from "./countdown.js";
import loadResponsiveSection from "./responsive-js.js";
import responsiveTester from "./responsive-tester.js";
import detectUser from "./user-detection.js";
import detectCamera from "./camera-detection.js";
import detectLocation from "./user-location.js";
import filterImages from "./search.js";
import pickWinner from "./raffle.js";
import imageSlider from "./responsive_slider.js";
import handleSmartVideo from "./smart_video.js";
import validateForm from "./validate_form.js";
import readText from "./text_reader.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    createHamburgerMenu(
        d.querySelector(".hamburger"),
        d.getElementById("hamburger-menu")
    );

    scrollSpy("section", "hamburger-menu");
    toggleMode("toggle-colors");
    createScrollButton(".scroll");

    let [clockBtn, utcClockBtn] = d.querySelectorAll(".clock-status");
    runClock(
        d.querySelector(".current-time"),
        d.querySelector(".utc-time"),
        clockBtn, 
        utcClockBtn
    );
    for (let alarmBtn of d.querySelectorAll(".alarm-status")) {
        changeAlarmStatus(alarmBtn, d.getElementById("alarm-sound"));
    }

    drawCanvas("#drawing-canvas");
    countDown("#start-countdown");
    loadResponsiveSection("responsive-js");
    responsiveTester("responsive-form");
    detectUser("user-detection");
    detectCamera("camera-detection");
    detectLocation("user-location");
    filterImages("cards", "search-bar");
    imageSlider(".slide", "prev", "next");
    handleSmartVideo("smart-video");
    validateForm();
    readText("reader");
}); 

isUserOnline();
pickWinner("pick-winner", "cards"); 
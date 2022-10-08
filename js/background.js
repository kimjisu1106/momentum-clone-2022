const solidColor = ["#6fffc4",
    "#75ffca",
    "#79ffce",
    "#96c7ed",
    "#98ebdc",
    "#9df0e1",
    "#a0d1f7",
    "#a2f5e6",
    "#a5ffe4",
    "#a7faeb",
    "#aadbff",
    "#aaebaa",
    "#acf3ff",
    "#acffef",
    "#afffee",
    "#b0f7ff",
    "#b4e5ff",
    "#b4f0b4",
    "#b4fbff",
    "#b9ffff",
    "#becdff",
    "#becdff",
    "#beefff",
    "#bef5be",
    "#c0ffff",
    "#c8d7ff",
    "#c8d7ff",
    "#c8fac8",
    "#d2e1ff",
    "#d2e1ff",
    "#d2ffd2",
    "#dcebff",
    "#dcebff",
    "#dcffdc",
    "#e1ffe1",
    "#e6ffe6",
    "#e8f5ff",
    "#e8f5ff",
    "#ebffeb",
    "#f0fff0",
    "#ff9e7d",
    "#ff9e9b",
    "#ffa887",
    "#ffa98f",
    "#ffaaaf",
    "#ffb291",
    "#ffb399",
    "#ffb4b9",
    "#ffb6c1",
    "#ffbbc6",
    "#ffbc9b",
    "#ffbda3",
    "#ffbec3",
    "#ffbeff",
    "#ffc0cb",
    "#ffc5d0",
    "#ffc6a5",
    "#ffc7ad",
    "#ffc8cd",
    "#ffc8ff",
    "#ffcad5",
    "#ffcfda",
    "#ffd0a1",
    "#ffd1b7",
    "#ffd2ff",
    "#ffd4df",
    "#ffd5a6",
    "#ffd9e4",
    "#ffdaab",
    "#ffdbc1",
    "#ffdce1",
    "#ffdcff",
    "#ffdee9",
    "#ffdfb0",
    "#ffe0c6",
    "#ffe1e6",
    "#ffe3ee",
    "#ffe4b5",
    "#ffe5cb",
    "#ffe6eb",
    "#ffead0",
    "#ffebf0",
    "#ffefd5",
    "#fff0f5"];
const landscapeImg = ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg","010.jpg"];
const bgTypeForm = document.querySelector("#bg-type");
const bgTypeSolidColor = document.querySelector("#bgSolidColor");
const bgTypeLandscapeImg = document.querySelector("#bgLandscapeImg");
const bgImg = document.querySelector("img#background-image");

function bgSolidColor() {
    const randomColor = solidColor[Math.floor(Math.random() * solidColor.length)];
    document.body.style = `background: ${randomColor}`;
    bgImg.classList.add(HIDDEN_CLASSNAME);
}

function bgLandscapeImg() {
    const randomImg = landscapeImg[Math.floor(Math.random() * landscapeImg.length)];
    bgImg.src=`img/${randomImg}`;
    console.log(bgImg);
    bgImg.classList.remove(HIDDEN_CLASSNAME);
    document.body.style = "white";
}

function bgType(event) {
    event.preventDefault();
    if (bgTypeSolidColor.checked === true) {
        bgSolidColor();
    } else if (bgTypeLandscapeImg.checked === true) {
        bgLandscapeImg();
    }
}

bgTypeForm.addEventListener("submit",bgType);

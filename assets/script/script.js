const $headings = document.querySelectorAll('h3');
const $loader = document.querySelector('#loader')
const $mainButton = document.querySelector('#mainBTN');
const $allLinks = document.querySelectorAll('.hiddenBTN');
const $monthsButtons = document.querySelectorAll('.monthsBTN');

function clickHandler() {
    let checkedDaysArray = [];
    $loader.style.display = "inline-block";
    let secondsLeft = 1;
    setInterval(function () {
        secondsLeft --;
        if (secondsLeft === 0) {
            clearInterval();
            $mainButton.style.display = "none";
            $headings[0].style.display = "none";
            $headings[1].style.display = "inherit";
            $monthsButtons.forEach((element) => {
                element.style.display = "inherit";
            })
            $allLinks.forEach((element, index) => {
                const currentDay = moment();
                checkedDaysArray.push(currentDay.add((7*index)+1, 'days').format('YYYY-MM-DD'));
            })
            $allLinks.forEach((element, index) => {
                element.setAttribute("href", `https://www.kayak.com/flights/DAC-PHX/${checkedDaysArray[index]}-flexible-3days?fs=cfc=1;bfc=2&sort=bestflight_a`);
                element.setAttribute("target", "_blank");
                // element.click();
            });
            $monthsButtons.forEach((button, i) => {
                button.addEventListener("click", () => {
                    for (j=0; j<4; j++) {
                        $allLinks[j+(i*4)].click();
                    }
                })
            });
        }
    }, 1500);
}

$mainButton.addEventListener("click", clickHandler);
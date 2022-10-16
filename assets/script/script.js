$mainButton = document.querySelector('#mainBTN');
$allButtons = document.querySelectorAll('.hiddenbtn');

function clickHandler() {
    let checkedDaysArray = [];
    $allButtons.forEach((element, index) => {
        let currentDay = moment();
        checkedDaysArray.push(currentDay.add((7*index)+1, 'days').format('YYYY-MM-DD'));
    })
    $allButtons.forEach((element, index) => {
        element.setAttribute("href", `https://www.kayak.com/flights/DAC-PHX/${checkedDaysArray[index]}-flexible-3days?fs=cfc=1;bfc=2&sort=bestflight_a`);
        element.setAttribute("target", "_blank");
        element.click();
    });
}

$mainButton.addEventListener("click", clickHandler);
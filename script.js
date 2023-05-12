const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('input[type="button"]');

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', () => {
        const buttonValue = buttons[i].value;

        switch (buttonValue) {
            case '=':
                display.value = eval(display.value);
                break;
            case 'AC':
                display.value = '';
                break;
            case 'DE':
                display.value = display.value.slice(0, -1);
                break;
            case '√':
                display.value = Math.sqrt((display.value));
                break;
            default:
                display.value = display.value + buttonValue;
        }
    });
}
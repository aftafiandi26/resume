const checkbox = document.querySelector('#toggle');
const htmlMode = document.querySelector('html');
const bodyGround = document.querySelector('body');

//skill 
const colored = document.querySelector('#color');
const darked = document.querySelector('#darked');

//summary
const layoutScreen = document.queryCommandValue('test').valueOf = +window.innerWidth;
const addFlex = document.querySelector('#addFlex');
const darkAddFlex = document.querySelector('#darkAddFlex');

checkbox.addEventListener('click', function() {
    checkbox.checked ? htmlMode.classList.add('dark') : htmlMode.classList.remove('dark');

    checkbox.checked ? bodyGround.classList.add('bg-gray-300') : bodyGround.classList.remove('bg-gray-300');

    checkbox.checked ? colored.classList.add('hidden') : colored.classList.remove('hidden');

    checkbox.checked ? darked.classList.remove('hidden') : darked.classList.add('hidden');

    // checkbox.checked ? darked.classList.add('flex') : darked.classList.remove('flex');
});

const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

if (layoutScreen <= '640') {
    addFlex.classList.add('hidden');
    darkAddFlex.classList.add('hidden');
} else {
    addFlex.classList.remove('hidden');
    darkAddFlex.classList.remove('hidden');
}
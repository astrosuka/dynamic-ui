export default function dropDownMenu() {
  const menu = document.querySelectorAll('.drop-down-menu');

  menu.forEach((i) => {
    const dropDown = i.lastElementChild;
    i.addEventListener('mouseenter', () => {
      dropDown.classList.remove('hidden');
    });
    i.addEventListener('mouseleave', () => {
      dropDown.classList.add('hidden');
    });
  });
}

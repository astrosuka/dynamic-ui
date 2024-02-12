export default function mobileMenu() {
  const menu = document.querySelectorAll('.mobile-menu');

  menu.forEach((i) => {
    const dropDown = i.lastElementChild;
    i.addEventListener('click', () => {
      dropDown.classList.toggle('hidden');
    });
  });
}

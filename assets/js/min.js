const toggle = document.querySelector('.menu_toggle_con')
const navigation = document.querySelector('.middle_nav_con')

toggle.addEventListener('click', () => {
  
  navigation.classList.toggle('active')
})
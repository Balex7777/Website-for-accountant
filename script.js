const anchors = document.querySelectorAll('a[href*="#"]')
const links = document.querySelectorAll('.head-flex > a')
const navigation = document.querySelector('.nav')
const header = document.querySelector('.head-stick')
let isNavOpen = false

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

navigation.addEventListener("click", function(){
  if (!isNavOpen){
    navigation.classList.add("close-btn")
    header.style.height = '100vh'
  }else{
    navigation.classList.remove("close-btn")
    header.style.height = '50px'
  }
  isNavOpen = !isNavOpen
})

for (let link of links) {
  link.addEventListener('click', function (e) {
    navigation.classList.remove("close-btn")
    header.style.height = '50px'
    isNavOpen = false
  })
}

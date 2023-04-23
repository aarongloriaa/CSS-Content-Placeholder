const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_main_characters.png/370px-SpongeBob_SquarePants_main_characters.png" alt="" />'
  title.innerHTML = 'SpongeBob SquarePants'
  excerpt.innerHTML =
    'SpongeBob is a good-natured, naive, and enthusiastic sea sponge.'
  profile_img.innerHTML =
    '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png" alt="" />'
  name.innerHTML = 'Sponge Bob'
  date.innerHTML = 'May 1, 1999'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
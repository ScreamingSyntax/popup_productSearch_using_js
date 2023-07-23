const randomWordsList = [
    "apple",
    "banana",
    "orange",
    "grape",
    "mango",
    "watermelon",
    "kiwi",
    "pineapple",
    "strawberry",
    "blueberry",
    "peach",
    "apricot",
    "pear",
    "plum",
    "cherry",
    "lemon",
    "lime",
    "coconut",
    "pomegranate",
    "raspberry",
    "blackberry",
    "cranberry",
    "melon",
    "fig",
    "date",
    "guava",
    "passionfruit",
    "papaya",
    "lychee",
    "dragonfruit",
    "kiwifruit",
    "persimmon",
    "apricot",
    "nectarine",
    "avocado",
    "durian",
    "mangosteen",
    "starfruit",
    "jackfruit",
    "tamarind",
    "breadfruit",
    "carambola",
    "rhubarb",
    "kumquat",
    "currant",
    "boysenberry",
    "elderberry",
    "gooseberry",
    "tangerine",
    "grapefruit",
    "clementine",
    "satsuma",
    "pomelo",
    "tangelo",
    "litchi",
    "quince",
    "cantaloupe",
    "honeydew",
    "casaba",
    "cucumber",
    "zucchini",
    "eggplant",
    "bellpepper",
    "carrot",
    "broccoli",
    "cauliflower",
    "cabbage",
    "lettuce",
    "spinach",
    "kale",
    "potato",
    "sweetpotato",
    "yam",
    "beet",
    "radish",
    "turnip",
    "parsnip",
    "rutabaga",
    "onion",
    "garlic",
    "shallot",
    "leek",
    "celery",
    "asparagus",
    "artichoke",
    "tomato",
    "cucumber",
    "zucchini",
    "pepper",
    "chili",
    "mushroom",
    "lemon",
    "lime",
    "coconut",
    "pomegranate",
    "persimmon",
    "tangerine",
    "watermelon",
    "kale",
    "pineapple",
    "mango",
    "cantaloupe",
];
let searchItems = document.querySelector(".search-item")
const searchScreen = document.querySelector('.search-screen');
// const searchItem = document.querySelector('.search-list')
let active = false;
function search(){
  new_list = []
    searchItems.innerHTML=""
    searchItems.style.height='auto';
    searchItems.style.maxHeight='300px';
    searchItems.style.opacity='2';
    if(searchScreen.value == ''){
        console.log("No Values")
        searchItems.style.height='auto';
        searchItems.style.opacity='0';
    }
    else{
    const value = searchScreen.value.toLowerCase()
    randomWordsList.forEach((element)=>{
        if(element.includes(value)){
            console.log(element)
            const newSearchItem = document.createElement('a')
            newSearchItem.classList.add('search-list')
            newSearchItem.innerText=element
            searchItems.appendChild(newSearchItem)
        }
    })
    console.log(new_list)
}
}
const nav = document.querySelector(".nav")
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelector(".nav-items");
const menuFirst = document.querySelector(".menu-first");
const menuSecond = document.querySelector(".menu-second");
const menuThird = document.querySelector(".menu-third");

function menu(){
    if(!active){
    active=!active;
    nav.style.borderBottom="none"
    console.log(active)
    navItems.style.top="80px"
    console.log("Nav Menu Clicked")
    menuFirst.style.transform = "rotate(50deg) translate(4.3px,5px)"
    menuSecond.style.transform = "rotate(135deg)"
    menuThird.style.display="none"
    }
    else{
    nav.style.borderBottom=""
    menuFirst.style.transform = ""
    menuSecond.style.transform = ""
    menuThird.style.display=""
    active=!active;
    navItems.style.top=""
    }
}
navMenu.addEventListener('click',(event)=>{
    menu()
})
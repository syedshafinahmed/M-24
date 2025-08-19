const sections = document.getElementsByTagName('section');
// getElementsByTagName thakle HTML collection dey
// const sections = document.querySelectorAll('section');
// querySelectorAll thakle nodelist dey
for(const section of sections){
    // console.log(section);
    // section.style.backgroundColor = 'salmon';
    // section.style.border = 'gold';
    section.classList.add('demo');
}



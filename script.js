const pawContainer = document.getElementById('paw');

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const pawAlert = () => {
    const doubloons = randomIntFromInterval(1000, 10000)
    return alert(`You got ${doubloons} doubloons!)))`)
}

const hoverEnd = () => {
    setTimeout(() => {
        pawContainer.style.right = 0
    }, 995);
}


pawContainer.addEventListener('mouseover', hoverEnd);

pawContainer.addEventListener('click', pawAlert);
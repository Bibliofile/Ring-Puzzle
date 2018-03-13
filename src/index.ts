import css = require('./style.scss');

const style = document.head.appendChild(document.createElement('style'))
style.innerHTML = css;

let startTime = 0
const open = Array.from({ length: 8}).fill(false)
const buttons = Array.from(document.querySelectorAll('button'))

function canToggle(index: number): boolean {
    if (index < 1) return true
    if (index > open.length) return false
    return open[index - 1] && open.slice(0, index - 1).every(o => !o)
}

function toggle(index: number): void {
    if (canToggle(index)) {
        if (!startTime) startTime = Date.now()

        open[index] = !open[index]
        buttons[index].classList.toggle('out')

        const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
        if (open.every(Boolean) && confirm(`You won! It took you ${totalSeconds} seconds. Play again?`)) {
            location.reload()
        }
    }
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        toggle(index)
    })
})

document.addEventListener('keyup', event => {
    const key = +event.key
    if (Number.isNaN(key)) return

    toggle(key - 1)
})

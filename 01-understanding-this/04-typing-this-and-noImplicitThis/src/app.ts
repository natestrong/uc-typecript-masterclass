window.onload = () => {
    const elem = document.querySelector('.click') as HTMLAnchorElement

    function handleClick(this: HTMLAnchorElement, event: Event) {
        event.preventDefault()
        console.log(this)
    }

    elem.addEventListener('click', handleClick, false)
}

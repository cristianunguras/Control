// VARIABLES / FUNCIONES
let x = 0,
    y = 0


// mover coche con las flechas derecha o izquierda mientras tras haces scroll)
const coche_flechas = document.getElementById('coche'),
    derecha = () => coche.style.transform = `translateX(${x += 30}% rotate(90deg)`,
    izquierda = () => coche.style.transform = `translateX(${x -= 30}% rotate(90deg)`

// escuchar y mover coche con las flechas
document.addEventListener('keyup', evento => {
    switch (evento.key) {
        case 'ArrowRight':
            derecha()
            break
        case 'ArrowLeft':
            izquierda()
            break
    }
})

// mover coche hacia la meta final(scroll),mostrar metas y final
const coche_scroll = document.getElementById('coche'),
    scroll = () => {
        y = scrollY
        coche.style.transform = `translate(${x}%,${y}px) rotate(90deg)`
        if (scrollY >= 0 && scrollY <= 200) {
            const meta = document.createElement('p')
            meta.textContent = 'START CARRERA !!!'
            meta.style.fontSize = '3rem'
            meta.style.position = 'absolute'
            meta.style.top = '200px'
            meta.style.left = '0px'
            document.body.appendChild(meta)
        }
        if (scrollY >= 1000 && scrollY <= 1200) {
            const meta1 = document.createElement('p')
            meta1.textContent = 'META 1000 km !!!'
            meta1.style.fontSize = '3rem'
            meta1.style.position = 'absolute'
            meta1.style.top = '1200px'
            meta1.style.left = '0px'
            document.body.appendChild(meta1)
        }
        if (scrollY >= 2000 && scrollY <= 2200) {
            const meta2 = document.createElement('p')
            meta2.textContent = 'META 2000 km !!!'
            meta2.style.fontSize = '3rem'
            meta2.style.position = 'absolute'
            meta2.style.top = '2200px'
            meta2.style.left = '0px'
            document.body.appendChild(meta2)
        }
        if (scrollY >= 3000 && scrollY <= 3200) {
            const meta3 = document.createElement('p')
            meta3.textContent = 'META 3000 km !!!'
            meta3.style.fontSize = '3rem'
            meta3.style.position = 'absolute'
            meta3.style.top = '3200px'
            meta3.style.left = '0px'
            document.body.appendChild(meta3)
        }
        if (scrollY >= 4000 && scrollY <= 4700) {
            const meta4 = document.createElement('p')
            meta4.textContent = 'FINAL CARRERA !!!'
            meta4.style.fontSize = '3rem'
            meta4.style.position = 'absolute'
            meta4.style.top = `4600px`
            meta4.style.left = '0px'
            document.body.appendChild(meta4)
        }
    }

// escuchar y mover coche con scroll
document.addEventListener('scroll', () => {
    scroll()
})
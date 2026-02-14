// ==================== VARIABLES GLOBALES ====================
let currentScene = 1;
const music = document.getElementById('backgroundMusic');

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Intentar reproducir música (requiere interacción del usuario)
    document.addEventListener('click', playMusic, { once: true });
    
    // Configurar event listeners para la escena 1
    setupScene1();
}

function playMusic() {
    music.play().catch(err => {
        console.log('La reproducción automática fue bloqueada:', err);
    });
}

// ==================== ESCENA 1: SOBRE ====================
function setupScene1() {
    const envelope = document.getElementById('envelope');
    
    envelope.addEventListener('click', () => {
        openEnvelope();
    });
}

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.classList.add('opening');
    
    // Crear efecto de explosión de corazones
    createHeartBurst(envelope);
    
    // Transición a la siguiente escena
    setTimeout(() => {
        nextScene(2);
    }, 1000);
}

function createHeartBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Crear 20 corazones que explotan
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '♥';
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.color = `rgba(255, ${Math.random() * 100 + 100}, ${Math.random() * 100 + 150}, 1)`;
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        
        document.body.appendChild(heart);
        
        // Animar cada corazón
        const angle = (Math.PI * 2 * i) / 20;
        const velocity = Math.random() * 200 + 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        heart.animate([
            { 
                transform: 'translate(0, 0) scale(0) rotate(0deg)',
                opacity: 1
            },
            { 
                transform: `translate(${tx}px, ${ty}px) scale(1.5) rotate(${Math.random() * 360}deg)`,
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => {
            heart.remove();
        };
    }
}

// ==================== ESCENA 3: OSITO ====================
function setupScene3() {
    const teddyBear = document.getElementById('teddyBear');
    const heartSign = document.getElementById('heartSign');
    
    teddyBear.addEventListener('click', () => {
        heartSign.classList.add('show');
        
        // Añadir botón de continuar después de mostrar el mensaje
        setTimeout(() => {
            addContinueButton('scene3', 4);
        }, 800);
    });
}

// Función auxiliar para agregar botones de continuar
function addContinueButton(sceneId, nextSceneNum) {
    const scene = document.getElementById(sceneId);
    if (!scene.querySelector('.continue-btn-dynamic')) {
        const btn = document.createElement('button');
        btn.className = 'continue-btn continue-btn-dynamic';
        btn.textContent = 'Continuar ♥';
        btn.onclick = () => nextScene(nextSceneNum);
        scene.appendChild(btn);
        
        // Animar la aparición del botón
        setTimeout(() => {
            btn.style.animation = 'fadeIn 0.5s ease forwards';
        }, 50);
    }
}

// ==================== ESCENA 4: GATITO ====================
function setupScene4() {
    const kitten = document.getElementById('kitten');
    const heartMessage = document.getElementById('heartMessage');
    
    // El gatito aparece automáticamente al entrar a la escena
    setTimeout(() => {
        // Simular el "beso" del gatito
        kitten.style.animation = 'kittenAppear 1.5s ease forwards, kittenKiss 0.5s 1.5s ease';
        
        setTimeout(() => {
            heartMessage.classList.add('show');
            
            // Añadir botón después de mostrar el mensaje
            setTimeout(() => {
                addContinueButton('scene4', 5);
            }, 2000);
        }, 1800);
    }, 300);
}

// Añadir animación de beso del gatito al CSS dinámicamente
const kittenKissAnimation = `
@keyframes kittenKiss {
    0%, 100% { transform: translateX(0) scale(1.5); }
    50% { transform: translateX(10px) scale(1.55); }
}
`;

// ==================== ESCENA 6: HELADO ====================
function setupScene6() {
    const iceCream = document.getElementById('iceCream');
    const iceCreamMessage = document.getElementById('iceCreamMessage');
    
    iceCream.addEventListener('click', () => {
        iceCreamMessage.classList.add('show');
        
        // Añadir botón después de mostrar el mensaje
        setTimeout(() => {
            addContinueButton('scene6', 7);
        }, 1000);
    });
}

// ==================== ESCENA 5: COFRE ====================
function setupScene5() {
    const treasureChest = document.getElementById('treasureChest');
    const scroll = document.getElementById('scroll');
    
    treasureChest.addEventListener('click', () => {
        treasureChest.classList.add('opening');
        
        setTimeout(() => {
            scroll.classList.add('show');
            
            // Añadir botón después de mostrar el pergamino
            setTimeout(() => {
                addContinueButton('scene5', 6);
            }, 1000);
        }, 1000);
    });
}

// ==================== ESCENA 7: FRESAS ====================
function setupScene7() {
    const strawberries = document.getElementById('strawberries');
    const strawberryMessage = document.getElementById('strawberryMessage');
    
    strawberries.addEventListener('click', () => {
        strawberryMessage.classList.add('show');
        
        // Añadir botón después de mostrar el mensaje
        setTimeout(() => {
            addContinueButton('scene7', 8);
        }, 1000);
    });
}

// ==================== ESCENA 8: HELLO KITTY ====================
function setupScene8() {
    const helloKitty = document.getElementById('helloKitty');
    const helloKittyMessage = document.getElementById('helloKittyMessage');
    
    helloKitty.addEventListener('click', () => {
        helloKittyMessage.classList.add('show');
        
        // Añadir botón después de mostrar el mensaje
        setTimeout(() => {
            addContinueButton('scene8', 9);
        }, 1000);
    });
}

// ==================== ESCENA 9: LOTSO Y FLORES DE LOTO ====================
function setupScene9() {
    const lotsoBear = document.getElementById('lotsoBear');
    const finalMessage = document.getElementById('finalMessage');
    const lotusFlowers = document.getElementById('lotusFlowers');
    
    lotsoBear.addEventListener('click', () => {
        // Crear flores de loto brotando
        createLotusFlowers(lotusFlowers);
        
        // Mostrar mensaje final
        setTimeout(() => {
            finalMessage.classList.add('show');
            
            // Añadir botón de reiniciar
            setTimeout(() => {
                if (!document.querySelector('#scene9 .restart-btn')) {
                    const btn = document.createElement('button');
                    btn.className = 'restart-btn';
                    btn.textContent = 'Volver al inicio ♥';
                    btn.onclick = restart;
                    document.getElementById('scene9').appendChild(btn);
                }
            }, 1000);
        }, 2000);
    });
}

function createLotusFlowers(container) {
    // Crear 15 flores de loto en posiciones aleatorias
    for (let i = 0; i < 15; i++) {
        const flower = document.createElement('div');
        flower.className = 'lotus-flower';
        flower.style.left = Math.random() * 90 + 5 + '%';
        flower.style.bottom = Math.random() * 30 + 10 + '%';
        flower.style.animationDelay = (i * 0.15) + 's';
        
        // Crear pétalos
        for (let j = 0; j < 8; j++) {
            const petal = document.createElement('div');
            petal.className = 'lotus-petal';
            flower.appendChild(petal);
        }
        
        // Crear centro
        const center = document.createElement('div');
        center.className = 'lotus-center';
        flower.appendChild(center);
        
        container.appendChild(flower);
    }
}

// ==================== NAVEGACIÓN ENTRE ESCENAS ====================
function nextScene(sceneNumber) {
    // Ocultar escena actual
    const currentSceneElement = document.getElementById(`scene${currentScene}`);
    currentSceneElement.classList.remove('active');
    
    // Mostrar nueva escena
    currentScene = sceneNumber;
    const nextSceneElement = document.getElementById(`scene${currentScene}`);
    nextSceneElement.classList.add('active');
    
    // Configurar event listeners según la escena
    switch(currentScene) {
        case 3:
            setTimeout(setupScene3, 100);
            break;
        case 4:
            setTimeout(setupScene4, 100);
            break;
        case 5:
            setTimeout(setupScene5, 100);
            break;
        case 6:
            setTimeout(setupScene6, 100);
            break;
        case 7:
            setTimeout(setupScene7, 100);
            break;
        case 8:
            setTimeout(setupScene8, 100);
            break;
        case 9:
            setTimeout(setupScene9, 100);
            break;
    }
}

// ==================== REINICIAR EXPERIENCIA ====================
function restart() {
    // Limpiar todas las escenas
    for (let i = 2; i <= 9; i++) {
        const scene = document.getElementById(`scene${i}`);
        // Remover clases de animación
        scene.querySelectorAll('.show, .opening').forEach(el => {
            el.classList.remove('show', 'opening');
        });
        // Remover botones de continuar añadidos dinámicamente
        scene.querySelectorAll('.continue-btn-dynamic, .restart-btn').forEach(btn => {
            btn.remove();
        });
    }
    
    // Reiniciar el sobre
    const envelope = document.getElementById('envelope');
    envelope.classList.remove('opening');
    
    // Limpiar flores de loto generadas en escena 9
    const lotusFlowers = document.getElementById('lotusFlowers');
    if (lotusFlowers) {
        lotusFlowers.innerHTML = '';
    }
    
    // Volver a la primera escena
    currentScene = 1;
    document.querySelectorAll('.scene').forEach(scene => {
        scene.classList.remove('active');
    });
    document.getElementById('scene1').classList.add('active');
    
    // Reconfigurar event listeners
    setupScene1();
}

// ==================== EFECTOS ADICIONALES ====================

// Crear corazones flotantes adicionales en el fondo
function createFloatingHearts() {
    setInterval(() => {
        if (currentScene === 1) {
            const heart = document.createElement('div');
            heart.innerHTML = '♥';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.bottom = '-50px';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            heart.style.color = `rgba(255, ${Math.random() * 100 + 100}, ${Math.random() * 100 + 150}, 0.3)`;
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1';
            
            document.body.appendChild(heart);
            
            // Animar hacia arriba
            heart.animate([
                { 
                    bottom: '-50px',
                    opacity: 0
                },
                { 
                    bottom: '50%',
                    opacity: 0.3
                },
                { 
                    bottom: '110%',
                    opacity: 0
                }
            ], {
                duration: 8000,
                easing: 'ease-in-out'
            }).onfinish = () => {
                heart.remove();
            };
        }
    }, 2000);
}

// Iniciar creación de corazones flotantes
createFloatingHearts();

// ==================== CONTROL DE VOLUMEN DE MÚSICA ====================
let musicVolume = 0.3;
music.volume = musicVolume;

// Función para ajustar volumen (opcional)
function setMusicVolume(volume) {
    musicVolume = Math.max(0, Math.min(1, volume));
    music.volume = musicVolume;
}

// ==================== EFECTOS DE PARTÍCULAS ====================
function createParticleEffect(x, y, color) {
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.background = color;
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 10;
        const velocity = Math.random() * 50 + 30;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.animate([
            { 
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${tx}px, ${ty}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 800,
            easing: 'ease-out'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

// ==================== MEJORAS DE INTERACCIÓN ====================

// Añadir efecto de hover a elementos interactivos
document.addEventListener('DOMContentLoaded', () => {
    // Añadir cursor pointer a elementos clickeables
    const clickableElements = [
        '#envelope',
        '#teddyBear',
        '#kitten',
        '#treasureChest',
        '.continue-btn',
        '.restart-btn'
    ];
    
    clickableElements.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.cursor = 'pointer';
        }
    });
});

// ==================== SONIDOS (OPCIONAL) ====================
// Si quieres añadir efectos de sonido, puedes descomentar y usar estas funciones

/*
function playSound(soundName) {
    const sounds = {
        'click': 'https://cdn.freesound.org/previews/...',
        'open': 'https://cdn.freesound.org/previews/...',
        'heart': 'https://cdn.freesound.org/previews/...'
    };
    
    if (sounds[soundName]) {
        const audio = new Audio(sounds[soundName]);
        audio.volume = 0.3;
        audio.play();
    }
}
*/

// ==================== COMPATIBILIDAD MÓVIL ====================
// Detectar si es dispositivo móvil y ajustar interacciones
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    // Ajustar tamaños para móvil
    document.body.classList.add('mobile');
    
    // Prevenir zoom en double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// ==================== MENSAJES DE CONSOLA ====================
console.log('%c♥ Experiencia Romántica Cargada ♥', 'color: #ff9ec4; font-size: 20px; font-weight: bold;');
console.log('%cDisfruta de cada momento...', 'color: #c891ff; font-size: 14px; font-style: italic;');

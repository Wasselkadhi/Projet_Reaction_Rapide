         document.addEventListener('click', function(e) {
            createLightningEffect(e.clientX, e.clientY);
        });

        function createLightningEffect(x, y) {
            // Créer l'explosion centrale
            const explosion = document.createElement('div');
            explosion.className = 'lightning-explosion';
            explosion.style.left = (x - 50) + 'px';
            explosion.style.top = (y - 50) + 'px';
            document.body.appendChild(explosion);

            // Créer l'onde de choc
            const shockwave = document.createElement('div');
            shockwave.className = 'shockwave';
            shockwave.style.left = x + 'px';
            shockwave.style.top = y + 'px';
            document.body.appendChild(shockwave);

            // Créer plusieurs éclairs dans des directions aléatoires
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    createLightningBolt(x, y, i * 45 + Math.random() * 20);
                }, i * 30);
            }

            // Sons d'éclair (optionnel)
            

            // Nettoyer les éléments après l'animation
            setTimeout(() => {
                explosion.remove();
                shockwave.remove();
            }, 1000);
        }

        function createLightningBolt(startX, startY, angle) {
            const bolt = document.createElement('div');
            bolt.className = 'lightning-bolt';
            
            const length = 100 + Math.random() * 200;
            const rad = angle * Math.PI / 180;
            
            bolt.style.left = startX + 'px';
            bolt.style.top = startY + 'px';
            bolt.style.height = length + 'px';
            bolt.style.transform = `rotate(${angle}deg)`;
            bolt.style.opacity = '0.8';
            
            document.body.appendChild(bolt);

            // Animation de l'éclair
            bolt.animate([
                { opacity: 0, transform: `rotate(${angle}deg) scaleY(0)` },
                { opacity: 1, transform: `rotate(${angle}deg) scaleY(1)` },
                { opacity: 0, transform: `rotate(${angle}deg) scaleY(1)` }
            ], {
                duration: 400 + Math.random() * 300,
                easing: 'ease-out'
            });

            setTimeout(() => {
                bolt.remove();
            }, 1000);
        }
        const container = document.getElementById('splashContainer');
        const colors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', 
            '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
        ];
        //une background animee avec des couleurs qui s'affichent aux positions aleatoires
        function createSplash() {
            const splash = document.createElement('div');
            splash.classList.add('splash');
            
           //valeur pour une position aleatoire
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            //choix  de size aleatoire
            const size = Math.random() * 200 + 100;
            
           //choix ce couleur aleatoire
            const color = colors[Math.floor(Math.random() * colors.length)];
            
           //initialisation de la splash
            splash.style.width = `${size}px`;
            splash.style.height = `${size}px`;
            splash.style.left = `${x}%`;
            splash.style.top = `${y}%`;
            splash.style.backgroundColor = color;
            
            const duration = 7 + Math.random() * 2;//duree
            splash.style.animationDuration = `${duration}s`;
            
            container.appendChild(splash);
            
            setTimeout(() => {
                splash.remove();
            }, duration * 1000);
        }
        
        setInterval(createSplash, 800);
        
        for (let i = 0; i < 5; i++) {
            setTimeout(createSplash, i * 300);
        }
        
         const navButton = document.getElementById('nav');
        
         // activer/pauser de music lors de click sur le boutton
        const audio = new Audio('Sonic X Theme Song - Gotta Go Fast [Z9G1Mf6TZRs].mp3'); 
        navButton.addEventListener('click', function() {
            this.classList.toggle('active');
    
            if (this.classList.contains('active')) {
                audio.play();
                audio.loop=true;
            } else {
                audio.pause();
            }   
});
        // le son de click pour chaque boutton
        
        const clickSound = new Audio('Mouse click-sound effect free to use-VEED.mp3');

        document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});
         const container1 = document.getElementById('container');
        const buttonsPanel = document.getElementById('buttons');
        const iframeContainer = document.getElementById('iframeContainer');
        const contentIframe = document.getElementById('contentIframe');
        const backButton = document.getElementById('backButton');
        const actionButtons = document.querySelectorAll('.action-button');
        //des evenement en click pour chaque boutton
        actionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const iframeSrc = this.getAttribute('data-function');
                
                if (iframeSrc==='startGame'){
                    start();
                }else if (iframeSrc==='affichageScore'){
                    affScore();
                }else{
                    GuideInfo();
                }
                // Activattion de  layout
                container1.classList.add('iframe-active');
            });
        });
        // fonctionnalite de boutton de retour
        backButton.addEventListener('click', function() {
            container1.classList.remove('iframe-active');
            contentIframe.srcdoc='';
            
        });
        function start(){
            contentIframe.srcdoc = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { 
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                font-family: Arial;
                padding: 20px;
            }
            #but{
            padding: 10px 20px;
            background:  linear-gradient(45deg, #b3a4c3, #588de9);
                  
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            }
            #but_rec{
                background:  linear-gradient(45deg, #b3a4c3, #588de9);

                cursor: pointer;
                border: none;
                border-radius: 5px;               
                color: beige;
                min-width: max-content;
                padding: 10px 20px;
               
            
            }
            #container{
            text-align: center;
             padding: 20px;
            }
            #timer{
            
                font-size: 48px; 
                margin: 20px 0;
            }
           #result{
            margin-top: 20px;
           }
        </style>
    </head>
    <body>
        
    
    
        <div id="container" >
            <h2>⏱️ Test de Réaction</h2>
            <p id="status">Prêt...</p>
            <div id="timer" style="">--</div>
            <button onclick="initTimer()" id="but" >
                Commencer
            </button>
            <div id="result" ></div>
        </div>
        <script>
        setTimeout(()=>{const clickSound = new Audio('20251115_click_the_.mp3');
            clickSound.play();},1000);
       
        
       
            let timerStartTime;
            let timerInterval;
            
            function initTimer() {
                    document.getElementById('but').style.display ='none';

                document.getElementById('status').style.color = 'white';
                document.getElementById('status').textContent = 'Attendez le signal...';
                document.getElementById('timer').textContent = '--';
                document.getElementById('result').innerHTML = '';
                
                // Délai aléatoire entre 2 et 7 secondes
                const randomDelay = Math.random() * 3000 + 4000;
                
                setTimeout(() => {
          

                    audio= new Audio('Wassel Kadhi_s Vidéo - Nov 15, 2025-VEED (10).mp3')
                            audio.play();
                            
                    document.getElementById('status').textContent = 'CLIQUEZ MAINTENANT!';
                    document.getElementById('status').style.color = 'red';
                    timerStartTime = Date.now();
                    
                    // Démarrer l'affichage du timer
                    timerInterval = setInterval(() => {
                        const currentTime = Date.now();
                        const elapsed = (currentTime - timerStartTime) / 1000;
                        document.getElementById('timer').textContent = elapsed.toFixed(3) + 's';
                    }, 10);
                    
                }, randomDelay);
            }
            
            // Cliquer n'importe où dans l'iframe arrête le timer
            document.body.addEventListener('click', function() {
                if (timerStartTime) {
                    clearInterval(timerInterval);
                    const reactionTime = (Date.now() - timerStartTime) / 1000;
                    document.getElementById('result').innerHTML = 
                        '<h3>Votre temps de réaction: ' + reactionTime.toFixed(3) + ' secondes</h3>'+
                        '<button onclick=initTimer() id="but_rec">Recommencer</button>' 
                        ;
                    if (reactionTime<=0.19){
                    audio= new Audio('20251115_are_you_th.mp3')
                            audio.play();
                    }
                    else if (reactionTime <=0.5){
                         audio= new Audio('20251115_wow_thats_.mp3')
                            audio.play();
                    }else if(reactionTime <=1 && reactionTime > 0.5){
                             audio= new Audio('20251115_Thats_not_.mp3')
                            audio.play();
                    }else{
                         audio= new Audio('20251115_come_on__a.mp3')
                            audio.play();
                        }
                    timerStartTime = null;
                }
                    

            });
            
            
          
            
            
        </script>
    </body>
    </html>
`;
        }
        function affScore(){
           contentIframe.srcdoc=`<center><h1>Last score </h1></center>
           <script>
          setTimeout(()=>{audio= new Audio('20251115_thats_your (1).mp3')
           audio.play()},500);</script>`
           
           
           ;}
        function GuideInfo(){
           contentIframe.srcdoc=`<center><h1>Guide </h1></center>
             <script>
             setTimeout(()=>{audio= new Audio('20251115_wanna_know.mp3')
           audio.play()},500)
           ;</script>`
        }
        
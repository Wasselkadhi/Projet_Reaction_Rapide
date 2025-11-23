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
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body { 
            background: linear-gradient(135deg, #0c0c2e, #1e1e52, #323278);
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
            padding: 10px;
        }

        #container {
            background: rgba(10, 10, 40, 0.9);
            backdrop-filter: blur(10px);
            border: 2px solid #00f7ff;
            border-radius: 15px;
            padding: 20px;
            text-align: center;
            box-shadow: 
                0 0 50px rgba(0, 247, 255, 0.3),
                inset 0 0 50px rgba(0, 247, 255, 0.1);
            max-width: 400px;
            width: 100%;
             max-height: 95vh;
         
        }

     

       

        h2 {
            font-size: 1.8em;
            margin-bottom: 15px;
            text-shadow: 
                0 0 10px #00f7ff,
                0 0 20px #00f7ff;
            color: #00f7ff;
            font-weight: bold;
            letter-spacing: 1px;
        }

        #status {
            font-size: 1.1em;
            margin: 15px 0;
            padding: 12px;
            background: rgba(0, 247, 255, 0.1);
            border-radius: 8px;
            border: 1px solid #00f7ff;
            transition: all 0.3s ease;
            min-height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #timer {
            font-size: 2.2em;
            font-weight: bold;
            margin: 15px 0;
            color: #00f7ff;
            text-shadow: 0 0 10px #00f7ff;
            font-family: 'Courier New', monospace;
            min-height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .click-zone {
            width: 150px;
            height: 150px;
            background: radial-gradient(circle, #1a1a5a, #0c0c3a);
            border: 3px solid #00f7ff;
            border-radius: 50%;
            margin: 15px auto;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            box-shadow: 
                0 0 30px rgba(0, 247, 255, 0.3),
                inset 0 0 30px rgba(0, 247, 255, 0.1);
        }

        .click-zone:hover {
            transform: scale(1.05);
            box-shadow: 
                0 0 40px rgba(0, 247, 255, 0.5),
                inset 0 0 40px rgba(0, 247, 255, 0.2);
        }

        .click-zone.active {
            background: radial-gradient(circle, #00f7ff, #0084ff);
            box-shadow: 
                0 0 50px #00f7ff,
                inset 0 0 30px #ffffff;
            animation: pulse 0.5s ease infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        button {
            background: linear-gradient(45deg, #00f7ff, #0084ff);
            border: none;
            color: #0a0a2a;
            padding: 12px 25px;
            font-size: 1em;
            border-radius: 20px;
            cursor: pointer;
            margin: 8px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s ease;
            box-shadow: 0 0 20px rgba(0, 247, 255, 0.5);
            width: 200px;
        }

        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 30px rgba(0, 247, 255, 0.8);
        }

        #result {
            margin-top: 15px;
            padding: 15px;
            background: rgba(0, 247, 255, 0.1);
            border-radius: 8px;
            border: 1px solid #00f7ff;
        }

        #result h3 {
            color: #00f7ff;
            margin-bottom: 12px;
            font-size: 1.1em;
        }

        //ajustement pour les telephones te les tablettes
        @media (max-height: 600px) {
            #container {
                padding: 15px;
                max-height: 98vh;
            }
            
            h2 {
                font-size: 1.5em;
                margin-bottom: 10px;
            }
            
            #status {
                font-size: 1em;
                margin: 10px 0;
                padding: 8px;
                min-height: 40px;
            }
            
            #timer {
                font-size: 1.8em;
                margin: 10px 0;
                min-height: 50px;
            }
            
            .click-zone {
                width: 120px;
                height: 120px;
                margin: 10px auto;
            }
            
            button {
                padding: 10px 20px;
                font-size: 0.9em;
                width: 180px;
            }
        }
    </style>
</head>
<body>
    <div id="container">
        <h2>⏱️ Reaction Test</h2>
        <p id="status">Ready...</p>
        <div id="timer">--</div>
        <div class="click-zone" id="clickZone">
            <div style="font-size: 0.8em; color: #00f7ff; text-align: center;">
                CLICK ZONE
            </div>
        </div>
        <button onclick="initTimer()" id="but">
            Start
        </button>
        <div id="result"></div>
    </div>
    
    <script>
        setTimeout(() => {
            const clickSound = new Audio('20251115_click_the_.mp3');
            clickSound.play();
        }, 1000);
       
        let timerStartTime;
        let timerInterval;
        let time;
        
        function initTimer() {
            document.getElementById('but').style.display = 'none';
            document.getElementById('status').style.color = 'white';
            document.getElementById('status').textContent = 'Wait for the signal...';
            document.getElementById('timer').textContent = '--';
            document.getElementById('result').innerHTML = '';
            
         
            
            // Délai aléatoire entre 2 et 7 secondes
            const randomDelay = Math.random() * 3000 + 4000;
            
            time = setTimeout(() => {
                audio = new Audio('Wassel Kadhi_s Vidéo - Nov 15, 2025-VEED (10).mp3');
                audio.play();
                
                document.getElementById('status').textContent = 'CLICK NOW!';
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
        
        document.getElementById('clickZone').addEventListener('click', function(e) {
            if (e.target.tagName === 'BUTTON' || e.target.id === 'but_rec') {
                return;
            }
            
            if (timerStartTime) {
                clearInterval(timerInterval);
                const reactionTime = (Date.now() - timerStartTime) / 1000;
                document.getElementById('result').innerHTML = 
                    '<h3>Your Reaction Time: ' + reactionTime.toFixed(3) + ' seconds</h3>' +
                    '<button onclick="initTimer()" id="but_rec">Again</button>';
                
                if (reactionTime <= 0.19) {
                    audio = new Audio('20251115_are_you_th.mp3');
                    audio.play();
                } else if (reactionTime <= 0.5) {
                    audio = new Audio('20251115_wow_thats_.mp3');
                    audio.play();
                } else if (reactionTime <= 1 && reactionTime > 0.5) {
                    audio = new Audio('20251115_Thats_not_.mp3');
                    audio.play();
                } else {
                    audio = new Audio('20251115_come_on__a.mp3');
                    audio.play();
                }
                
                timerStartTime = null;
                time = null;
                
                
            } else {
                //si on clique avant le signal on perd
                if (time) {
                    clearTimeout(time);
                    time = null;
                }
                audio = new Audio('Wassel Kadhi_s Vidéo - Nov 23, 2025-VEED.mp3');
                audio.play();
                document.getElementById('status').textContent = '❌ Too early!';
                document.getElementById('status').style.color = 'red';
                document.getElementById('result').innerHTML = 
                    '<button onclick="initTimer()" id="but_rec">Again</button>';
               
            }
        });
    </script>
</body>
</html>
`;
        }
        function affScore(){
           contentIframe.srcdoc=` <!DOCTYPE html>
<html>
<head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body { 
            background: linear-gradient(135deg, #0c0c2e, #1e1e52, #323278);
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
            padding: 10px;
        }

        #container {
            background: rgba(10, 10, 40, 0.9);
            backdrop-filter: blur(10px);
            border: 2px solid #00f7ff;
            border-radius: 15px;
            padding: 20px;
            text-align: center;
            box-shadow: 
                0 0 50px rgba(0, 247, 255, 0.3),
                inset 0 0 50px rgba(0, 247, 255, 0.1);
            max-width: 400px;
            width: 100%;
             max-height: 95vh;
         
        }

     



        

       

      

        }

        
        //ajustement pour les telephones te les tablettes
        @media (max-height: 600px) {
            #container {
                padding: 15px;
                max-height: 98vh;
            }
            
          
          
    </style>
</head>
<body>
    <div id="container">
    <h3>Your last Score is:</h3>
   
    </div>
    
  <script>
      setTimeout(() => {
            const clickSound = new Audio('20251115_thats_your (1).mp3');
            clickSound.play();
        }, 1000);
    
    
    
    
    </script>
    
     
            
         
            
         
</body>
</html>`
           
           
           ;}
        function GuideInfo(){
           contentIframe.srcdoc=` <!DOCTYPE html>
<html>
<head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body { 
            background: linear-gradient(135deg, #0c0c2e, #1e1e52, #323278);
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
            padding: 10px;
        }

        #container {
            background: rgba(10, 10, 40, 0.9);
            backdrop-filter: blur(10px);
            border: 2px solid #00f7ff;
            overflow: auto;
            border-radius: 15px;
            padding: 20px;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            box-shadow: 
                0 0 50px rgba(0, 247, 255, 0.3),
                inset 0 0 50px rgba(0, 247, 255, 0.1);
                
            
            width: 80%;
            height:350px;
                   
            line-height:30px;
            
         
        }
            h3 {
             text-align: center;
             text-shadow: 0px 5px 5px lightblue;
               

            }


     



        

       

      

        }
      

        
        //ajustement pour les telephones te les tablettes
        @media (max-height: 600px) {
            #container {
            font-size:10px;
            min-width:fit-content;
            min-height:fit-content;
            overflow:auto;

                padding: 15px;
                max-height: 98vh;
            }
        li {


        
        
        }
            
          
          
    </style>
</head>
<body>

    <div id="container">
    <h3>How to play</h3>

    <ol>
    <li>Click on the button Play </li>
    <li>Click "Start" to begin the test</li>
    <li>Wait for the signal - A random delay of 2 to 7 seconds</li>
    <li>When the "Click Now" message appears and you hear the sound, click as quickly as possible. !</li>
    <li>Your reaction time will be displayed in milliseconds.</li>
    </ol>
    <h3>To find out the value of the last try</h3>
    <ol>
    <li>Click on the last score button</li>
    <li>The score will be displayed directly</li>
    </ol>
    </div>
    
    <script>
      setTimeout(() => {
            const clickSound = new Audio('20251115_wanna_know.mp3');
            clickSound.play();
        }, 1000); 
    
    
    
    
    </script>
    
  
     
            
         
            
         
</body>
</html>`
        }
        
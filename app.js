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
        const audio = new Audio('60 Mins Happy Music for Playtime - Playtime Songs for Kids & Toddlers [nRtRlmoyfyw].mp3'); 
        navButton.addEventListener('click', function() {
            this.classList.toggle('active');
    
            if (this.classList.contains('active')) {
                audio.play();
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
            contentIframe.srcdoc='<center><h1>Start Game </h1></center>';
        }
        function affScore(){
           contentIframe.srcdoc='<center><h1>Last score </h1></center>'
        }
        function GuideInfo(){
           contentIframe.srcdoc='<center><h1>Guide </h1></center>'
        }
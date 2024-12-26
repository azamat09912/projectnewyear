const snowflakes = 100; const snowflakeChars = ['❄', '❅', '❆'];
 for (let i = 0; i < snowflakes; i++)
     { const snowflake = document.createElement('div'); snowflake.classList.add('snowflake');
         snowflake.style.left = `${Math.random() * 100}vw`;
          snowflake.style.animationDuration = `${(Math.random() * 6) + 5}s`; 
           snowflake.style.fontSize = `${Math.random() * 24 + 12}px`;
            snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
             document.body.appendChild(snowflake); }

             function countdown() {
                const newYearDate = new Date('January 1, 2025 00:00:00').getTime();
                const now = new Date().getTime();
                const gap = newYearDate - now;
              
                const second = 1000;
                const minute = second * 60;
                const hour = minute * 60;
                const day = hour * 24;
              
                const days = Math.floor(gap / day);
                const hours = Math.floor((gap % day) / hour);
                const minutes = Math.floor((gap % hour) / minute);
                const seconds = Math.floor((gap % minute) / second);
              
                document.getElementById('days').innerText = days;
                document.getElementById('hours').innerText = hours;
                document.getElementById('minutes').innerText = minutes;
                document.getElementById('seconds').innerText = seconds;
              
                if (gap < 0) {
                    document.querySelector('#countdown').innerHTML = "🎉 Happy New Year! 🎉";
                }
              }
              
              setInterval(countdown, 1000);
              countdown();
            
              function revealMessage(cardId) {
                const message = document.getElementById(cardId);
                message.style.display = 'block';
            
                setTimeout(() => {
                    message.style.display = 'none';
                }, 3000);
            }

     
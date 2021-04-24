console.log("Bem vindo ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
   let usuarioCartas = []
   let computadorCartas = []
   let somaUsuarioTotal = 0
   let somaComputadorTotal = 0


   usuarioCartas.push(comprarCarta())
   usuarioCartas.push(comprarCarta())
   while (usuarioCartas[0].valor + usuarioCartas[1].valor === 22) {
      usuarioCartas.splice(0)
      usuarioCartas.splice(1)
      usuarioCartas.push(comprarCarta())
      usuarioCartas.push(comprarCarta())
   }

   computadorCartas.push(comprarCarta())
   computadorCartas.push(comprarCarta())
   while (computadorCartas[0].valor + computadorCartas[1].valor === 22) {
      computadorCartas.splice(0)
      computadorCartas.splice(1)
      computadorCartas.push(comprarCarta())
      computadorCartas.push(comprarCarta())
   }

   for (let cartas of usuarioCartas) {
      somaUsuarioTotal += cartas.valor
   }
   for (let cartas of computadorCartas) {
      somaComputadorTotal += cartas.valor
   }

   if (confirm(`Suas cartas são ${usuarioCartas[0].texto} ${usuarioCartas[1].texto}. A carta revelada do computador é ${computadorCartas[0].texto}.` +
      "\n" +
      "Deseja comprar mais uma carta?")) {
      usuarioCartas.push(comprarCarta())
      somaUsuarioTotal += usuarioCartas[2].valor

      if (somaUsuarioTotal < 22) {
         if (confirm(`Suas cartas são ${usuarioCartas[0].texto} ${usuarioCartas[1].texto} ${usuarioCartas[2].texto}. A carta revelada do computador é ${computadorCartas[0].texto}.` +
            "\n" +
            "Deseja comprar mais uma carta?")) {
            usuarioCartas.push(comprarCarta())
            somaUsuarioTotal += usuarioCartas[3].valor

            if (somaUsuarioTotal < 22) {
               if (confirm(`Suas cartas são ${usuarioCartas[0].texto} ${usuarioCartas[1].texto} ${usuarioCartas[2].texto} ${usuarioCartas[3].texto}. A carta revelada do computador é ${computadorCartas[0].texto}.` +
                  "\n" +
                  "Deseja comprar mais uma carta?")) {
                  usuarioCartas.push(comprarCarta())
                  somaUsuarioTotal += usuarioCartas[4].valor

                  
               } else if (somaUsuarioTotal > somaComputadorTotal) {
                  alert(`Suas cartas são ${usuarioCartas[0].texto} ${usuarioCartas[1].texto} ${usuarioCartas[2].texto} ${usuarioCartas[3].texto}. Sua pontuação é ${somaUsuarioTotal}.` +
                     "\n" +
                     `As cartas do computador são ${computadorCartas[0].texto} ${computadorCartas[1].texto}. A pontuação do computador é ${somaComputadorTotal}.` +
                     "\n" +
                     "Você ganhou!")

               } else if (somaUsuarioTotal < somaComputadorTotal) {
                  alert(`Suas cartas são ${usuarioCartas[0].texto} ${usuarioCartas[1].texto} ${usuarioCartas[2].texto} ${usuarioCartas[3].texto}. Sua pontuação é ${somaUsuarioTotal}.` +
                     "\n" +
                     `As cartas do computador são ${computadorCartas[0].texto} ${computadorCartas[1].texto}. A pontuação do computador é ${somaComputadorTotal}.` +
                     "\n" +
                     "O computador ganhou!")
               } else {
                  alert(`Suas cartas são ${usuarioCartas[0].texto} ${usuarioCartas[1].texto} ${usuarioCartas[2].texto} ${usuarioCartas[3].texto}. Sua pontuação é ${somaUsuarioTotal}.` +
                     "\n" +
                     `As cartas do computador são ${computadorCartas[0].texto} ${computadorCartas[1].texto}. A pontuação do computador é ${somaComputadorTotal}.` +
                     "\n" +
                     "Vocês empataram!")
               }

            } else {
               alert(`Suas cartas são ${usuarioCartas[0].texto} ${usuarioCartas[1].texto} ${usuarioCartas[2].texto} ${usuarioCartas[3].texto}. Sua pontuação é ${somaUsuarioTotal}.` +
                  "\n" +
                  `As cartas do computador são ${computadorCartas[0].texto} ${computadorCartas[1].texto}. A pontuação do computador é ${somaComputadorTotal}.` +
                  "\n" +
                  "O computador ganhou!")
            }
         } else if (somaUsuarioTotal > somaComputadorTotal) {
            alert(`Suas cartas são ${usuarioCartas[0].texto} ${usuarioCartas[1].texto} ${usuarioCartas[2].texto}. Sua pontuação é ${somaUsuarioTotal}.` +
               "\n" +
               `As cartas do computador são ${computadorCartas[0].texto} ${computadorCartas[1].texto}. A pontuação do computador é ${somaComputadorTotal}.` +
               "\n" +
               "Você ganhou!")

         } else if (somaUsuarioTotal < somaComputadorTotal) {
            alert(`Suas cartas são ${usuarioCartas[0].texto} ${usuarioCartas[1].texto} ${usuarioCartas[2].texto}. Sua pontuação é ${somaUsuarioTotal}.` +
               "\n" +
               `As cartas do computador são ${computadorCartas[0].texto} ${computadorCartas[1].texto}. A pontuação do computador é ${somaComputadorTotal}.` +
               "\n" +
               "O computador ganhou!")
         }
      } else {
         alert(`Suas cartas são ${usuarioCartas[0].texto} ${usuarioCartas[1].texto} ${usuarioCartas[2].texto}. Sua pontuação é ${somaUsuarioTotal}.` +
            "\n" +
            `As cartas do computador são ${computadorCartas[0].texto} ${computadorCartas[1].texto}. A pontuação do computador é ${somaComputadorTotal}.` +
            "\n" +
            "O computador ganhou!"
         )
      }



   } else if (somaUsuarioTotal > somaComputadorTotal) {
      alert(`Suas cartas são ${usuarioCartas[0].texto} ${usuarioCartas[1].texto}. Sua pontuação é ${somaUsuarioTotal}.` +
         "\n" +
         `As cartas do computador são ${computadorCartas[0].texto} ${computadorCartas[1].texto}. A pontuação do computador é ${somaComputadorTotal}.` +
         "\n" +
         "Você ganhou!")

   } else if (somaUsuarioTotal < somaComputadorTotal) {
      alert(`Suas cartas são ${usuarioCartas[0].texto} ${usuarioCartas[1].texto}. Sua pontuação é ${somaUsuarioTotal}.` +
         "\n" +
         `As cartas do computador são ${computadorCartas[0].texto} ${computadorCartas[1].texto}. A pontuação do computador é ${somaComputadorTotal}.` +
         "\n" +
         "O computador ganhou!")
   } else {
      alert(`Suas cartas são ${usuarioCartas[0].texto} ${usuarioCartas[1].texto}. Sua pontuação é ${somaUsuarioTotal}.` +
         "\n" +
         `As cartas do computador são ${computadorCartas[0].texto} ${computadorCartas[1].texto}. A pontuação do computador é ${somaComputadorTotal}.` +
         "\n" +
         "Vocês empataram!")
   }

}









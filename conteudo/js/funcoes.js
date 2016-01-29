var verificar_inicio_cnd;
var txtLvl = 0;
//
var trilha = new Howl({
    urls: ['media/audio/somAmbiente.mp3','media/audio/somAmbiente.ogg'], 
    loop:true, 
    volume:0.6,
    onend: function() { 
        tocar_trilha();
    }
});

function tocar_trilha(){
	trilha.stop().play();
	
}
var pararLoopStart = true;
var startGame = {
	init: function(){
        if(pararLoopStart){
            $(".som-texto1").get(0).play();
            pararLoopStart = false;
        }
        
    }
}
// Funções de Pop Up
function PopUpSmall(posTxt,imagem,descricao){
	var popup = $(".overlay-small");
	var popupC = $(".overlay-small .feedsmall");
	var posText = $(".overlay-small .feedsmall p");
	$(".som-texto1").load();
	popup.find("p").html(descricao);
	popup.find("img").attr("src","img/"+imagem+".png");
	popup.fadeIn(300);
	setTimeout(function(){
		popupC.css({
			"transform":"scale(1)",
			"-moz-transform":"scale(1)",
			"-ms-transform":"scale(1)",
			"-o-transform":"scale(1)",
			"-webkit-transform":"scale(1)"
			});
		posText.css({
			marginTop:posTxt+"px"
		});
	},300);
	
}

function PopUp(tipo,imagem,descricao){
	var popup = $(".overlay-feedback");
	var popupC = $(".overlay-feedback .feedback");
	
	if(tipo == 0){
		popupC.addClass("semImg").removeClass("comImg");
		popup.find("img").hide();
		popup.find("p").text(descricao);
		popup.fadeIn(300);
		setTimeout(function(){
			popupC.css({
				"transform":"scale(1)",
				"-moz-transform":"scale(1)",
				"-ms-transform":"scale(1)",
				"-o-transform":"scale(1)",
				"-webkit-transform":"scale(1)"
				});
		},300);
	}else if(tipo == 1){
		popupC.addClass("comImg").removeClass("semImg");
		popup.find("p").text(descricao);
		popup.find("img").attr("src","img/"+imagem+".png");
		popup.fadeIn(300);
		setTimeout(function(){
			popupC.css({
				"transform":"scale(1)",
				"-moz-transform":"scale(1)",
				"-ms-transform":"scale(1)",
				"-o-transform":"scale(1)",
				"-webkit-transform":"scale(1)"
				});
		},300);
	}
}


// Executa esta função "start" após o carregamento das imagens
function start(){
	PopUpSmall(25,"imgMsgFeed","PARA ENCONTRAR OS PARES NO JOGO DA MEMÓRIA, RESOLVA AS MULTIPLICAÇÕES.");
	//Variáveis da capa
    trilha.stop();
    
    var
    iniciaAudio = true,
	sons = $("audio"),
	audioTrilha = $(".som-ambiente"),
	audioAcerto = $(".som-acerto"),
	audioErro = $(".som-erro"),
	audioNarracao1 = $(".som-texto1"),
	audioNarracao2 = $(".som-texto2"),
	audioNarracao3 = $(".som-texto3"),
	audioNarracao4 = $(".som-texto4"),
	animacao = $("#interaction"),
	audioTrilha = $(".musica-som"),
	audioAcerto = $(".acerto-som"),
	audioErro = $(".erro-som"),
	animacao = $("#interaction");
				

	var botaoFechaPop = $(".btnFechaPopUp");
	var botaoFechaSmall = $(".btnFechaSmall");
	var botaoFechaSmallFinaliza = $(".btnFechaSmallFinaliza");
	
	//Botão que fecha o Pop e Small
	$('.btnFechaSmall').on({
		click: function(){
			$(".feedsmall").css({
				"transform":"scale(0)",
				"-moz-transform":"scale(0)",
				"-ms-transform":"scale(0)",
				"-o-transform":"scale(0)",
				"-webkit-transform":"scale(0)"
			});
            if(iniciaAudio){
                trilha.stop().play();
                iniciaAudio = false;
            }
            
			setTimeout(function(){
				$(".overlay-small").fadeOut(300);
				//desliga = 'play';
			},500);
		}
	});
	
	
	verificar_inicio();
	function verificar_inicio(){
	  verificar_inicio_cnd = setInterval(function(){
	  if(window.sessionStorage.getItem('iniciar_oed')=='sim'){
	     iniciar_oed_funcoes();
	      clearInterval(verificar_inicio_cnd);
	    }
	  }, 1000);
	}	
	
}

	function iniciar_com_tap(){
        //alert("Tap");
        trilha.play().stop();
        $(".som-texto1").get(0).play();
        iniciar_oed_funcoes();
        clearInterval(verificar_inicio_cnd);
    }

// Começa a config do jogo ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(function() {
    $("#botaoReinicia").on("click",function(){
        window.parent.location.href = "../index.html";
    });
	var carta_r1 = '';
	var carta_r2 = '';
	var acertos = 0;
	var nErros = 1;
	var nAcertos = 1;
	$('#fase1 .carta').on("tap click", function(){
		var ele = $(this);
		var eleClass = ele.attr('class');
		var resp = ele.attr('data-resp');
		var qntVirada = $('#fase1 .carta.virada').size();
		ele.addClass('virada');
		//se tiver so 1 faz isso
		if(qntVirada==0){
			carta_r1 = resp;
		}
		var resp22 = eleClass.indexOf("virada");
		//se tiver mais de 2 encera ou se a clicada ja tiver virada
		if(qntVirada > 1 || resp22 != -1){
            carta_r1 = '';
            carta_r2 = '';
            voltaCarta();
		}else if(qntVirada == 1){
			//se tiver 2 faz isso e encerra
			carta_r2 = resp
			if(carta_r1 == carta_r2){
			//Acerto
				//unbind nessas 2 cartas, remove a classe virada e seta fixa como classe
				$("#fase1 .carta[data-resp='"+resp+"']").addClass('fixa').removeClass('virada').unbind('click');
				acertos++;
				$("#painel .acertos").text(nAcertos++);
				$(".som-acerto")[0].play();
				if(acertos == 6){
					PopUpSmall(25,"imgMsgFeed","MUITO BEM! AGORA RESOLVA AS DIVISÕES PARA ENCONTRAR OS PARES.");
				$(".som-texto2").get(0).play()		
					fase2();
				}
			}else{
			//Erro
				carta_r1 = '';
				carta_r2 = '';
				$("#painel .erros").text(nErros++);
				$(".som-erro")[0].play();
                //da um tempo, limpa a carta errada que clicou e volta
                timeoutID = window.setTimeout("voltaCarta();", 1200);
			}	
		}
	})
	$('#fase2 .carta').click(function(){
		var ele = $(this);
		var eleClass = ele.attr('class');
		var resp = ele.attr('data-resp');
		var qntVirada = $('#fase2 .carta.virada').size();
		ele.addClass('virada');
		if(qntVirada==0){
			carta_r1 = resp;
		}
		var resp22 = eleClass.indexOf("virada");
		if(qntVirada>1 || resp22 !=-1){
				 carta_r1 = '';
				 carta_r2 = '';
				voltaCarta();
		}else if(qntVirada==1){
			carta_r2 = resp
			if(carta_r1 == carta_r2){
				$("#fase2 .carta[data-resp='"+resp+"']").addClass('fixa').removeClass('virada').unbind('click');
				acertos++;
				$("#painel .acertos").text(nAcertos++);
				$(".som-acerto")[0].play();
				if(acertos == 12){
					PopUpSmall(10,"imgMsgFeed","PARABÉNS! NO ÚLTIMO DESAFIO, AS OPERAÇÕES ESTÃO MISTURADAS. RESOLVA-AS PARA ENCONTRAR OS PARES.");
						$(".som-texto3").get(0).play()

					fase3();
				}
			}else{
				carta_r1 = '';
				carta_r2 = '';
				$("#painel .erros").text(nErros++);
				$(".som-erro")[0].play();
				timeoutID = window.setTimeout("voltaCarta();", 1200);
			}	
		}
	})
	$('#fase3 .carta').click(function(){
		var ele = $(this);
		var eleClass = ele.attr('class');
		var resp = ele.attr('data-resp');
		var qntVirada = $('#fase3 .carta.virada').size();
		ele.addClass('virada');
		if(qntVirada==0){
			carta_r1 = resp;
		}
		var resp22 = eleClass.indexOf("virada");
		if(qntVirada>1 || resp22 !=-1){
				 carta_r1 = '';
				 carta_r2 = '';
				voltaCarta();
		}else if(qntVirada==1){
			carta_r2 = resp
			if(carta_r1 == carta_r2){
				$("#fase3 .carta[data-resp='"+resp+"']").addClass('fixa').removeClass('virada').unbind('click');
				acertos++;
				$("#painel .acertos").text(nAcertos++);
				$(".som-acerto")[0].play();
				if(acertos == 17){
					$(".btnFechaSmall").hide();
				}else if(acertos == 18){
					PopUpSmall(10,"imgMsgFeed","EXCELENTE! VOCÊ CONSEGUIU PASSAR <br>PELAS TRÊS ETAPAS. JOGUE NOVAMENTE <br>PARA PRATICAR MAIS.");
						$(".som-texto4").get(0).play()

					$(".btnFechaSmallFinaliza").show();
				}
			}else{
				carta_r1 = '';
				carta_r2 = '';
				$("#painel .erros").text(nErros++);
				$(".som-erro")[0].play();
			timeoutID = window.setTimeout("voltaCarta();", 1200);
			}	
		}
	})
	startCountdown();
	//tempo = 80; Setar o tempo
	//desliga = "pause"; Pausa o tempo / "play" Inicia o tempo
});
function voltaCarta(){
	$('#fase1 .carta, #fase2 .carta, #fase3 .carta').removeClass('virada')
}

function fase2(){
	$("#fase1").fadeOut(500,function(){
		$("#fase1").remove();
		$("#fase2").fadeIn(500);
	});	
}
function fase3(){
	$("#fase2").fadeOut(500,function(){
		$("#fase2").remove();
		$("#fase3").fadeIn(500);
	});	
}

var tempo = new Number();
// Tempo em segundos

tempo = 180;
var desliga = 'stop';
function startCountdown(){
if(desliga=='stop'){
	var setTm = setTimeout('startCountdown()',1000);
	return false;
	
}else if(desliga=='play'){
		// Se o tempo não for zerado
		if((tempo - 0) >= 0){
			// Pega a parte inteira dos minutos
			var min = parseInt(tempo/60);
			// Calcula os segundos restantes
			var seg = tempo%60;
			// Formata o número menor que dez, ex: 08, 07, ...
			if(min < 10){
				min = min;
				//min = min.substr(0, 2);
			}
			if(seg <=9){
				seg = "0"+seg;
			}
			if(min == 0 && seg == 10){
				$("#timer").css({color:"red"}); // COLOCAR SOM CONTAGEM REGRESSIVA
			}
			horaImprimivel =  min + ':' + seg;
			$("#timer").html(horaImprimivel);
			var setTm = setTimeout('startCountdown()',1000);
			tempo--;
			return setTm;
		} else {
			alert("Criar tela OVER");
		}
	}

	
}


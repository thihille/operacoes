var verificar_inicio_cnd;
var txtLvl = 0;
//
var trilha = new Howl({  urls: ['media/audio/somAmbiente.mp3','media/audio/somAmbiente.ogg'], loop:true, volume:0.6,onend: function() { tocar_trilha();}});

// Configurações dos textos do botão de ajuda... Se houver mais de um texto do botão de ajuda, no arquivo FUNÇÕES.JS de desenvolvimento insira apenas a variavel "txtLvl = NUMERO DO TEXTO DO BOTÃO DE AJUDA QUE APARECERÁ, no local da função de desenvolvimento do projeto.
function textosInstrucoes(txtLvl){
	
	if(txtLvl == 0){
		$("#instrucoes").html("Clique nas cartas para formar pares. Serão 3 fases para você praticar.");
	}else if(txtLvl == 1){
		$("#instrucoes").html("");
	}else if(txtLvl == 2){
		$("#instrucoes").html("");
	}
}

function tocar_trilha(){
	trilha.stop();
	trilha.play();
	
}
	
// JIMBOE
function engine(tipo){

	// Busca ID do HTML
	var 
	init = document.getElementById("init"),
	conteudo = document.getElementById("content");

	// Cria os elementos
	var	
	header = document.createElement("div"),
	iconHeader = document.createElement("div"),
	tituloHeader = document.createElement("h1"),
	btnOptions = document.createElement("div"),
	activeOptions = document.createElement("div"),
	listOptions = document.createElement("ul"),
	instrucoes = document.createElement("div"),
	setaInstrucoes = document.createElement("div"),
	overlayOptions = document.createElement("div");
		
	// Seta as Classes e variáveis	
	header.setAttribute("id","header");
	iconHeader.setAttribute("class", "img"+config.genero+" icon");
	btnOptions.setAttribute("id","btnOptions");
	activeOptions.setAttribute("class","actionOptions");
	listOptions.setAttribute("id","navOptions");
	instrucoes.setAttribute("id","instrucoes");
	setaInstrucoes.setAttribute("class","seta");
	overlayOptions.setAttribute("class","overlayOptions");
		
	var
	btnStartCapa = $("#capa .acoes div:first-child"),
	subHeader = $(".subheader");
	subHeaderText = $(".subheader p");
	botaoPop = $(".btnFechaPopUp, .btnFechaSmall, .btnFechaSmallFinaliza"),
	jnlFeed = $(".feedback, .feedsmall"),
	srcBotao1 = new Array ("btnHome","btnSom","btnInstrucoes"),
	tituloNavegador = $("head title");
	
	for(var m=0;m < srcBotao1.length;m++){
		var list = document.createElement("li");
			list.setAttribute("class","btnOption "+ srcBotao1[m]);
		var imgList = document.createElement("img");
			imgList.setAttribute("src","img/"+srcBotao1[m]+".png");
			list.appendChild(imgList);				
			listOptions.appendChild(list);
			header.appendChild(listOptions);
	}
		
	// Create DOM
	tituloNavegador.html(config.ano+" - "+config.titulo);
	init.insertBefore(header, conteudo);
	init.appendChild(overlayOptions);
	header.appendChild(iconHeader);
	header.appendChild(tituloHeader);
	header.appendChild(btnOptions);
	btnOptions.appendChild(activeOptions);
	instrucoes.appendChild(setaInstrucoes);
	header.appendChild(instrucoes);
	tituloHeader.innerHTML = config.titulo;
	iconHeader.style.backgroundImage = config.genero;
	
	if(tipo == "matematica"){
		$("body").css({background:config.matematica.bck});
		iconHeader.style.backgroundColor = config.matematica.cp4;
		header.style.backgroundColor = config.matematica.cp1; 
		btnOptions.style.background = config.matematica.btnOptions;
		btnStartCapa.css("background-color",config.matematica.cs1);	
		subHeader.css({"background-color":config.matematica.cs1, width:"335px"});
		subHeaderText.text(config.ano);
		botaoPop.css("background-color",config.matematica.cs1);
		$("#instrucoes").css("background",config.matematica.cp1);
		$(".seta").css("border-left-color",config.matematica.cp1);
		jnlFeed.css("border", "5px solid "+config.matematica.cs1);
	}else if(tipo == "portugues"){
		$("body").css({background:config.portugues.bck});
		iconHeader.style.backgroundColor = config.portugues.cp4;
		header.style.backgroundColor = config.portugues.cp1; 
		btnOptions.style.background = config.portugues.btnOptions;
		btnStartCapa.css("background-color",config.portugues.cs1);	
		subHeader.css({"background-color":config.portugues.cs1, width:"110px"});	
		subHeaderText.text(config.ano);
		botaoPop.css("background-color",config.portugues.cs4);
		jnlFeed.css("border", "5px solid "+config.portugues.cs4);
		$("#instrucoes").css("background",config.portugues.cp1);
		$(".seta").css("border-left-color",config.portugues.cp1);
	}else if(tipo == "geografia"){
		$("body").css({background:config.geografia.bck});
		iconHeader.style.backgroundColor = config.geografia.cp4;
		header.style.backgroundColor = config.geografia.cp1; 
		btnOptions.style.background = config.geografia.btnOptions;
		botaoPop.css("background-color",config.geografia.cs4);
		btnStartCapa.css("background-color",config.geografia.cs1);	
		subHeader.css({"background-color":config.geografia.cs1, width:"110px"});	
		subHeaderText.text(config.ano);
		jnlFeed.css("border", "5px solid "+config.geografia.cs4);
		$("#instrucoes").css("background",config.geografia.cp1);
		$(".seta").css("border-left-color",config.geografia.cp1);
	}else if(tipo == "ciencias"){
		$("body").css({background:config.ciencias.bck});
		iconHeader.style.backgroundColor = config.ciencias.cp4;
		header.style.backgroundColor = config.ciencias.cp1; 
		btnOptions.style.background = config.ciencias.btnOptions;
		btnStartCapa.css("background-color",config.ciencias.cs1);	
		subHeader.css({"background-color":config.ciencias.cs1, width:"110px"});	
		subHeaderText.text(config.ano);
		botaoPop.css("background-color",config.ciencias.cs4);
		jnlFeed.css("border", "5px solid "+config.ciencias.cs4);
		$("#instrucoes").css("background",config.ciencias.cp1);
		$(".seta").css("border-left-color",config.ciencias.cp1);
	}else if(tipo == "historia"){
		$("body").css({background:config.historia.bck});
		iconHeader.style.backgroundColor = config.historia.cp4;
		header.style.backgroundColor = config.historia.cp1; 
		btnOptions.style.background = config.historia.btnOptions;
		btnStartCapa.css("background-color",config.historia.cs1);	
		subHeaderText.text(config.ano);
		subHeader.css({"background-color":config.historia.cs1, width:"110px"});	
		botaoPop.css("background-color",config.historia.cs4);
		jnlFeed.css("border", "5px solid "+config.historia.cs4);
		$("#instrucoes").css("background",config.historia.cp1);
		$(".seta").css("border-left-color",config.historia.cp1);
	}
}
// Configura Objeto
var config = {
	create: function(){
		engine("matematica"); // 1 - português // 2 - matemática // 3 - ciências // 4 - história // 5 - geografia
	},
	titulo: "Operações estelares",
	tipo: "Pnld 2016",
	colecao: "Jimboe",
	ano: "MATEMÁTICA | 2º ANO",
	genero: "home", // 1 - infografico / 2 - jogo / 3 - video/ 4-dragindrop
	
	matematica: {
		cp1: "rgba(46,86,166,1)",
		cp2: "rgba(136,178,223,1)",
		cp3: "rgba(14,49,120,1)",
		cp4: "rgba(18,23,57,1)",
		cs1: "rgba(246,140,61,1)",
		cs2: "rgba(253,209,176,1)",
		cs3: "rgba(251,178,115,1)",
		cs4: "rgba(192,102,22,1)",
		bck: "url(img/background-matematica.gif) repeat center",
		btnOptions: "url(img/btnOptionsMatematica.png) no-repeat bottom right"
	},
	ciencias: {
		cp1: "rgba(1,186,189,1)",
		cp2: "rgba(119,205,208,1)",
		cp3: "rgba(0,125,126,1)",
		cp4: "rgba(0,72,74,1)",
		cs1: "rgba(237,26,59,1)",
		cs2: "rgba(245,151,149,1)",
		cs3: "rgba(241,102,106,1)",
		cs4: "rgba(196,18,47,1)",
		bck: "url(img/background-ciencias.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsCiencias.png) no-repeat bottom right"
	},
	historia: {
		cp1: "rgba(112,89,166,1)",
		cp2: "rgba(176,163,208,1)",
		cp3: "rgba(92,46,145,1)",
		cp4: "rgba(52,12,61,1)",
		cs1: "rgba(209,162,28,1)",
		cs2: "rgba(238,221,140,1)",
		cs3: "rgba(225,198,102,1)",
		cs4: "rgba(163,139,16,1)",
		bck: "url(img/background-historia.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsHistoria.png) no-repeat bottom right"
	},
	portugues: {
		cp1: "rgba(237,20,91,1)",
		cp2: "rgba(245,152,157,1)",
		cp3: "rgba(176,4,65,1)",
		cp4: "rgba(93,0,35,1)",
		cs1: "rgba(0,169,100,1)",
		cs2: "rgba(165,217,201,1)",
		cs3: "rgba(79,190,149,1)",
		cs4: "rgba(0,98,58,1)",
		bck: "url(img/background-portugues.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsPortugues.png) no-repeat bottom right"
	},
	geografia: {
		cp1: "rgba(180,62,151,1)",
		cp2: "rgba(199,142,191,1)",
		cp3: "rgba(143,43,120,1)",
		cp4: "rgba(104,0,89,1)",
		cs1: "rgba(77,184,72,1)",
		cs2: "rgba(196,223,155,1)",
		cs3: "rgba(151,203,89,1)",
		cs4: "rgba(33,116,52,1)",
		bck: "url(img/background-geografia.gif) repeat bottom",
		btnOptions: "url(img/btnOptionsGeografia.png) no-repeat bottom right"
	}
}

$(window).resize(function(){
	updateScale();
});
// Funções de Pop Up
function PopUpSmall(posTxt,imagem,descricao){
	var popup = $(".overlay-small");
	var popupC = $(".overlay-small .feedsmall");
	var posText = $(".overlay-small .feedsmall p");
	
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
	config.create(); // Seta as propriedades principais do Objeto e executa
	PopUpSmall(25,"imgMsgFeed","PARA ENCONTRAR OS PARES NO JOGO DA MEMÓRIA, RESOLVA AS MULTIPLICAÇÕES.");
	//Variáveis da capa
	var 
	capa = {
		imagem: $("#capa"),
		cabecalho: $("#capa .header"),
		subcapa: $("#capa .subheader"),
		tituloCabecalho: $("#capa .header h1"),
		botaoIniciar: $("#capa .acoes div:first-child"),
		botaoCredito: $("#capa .acoes div:nth-child(2)"),
		creditos: {
			janela: $("#creditos"),
			texto: $(".text-creditos"),
			botaoFechar: $(".btnFechaCreditos")
		}
	}
	// Variáveis do menu Opções do Objeto
	var 
	opcoes = {
		ativo:0,
		tool: $(".actionOptions"),
		botoes: $("#navOptions"),
		overlay: $(".overlayOptions"),
		menu: {
			geral: $("#navOptions li"),
			background: $("#btnOptions"),
			atualizar: $(".imghome"),
			principal: $(".btnMenu"),
			som: $(".btnSom"),
			somOff: $(".btnSomOff"),
			instrucoes: $(".btnInstrucoes")
		},
		cntInstrucoes: $("#instrucoes"),
		textoInstrucoes: "Clique nas cartas para formar pares. Serão 3 fases para você praticar."
	}
	
		// Variáveis diversas
	var
	sons = $("audio");
	audioTrilha = $(".som-ambiente");
	audioAcerto = $(".som-acerto");
	audioErro = $(".som-erro");
	audioNarracao1 = $(".som-texto1");
	audioNarracao2 = $(".som-texto2");
	audioNarracao3 = $(".som-texto3");
	audioNarracao4 = $(".som-texto4");
	animacao = $("#interaction");

	// Variáveis diversas
	var
	audioTrilha = $(".musica-som");
	audioAcerto = $(".acerto-som");
	audioErro = $(".erro-som");
	animacao = $("#interaction");
	
	//Carrega Capa
	capa.cabecalho.show().addClass("animated slideInRight");
	capa.tituloCabecalho.text(config.titulo);
	setTimeout(function(){
		capa.subcapa.css({"margin-top":"-200px",opacity:"1"});
		capa.botaoIniciar.show().addClass("animated lightSpeedIn");
		setTimeout(function(){capa.botaoIniciar.removeClass("animated lightSpeedIn");},1000);
		capa.botaoCredito.delay(500).fadeIn(500);
	},1000);
			
	//Config audio
	function loadAudio(){
		audioTrilha.bind('load');
		audioTrilha.trigger('load');	
		audioAcerto.bind('load');
		audioAcerto.trigger('load');	
		audioErro.bind('load');
		audioErro.trigger('load');	
	}
	function startAudio(){
		audioTrilha.trigger('play');
	}
	function stopAudio(){pauseAudio();audioTrilha.prop("currentTime",0);}
	function pauseAudio(){audioTrilha.trigger('pause');}
	function forwardAudio(){pauseAudio();audioTrilha.prop("currentTime",audioTrilha.prop("currentTime")+5);startAudio();}
      function backAudio(){pauseAudio();audioTrilha.prop("currentTime",audioTrilha.prop("currentTime")-5);startAudio();}
	function volumeUp(){var volume = audioTrilha.prop("volume")+0.2;if(volume >1){volume = 1;}audioTrilha.prop("volume",volume);}
	function volumeDown(){var volume = audioTrilha.prop("volume")-0.2;if(volume <0){volume = 0;}audioTrilha.prop("volume",volume);}
      function toggleMuteAudio(){
		audioTrilha.prop("muted",!audioTrilha.prop("muted"));
		audioAcerto.prop("muted",!audioAcerto.prop("muted"));
		audioErro.prop("muted",!audioErro.prop("muted"));
	}
	
	
	
// --------------------------- Botões Padrões
	// Inicia Objeto
	capa.botaoIniciar.on("click",function(){
		trilha.play();
		capa.cabecalho.css({marginTop:"-380px"});
		capa.botaoIniciar.css({width:"0", marginRight:"-50px"});
		capa.botaoCredito.css({marginLeft:"250px"});
		setTimeout(function(){
			capa.imagem.fadeOut(300,function(){
				$(this).remove();
				$(".som-ambiente")[0].play();
				$(".som-ambiente").prop("volume", 0.5);
				$(".som-texto1").get(0).play();
			});
		},800);
	});
	
	
	function iniciar_oed_funcoes(){
	
		trilha.play();
		capa.cabecalho.css({marginTop:"-380px"});
		capa.botaoIniciar.css({width:"0", marginRight:"-50px"});
		capa.botaoCredito.css({marginLeft:"250px"});
		setTimeout(function(){
			capa.imagem.fadeOut(300,function(){
				$(this).remove();
				$(".som-ambiente")[0].play();
				$(".som-ambiente").prop("volume", 0.5);
				$(".som-texto1").get(0).play();
			});
		},800);
	}
	
	// Ativa créditos
	capa.botaoCredito.on("click",function(){
		$(this).fadeOut(500);		
		capa.creditos.janela.fadeIn(500,function(){
			capa.creditos.texto.stop().animate({marginTop:"-340px"},25000, "linear");
			starwars = setInterval(function(){
				capa.creditos.texto.css({marginTop:"261px"}).stop().animate({marginTop:"-340px"},25000, "linear");
			},25000);
			
		});
	});
	
	//Fecha os créditos
	capa.creditos.botaoFechar.on("click",function(){
		capa.creditos.texto.stop().css({marginTop:"261px"});
		clearInterval(starwars);
		capa.creditos.janela.fadeOut(500);
		capa.botaoCredito.fadeIn(500);
	});

	// Abre opções do Objeto
	opcoes.tool.on({
		click:function(){
			if(opcoes.ativo == 0){
				textosInstrucoes(txtLvl);
				$(this).parent().css("box-shadow","-5px -25px 10px rgba(0,0,0,.5)");
				$(this).css("opacity",".3");
				opcoes.cntInstrucoes.removeClass("animated rotateOutUpRight");
				opcoes.cntInstrucoes.show().addClass("animated rotateInDownRight");
				opcoes.ativo = 1;
			}else{
				$(this).parent().css("box-shadow","none");
				$(this).css("opacity","1");
				opcoes.cntInstrucoes.removeClass("animated rotateInDownRight");
				opcoes.cntInstrucoes.addClass("animated rotateOutUpRight");
				opcoes.ativo = 0;
			}
		}
	});
	
	opcoes.overlay.on({
		click: function(){
			opcoes.tool.removeClass("opened").css({backgroundPosition:"11px 15px"});
			opcoes.botoes.hide();
			opcoes.menu.background.css({height:"78px", backgroundPosition:"bottom"});
			$(".overlayOptions").hide();
			if($(".seta").is(":visible")){
				opcoes.cntInstrucoes.css({
				width:"0px",
				opacity:"0"
				});
				$(".seta").fadeOut(200);
				$("#instrucoes p").remove();
			}
		}
		
	});
	// Botão Volta pra capa
	opcoes.menu.atualizar.on("click",function(){
		//location.href="index.html"
		sessionStorage.setItem('reiniciar_oed', 'sim');

	});

	animacao.sprite({fps: 5, no_of_frames: 11});
	var botaoFechaPop = $(".btnFechaPopUp");
	var botaoFechaSmall = $(".btnFechaSmall");
	var botaoFechaSmallFinaliza = $(".btnFechaSmallFinaliza");
	
	//Botão que fecha o Pop e Small
	botaoFechaSmall.on({
		click: function(){
			$(".feedsmall").css({
				"transform":"scale(0)",
				"-moz-transform":"scale(0)",
				"-ms-transform":"scale(0)",
				"-o-transform":"scale(0)",
				"-webkit-transform":"scale(0)"
			});
			audioNarracao1.get(0).pause();
			audioNarracao2.get(0).pause();
			audioNarracao3.get(0).pause();
			audioNarracao4.get(0).pause();

	
			setTimeout(function(){
				$(".overlay-small").fadeOut(300);
				//desliga = 'play';
			},500);
		}
	});
	botaoFechaSmallFinaliza.on({
		click: function(){
			//location.href="index.html"
			sessionStorage.setItem('reiniciar_oed', 'sim');

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
	trilha.play();
	trilha.stop();
	$(".som-texto1").get(0).play();
	iniciar_oed_funcoes();
	clearInterval(verificar_inicio_cnd);
}

// Começa a config do jogo ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(function() {
	var carta_r1 = '';
	var carta_r2 = '';
	var acertos = 0;
	var nErros = 1;
	var nAcertos = 1;
	$('#fase1 .carta').on("click", function(){
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
                timeoutID = window.setTimeout("voltaCarta();", 800);
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
				timeoutID = window.setTimeout("voltaCarta();", 800);
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
			timeoutID = window.setTimeout("voltaCarta();", 800);
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


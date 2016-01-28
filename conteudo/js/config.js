/*!
 * Copyright 2015 By Editora do Brasil
 * By: Tiago Juvenal de Lima
 * Email: tiago.jlima.developer@gmail.com

 * Foca no Código *

        .---.
       /o   o\
    __(=  "  =)__
     //\'-=-'/\\
        )   (_
       /      `"=-._
      /       \     ``"=.
     /  /   \  \         `=..--.
 ___/  /     \  \___      _,  , `\
`-----' `""""`'-----``"""`  \  \_/

*/

var CONFIG = [
	{
		// INFORMAÇÕES PRINCIPAIS DO OED
		infoOed: {
			// Tipo do OED: objeto ou video
			tipo: 'objeto', 
			// Template do OED: akpalo, apoema, jimboe 
			template: 'akpalo', 
			// Disciplina do OED AKPALO | portugues, matematica, historia, geografia, ciencias
			// Disciplina do OED APOEMA | portugues, matematica, historia, geografia, ciencias, biologia, espanhol, ingles, gramatica  
			disciplina: 'matematica', 
			// Ano dio
			ano: 2, 
			// Título do OED  
			titulo: 'Operações estelares', 
			// Texto de Instruções do OED 
			instrucoes: 'Clique nas cartas para formar pares. Serão 3 fases para você praticar.',
			// Texto de Navegação do OED
			navegacao: '',  
			// Título do Crédito Akpalo, PROJETO OU COLEÇÃO
			tituloCreditoAkpalo: 'Coleção Akpalô',
			// Título do Crédito Apoema, PROJETO OU COLEÇÃO
			tituloCreditoApoema: 'Projeto'
		},

		// INFORMAÇÕES DO CRÉDITO
		infoCreditos: [
			// Cada inserção de credito, favor separar por virgula no fim ex: "TEXTO CRÉDITO", 
			// Descartar a ultima linha q está comentado como "NÃO MEXER"

			// INICIO
			"<strong>Supervisão de arte, editoração e produção digital</strong><br />Adelaide Carolina Cerutti",
			"<strong>Coordenação de produção digital</strong><br />Daniel Cilli",
			"<strong>Design instrucional</strong><br />Fábio Algarve e Mateus Carneiro Ribeiro Alves",
			"<strong>Web design</strong><br />Thiago Hille e Tiago Lima",
			"<strong>Assistência de design digital</strong><br />Emília Akemi",
			"<strong>Assistência de arte</strong><br />Livia Danielli",
			"<strong>Revisão</strong><br />Equipe Revisão",
			"<strong>Pesquisa iconográfica</strong><br />Mariane Mota",
			"<strong>Imagens/Ilustrações</strong><br />Shutterstock",
			"<strong>Áudio</strong><br />Stereobot e Soundsnap",
			"<strong>Narração</strong><br />Carla Rebelo",
			"<strong>Controle de processos editoriais</strong><br />Equipe CPE",		
			// FIM
			
			// Fim dos Créditos, favor não mexer, se tirar essas aspas duplas vai dar bug ;)
			" "		
		]
	}
];
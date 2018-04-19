$(document).ready(function(){
	for(i=0;i<$("td[data-etiqueta]").length;i++){
		marca(i);
	}
	
	function marca(i){
		$("#"+$("td[data-etiqueta]")[i].id).click(function(){
			if(document.getElementById($("td[data-etiqueta]")[i].id).style.backgroundColor === "yellow"){
				document.getElementById($("td[data-etiqueta]")[i].id).style.backgroundColor = "white";
			}else{
				document.getElementById($("td[data-etiqueta]")[i].id).style.backgroundColor = "yellow";
			}
			var id = $("td[data-etiqueta]")[i].id;
			var etiquetas = {
				//O id deve ser identico ao nome do atributo
				//1 significa que o campo foi marcado para ser etiquetado
				id : "1"
			};
			$.ajax({
                type: "POST",
                url: "@Url.Action("Etiquetar", "PropostaOperacao")",
                data: JSON.stringify(etiquetas),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            });
            return false;
		});
	}
});

//Criar uma tabela só pra etiquetas(Id,NomeEtiqueta,Origem,Criado,Atualizado,ReferenceId)
/*
Ex:
0 | "30" | "PropostaOperacao" | "18/04/2018" | null | 38935(Borderô)
*/
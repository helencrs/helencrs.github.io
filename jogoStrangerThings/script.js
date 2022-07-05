var titulo = "O quanto você conhece a série??";
var teste = [
    {
        "pergunta"      :   "Que personagem foi pego primeiro pelo Demogorgon?",
        "imagem"        :   "https://cdn.awsli.com.br/1000x1000/1206/1206083/produto/121642393/3a6c71c334.jpg",
        "alternativas"       :   [
                                "Eleven",
                                "Barbara",
                                "Will",
                                "Mike"
                            ],
        "certo"         :   "Will",
    },
    {
        "pergunta"      :   "Qual era o nome da Max nos jogos do fliperama??",
        "imagem"        :   "https://cdn.shopify.com/s/files/1/0554/3497/files/Sin_titulo-1_a8800908-028b-4b87-87a8-60a0c50db890_2048x2048.jpg?v=1513496653",
        "alternativas"       :   [
                                "MainMax",
                                "MadMax",
                                "Maxine",
                                "SuperMax"
                            ],
        "certo"         :   "MadMax",
    },
    {
        "pergunta"      :   "Qual a comida preferida da Eleven?",
        "imagem"        :   "https://observatoriodeseries.uol.com.br/wp-content/uploads/2018/11/intro-1531234903.jpg",
        "alternativas"       :   [
                                "Panqueca Americana",
                                "Waffle",
                                "Pizza",
                                "Sorvete"
                            ],  
        "certo"         :   "Waffle",
    },
    {
      "pergunta"      :   "Qual música o Will cantava no mundo invertido?",
      "imagem"        :   "https://cdn.falauniversidades.com.br/wp-content/uploads/2019/09/music-460x254.jpg",
      "alternativas"       :   [
                              "Running Up That Hill - Kate Bush",
                              "California Dreamin - The Beach Boys",
                              "Africa - Toto",
                              "Should I Stay or Should I Go - The Clash"
                          ],  
      "certo"         :   "Should I Stay or Should I Go - The Clash",
  },
  {
      "pergunta"      :   "Em que época a série se passa?",
      "imagem"        :   "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/11/stranger-things.jpg",
      "alternativas"       :   [
                            "Anos 70",
                            "Anos 80",
                            "Anos 90",
                            "Anos 2000"
                        ],  
      "certo"         :   "Anos 80",
  },
    {
      "pergunta"      :   "Qual o clube de RPG do Eddie?",
      "imagem"        :   "https://pt.moyens.net/wp-content/uploads/2022/06/4a-Temporada-de-Stranger-Things-Eddie-Munson-morre-no-segundo.jpg",
      "alternativas"       :   [
                            "Hellfire Club",
                            "D&D Club",
                            "RPG Club",
                            "Besties Club"
                        ],  
      "certo"         :   "Hellfire Club",
  },
];


var currentpergunta=0, ponto=0, resposta=true, escolha;

jQuery(document).ready(function(e){function h(i)
  {
    return e(document.createElement("div")).text(i).html()
  }
    
  function b(k)
  {
    if(typeof k!=="undefined"&&e.type(k)=="array")
    {
      e("#alternativa-block").empty();
      for(var j=0;j<k.length;j++)
      {
        e(document.createElement("li")).addClass("alternativa alternativa-btn").attr("data-index",j).text(k[j]).appendTo("#alternativa-block")
      }
    }
  }
    
  function d()
  {
    resposta=true;e().empty();
    e("#pergunta").text(teste[currentpergunta]["pergunta"]);
    if(teste[currentpergunta].hasOwnProperty("imagem")&&teste[currentpergunta]["imagem"]!="")
    {
      if(e("#pergunta-imagem").length==0){e(document.createElement("img")).addClass("pergunta-imagem").attr("id","pergunta-imagem").attr("src",teste[currentpergunta]["imagem"]).attr("alt",h(teste[currentpergunta]["pergunta"])).insertAfter("#pergunta")
    }else
    {
      e("#pergunta-imagem").attr("src",teste[currentpergunta]["imagem"]).attr("alt",h(teste[currentpergunta]["pergunta"]))
    }
  }else
  {
    e("#pergunta-imagem").remove()
  }b(teste[currentpergunta]["alternativas"]);c()
  }
  
  function f(i)
  {
    if(teste[currentpergunta]["alternativas"][i]==teste[currentpergunta]["certo"]){e(".alternativa").eq(i).css({"background-color":"#2bf207"});
    e().html("<strong>Certo!</strong> "+h(teste[currentpergunta]));
    ponto++
  }else
  {
    e(".alternativa").eq(i).css({"background-color":"#f70c0c"});
    e().html("<strong>Errado.</strong> "+h(teste[currentpergunta]))
  }
  currentpergunta++;e("#button").html("Próxima pergunta").on
  ("click",function()
  {
    if(currentpergunta==teste.length)
    {
      a()
    }else
    {
      e(this).text("Responder").css({color:"#000000"}).off("click");d()
    }
  }
  )
  }

  function c()
  {
    e(".alternativa").on
    ("mouseover",function()
    {
      e(this).css({"background-color":"#000000"})
    }
    );
      e(".alternativa").on
      ("mouseout",function(){e(this).css({"background-color":"#000000"})
    }
    );
    e(".alternativa").on
    ("click",function()
    {
      escolha=e(this).attr("data-index");
      e(".alternativa").removeAttr("style").off("mouseout mouseover");
      e(this).css({"border-color":"#000000","font-weight":700,"background-color":"#000000"});
      if(resposta)
      {
        resposta=false;
        e("#button").css({color:"#000000"}).on("click",function()
        {
          e(".alternativa").off("click");e(this).off("click");
          f(escolha)
        }
        )
      }
    }
    )
  }

  function a()
  {
    e().empty();
    e("#pergunta").empty();
    e("#alternativa-block").empty();
    e("#button").remove();
    e("#pergunta").text("Você acertou " +ponto+ " de "+teste.length);
    e(document.createElement("h2")).css({"text-align":"center","font-size":"30px"}).text(Math.round(ponto/teste.length*100)+"%").insertAfter("#pergunta")
  }
  
  function g(){if(typeof titulo!=="undefined"&&e.type(titulo)==="string")
  {
    e(document.createElement("h1")).text(titulo).appendTo("#quiz")
  }else
  {
    e(document.createElement("h1")).text("Quiz").appendTo("#quiz")
  }
  if(typeof teste!=="undefined"&&e.type(teste)==="array")
  {
    e(document.createElement("h2")).addClass("pergunta").attr("id","pergunta").text(teste[0]["pergunta"]).appendTo("#quiz");
    if(teste[0].hasOwnProperty("imagem")&&teste[0]["imagem"]!="")
    {
      e(document.createElement("img")).addClass("pergunta-imagem").attr("id","pergunta-imagem").attr("src",teste[0]["imagem"]).attr("alt",h(teste[0]["pergunta"])).appendTo("#quiz")
    }
      e(document.createElement("ul")).attr("id","alternativa-block").appendTo("#quiz");
      b(teste[0]["alternativas"]);
      e(document.createElement("div")).addClass("alternativa-btn").attr("id","button").text("Responder").appendTo("#quiz");
      c()
    }
  }g()
}
);

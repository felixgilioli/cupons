function showCupons(cuponsJson) {
    var cuponsLi = cuponsJson["cupons"].map(cupom => {
        var li = document.createElement("li");

        var cupomCard = document.createElement("div");
        cupomCard.classList.add("cupom-card");

        var img = document.createElement("img");
        img.classList.add("site-logo");
        img.src = cupom["image"];
        img.style.width = "150px";

        cupomCard.appendChild(img);

        var cupomInfo = document.createElement("div");
        cupomInfo.classList.add("cupom-info");


        var table = document.createElement("table");
        var thead = document.createElement("thead");
        var tbody = document.createElement("tbody");

        table.appendChild(thead);

        var trHeader = document.createElement("tr");
        thead.appendChild(trHeader);

        var th = document.createElement("th");
        th.classList.add("text-center");
        th.colSpan = 2;
        th.textContent = cupom["titulo"];

        trHeader.appendChild(th);

        // tr valido
        var trValido = document.createElement("tr");
        var tdValido1 = document.createElement("td");
        tdValido1.textContent = "Válido até:";
        trValido.appendChild(tdValido1);

        var tdValido2 = document.createElement("td");
        tdValido2.textContent = cupom["dataExpiracao"];
        trValido.appendChild(tdValido2);

        tbody.appendChild(trValido);


        // tr site
        var trSite = document.createElement("tr");
        var tdSite1 = document.createElement("td");
        tdSite1.textContent = "Site:";
        trSite.appendChild(tdSite1);

        var tdSite2 = document.createElement("td");
        
        var site = document.createElement("a");
        site.href = cupom["site"];
        site.textContent = cupom["site"];
        site.target = "_blank";
        tdSite2.appendChild(site);

        trSite.appendChild(tdSite2);

        tbody.appendChild(trSite);


        // tr regras
        var trRegras = document.createElement("tr");
        var tdRegras1 = document.createElement("td");
        tdRegras1.textContent = "Regras:";
        trRegras.appendChild(tdRegras1);

        var tdRegras2 = document.createElement("td");
        tdRegras2.textContent = cupom["regras"];
        trRegras.appendChild(tdRegras2);

        tbody.appendChild(trRegras);



        // tr cupom
        var trCupom = document.createElement("tr");
        var tdCupom = document.createElement("td");
        tdCupom.colSpan = 2;
        tdCupom.classList.add("td-cupom-codigo");

        var spanCupom = document.createElement("span");
        spanCupom.classList.add("cupom-codigo");
        spanCupom.textContent = cupom["codigo"];
        tdCupom.appendChild(spanCupom);

        trCupom.appendChild(tdCupom);
        tbody.appendChild(trCupom);




        table.appendChild(tbody);

        cupomInfo.appendChild(table);


        cupomCard.appendChild(cupomInfo);


        li.appendChild(cupomCard);

        return li;
    });

    cuponsLi.forEach(li => document.querySelector(".lista-cupons").appendChild(li));
}


fetch("https://raw.githubusercontent.com/felixgilioli/cupons/main/cupons.json")
  .then(response => response.json())
  .then(cuponsJson => {
    showCupons(cuponsJson);
  });


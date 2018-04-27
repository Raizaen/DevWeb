function verifier(){
					var nom = window.document.getElementById("nom");
					if (nom.value == "") {
						alert("vous n'avez pas rentré votre nom");
						return false;
						
					}
					var monsieur = window.document.getElementById("monsieur");
					var madame = window.document.getElementById("madame");
					if (monsieur.checked == false && madame.checked == false) {
						alert("Vous devez séléctionner \"Madame\" ou \"Monsieur\"");
						return false;
					}
					var msg = "";
					if (monsieur.checked == true)
						msg = "Monsieur ";
					else
						msg = "Madame ";
					msg+= nom.value + ", vos données ont bien été transmises. Merci !";
					alert(msg);
					return true;
				}
			var R = 0;
			
			var D= [
				["Côtes-d'Armor", "Finistère", "Ille-et-Vilaine", "Mobihan"],
				["Loire-Atlantique", "Maine-et-Loire", "Mayenne", "Sarthe", "Vendée"]
			];
			var Num= [
				[22, 29, 35, 56],
				[44, 49, 53, 72, 85]
			];

			function update() {
				var region = window.document.getElementById("region");
				var departement = window.document.getElementById("departement");
				
				R =region.selectedIndex;
				//if(region.selected.value=="...") R=0; else R=1
				
				//departement.innerHTML = ""; // efface tous les fils
				while(departement.firstChild) {
					departement.removeChild(departement.firstChild);
				}
				for(i = 0; i < D[R].length; i++) /*for(i,D[R])*/ {
					var option = window.document.createElement("option");
					option.setAttribute("value", Num[R][i]); // setAttribute("nomAttribut", value)
					option.innerHTML = D[R][i];
					departement.appendChild(option);
				}
				
			}
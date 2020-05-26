
	var _0x1a3f=["\x73\x63\x72\x65\x65\x6E","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x20\x53\x69\x6D\x70\x6C\x65\x20\x43\x61\x6C\x63\x75\x6C\x61\x74\x6F\x72\x20\x42\x79\x20\x40\x6E\x76\x6B\x65\x78\x20","\x76\x61\x6C\x75\x65","\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65"];function introduce(){var _0x16d5x2=document[_0x1a3f[1]](_0x1a3f[0]);var _0x16d5x3=_0x1a3f[2];_0x16d5x2[_0x1a3f[4]](_0x1a3f[3]);_0x16d5x2[_0x1a3f[5]](_0x1a3f[3],_0x16d5x3)}

	function numOp(n){
		var scr = document.getElementById("screen");
		var line = scr.value;
		if(line == "0")
			line = "";
		line = line.concat(n);
		scr.removeAttribute("value");
		scr.setAttribute("value",line);
	}

	function clearscr(){
		var scr = document.getElementById("screen");
		var str = "0";
		scr.removeAttribute("value");
		scr.setAttribute("value",str);
	}

	function backspc(){
		var scr = document.getElementById("screen");
		var line = scr.value;
		if(line.length == 1)
			line = "0";
		else{
			line = line.slice(0,-1);	
		}
		scr.removeAttribute("value");
		scr.setAttribute("value",line);		
	}

	function evalExp(){
		var scr = document.getElementById("screen");
		var line = scr.value + "="; //Full expression
		var res = 0; //Result
		var nxt = "";
		var op = '+';

		for(var i=0;i<line.length;i++){

			//get numbers and operators
			if(line.charAt(i).match(/\d/)!=null)
				nxt = nxt + line.charAt(i);
			else{
				nxt = Number(nxt);
				switch(op){
					case '+':
						res = (res + nxt);
						break;
					case '-':
						res = (res - nxt);
						break;
					case '*':
						res = (res * nxt);
						break;
					case '/':
						res = (res / nxt);
						break;
				}

				op = line.charAt(i);
				nxt = "";
			}
		}

		line = line + String(res);
		scr.removeAttribute("value");
		scr.setAttribute("value",line);	
	}

	function changeColor(x){
		var box = document.getElementById("divContnr");

		if(x==1){
			box.style.backgroundColor = "rgb(153,102,255,0.7)";
		}
		else if(x==2){
			box.style.backgroundColor = "rgb(209,71,163,0.7)";
		}
		else if(x==3){
			box.style.backgroundColor = "rgb(255,153,51,0.7)";
		}
		else if(x==4){
			box.style.backgroundColor = "rgb(255,77,77,0.7)";
		}
		else if(x==5){
			box.style.backgroundColor = "rgb(255,119,51,0.7)";
		}
		else if(x==6){
			box.style.backgroundColor = "rgb(255,255,77,0.7)";
		}
		else if(x==7){
			box.style.backgroundColor = "rgb(64,191,128,0.7)";
		}
		else if(x==8){
			box.style.backgroundColor = "rgb(71,117,209,0.7)";
		}
		else if(x==9){
			box.style.backgroundColor = "rgb(255,255,255,0.7)";
		}
		else{
			box.style.backgroundColor = "rgb(60, 188, 141,0.7)";
		}
	}

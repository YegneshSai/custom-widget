(function() { 
	let template = document.createElement("template");
	template.innerHTML = `
		<style>
		:host {
			border-radius: 0.5px;
   			box-shadow: 0 4px 8px 0 #CCC, 0 6px 20px 0 #CCC;
      			border-style:solid;
      			border-color:#019CE0;
			display: block;
		} 
  		
		</style> 
  		<body>
    		<h3>Select in the below list</h3>
		
  <input type="checkbox" id="SAC Lilly" name="SAC LILLY" value="SAC LILLY">
					<label for="SAC LILLY">SAC LILLY</label><br>

  			<ul id="list">
     <li>hiii</li>
     </ul>
			
    		</body>
	`;

	class Box extends HTMLElement {
		constructor() {
			super(); 
			let shadowRoot = this.attachShadow({mode: "open"});

			
console.log("in main method");
			shadowRoot.appendChild(template.content.cloneNode(true));
			console.log("hii");
			try{
				let textnode = document.createTextNode("Water");
				shadowRoot.appendChild(textnode);
			
			}
			catch(err) {
				console.log(err);
			}
			
			console.log("heloo");
			try{
				const list_acc= document.createElement("ul");
				const ele= document.createElement("li");
				let acc = document.createTextNode("lilly");
				ele.appendChild(acc);
				ele.appendChild(acc);
				list_acc.appendChild(ele);
				shadowRoot.appendChild(list_acc);
			}
			catch(err) {
				console.log(err);
			}

			
			this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
			});
			this._props = {};
		}

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = { ...this._props, ...changedProperties };
		}

		onCustomWidgetAfterUpdate(changedProperties) {
			if ("color" in changedProperties) {
				this.style["background-color"] = changedProperties["color"];
			}
			if ("opacity" in changedProperties) {
				this.style["opacity"] = changedProperties["opacity"];
			}
			if ("data" in changedProperties) {
				console.log("can do change");
				console.log("inside insertion");
			try{
				const list_acc= document.createElement("ul");
				const ele= document.createElement("li");
				let acc = document.createTextNode(changedProperties["data"]);
				ele.appendChild(acc);
				ele.appendChild(acc);
				list_acc.appendChild(ele);
				this.shadowRoot.appendChild(list_acc);
			}
			catch(err) {
				console.log("error in insertion");
				console.log(err);
			}
			}
		}
	}

	customElements.define("com-sample-box", Box);
})();

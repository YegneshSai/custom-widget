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
  		.collapsible {
		  background-color: #777;
		  color: white;
		  cursor: pointer;
		  padding: 18px;
		  width: 100%;
		  border: none;
		  text-align: left;
		  outline: none;
		  font-size: 15px;
		}
		
		.active, .collapsible:hover {
		  background-color: #555;
		}
		
		.collapsible:after {
		  content: '\002B';
		  color: white;
		  font-weight: bold;
		  float: right;
		  margin-left: 5px;
		}
		
		.active:after {
		  content: "\2212";
		}
		
		.content {
		  padding: 0 18px;
		  max-height: 0;
		  overflow: hidden;
		  transition: max-height 0.2s ease-out;
		  background-color: #f1f1f1;
		}
		</style> 
  		<body>
    		<h3>Select in the below list</h3>
		<form id="list" action="">
  			<ul>
				<input type="checkbox" id="SAC Lilly" name="SAC LILLY" value="SAC LILLY">
	   			<button class="collapsible">Open Collapsible</button>
				<label for="SAC LILLY">SAC LILLY</label><br>
    				<ul class="content">
					<input type="checkbox" id="SAC Lilly" name="SAC LILLY" value="SAC LILLY">
					<label for="SAC LILLY">SAC LILLY</label><br>
		   			<input type="checkbox" id="SAC Lilly" name="SAC LILLY" value="SAC LILLY">
					<label for="SAC LILLY">SAC LILLY</label><br>
    				</ul>
   			</ul>
			
		</form>
    		</body>
	`;

	class Box extends HTMLElement {
		constructor() {
			super(); 
			let shadowRoot = this.attachShadow({mode: "open"});
			shadowRoot.appendChild(template.content.cloneNode(true));
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
		}
	}

	customElements.define("com-sample-box", Box);
})();

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
      		<ul>
		<li>hi</li>
		<li>hello</li>
		</ul>
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

(function()  {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Box Properties</legend>
				<table>
					<tr>
						<td>Color</td>
						<td><input id="styling_color" type="text" size="40" maxlength="40"></td>
					</tr>
				</table>
				<input type="submit" style="display:block;">
			</fieldset>
		</form>
	`;

	class BoxStylingPanel extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
		}

		_submit(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							color: this.color
						}
					}
			}));
		}

		set color(newColor) {
			this._shadowRoot.getElementById("styling_color").value = newColor;
		}

		get color() {
			return this._shadowRoot.getElementById("styling_color").value;
		}
		insert(element){
			console.log("inside insertion");
			try{
				const list_acc= document.createElement("ul");
				const ele= document.createElement("li");
				let acc = document.createTextNode(element);
				ele.appendChild(acc);
				ele.appendChild(acc);
				list_acc.appendChild(ele);
				shadowRoot.appendChild(list_acc);
			}
			catch(err) {
				console.log("error in insertion");
				console.log(err);
			}
		}
	}

customElements.define("com-sample-box-styling", BoxStylingPanel);
	})();

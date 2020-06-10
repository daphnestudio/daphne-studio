import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { BaseComponent } from "src/app/util/base-view";
import { EventManagerService } from "src/app/service/base/event-manager.service";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
	selector: "daphne-body",
	templateUrl: "./body.component.html",
	styleUrls: ["./body.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class BodyComponent extends BaseComponent<any> implements OnInit {

	mainBodyImage: string = "https://it.jobrapido.com/blog/wp-content/uploads/sites/2/2018/06/Beauty-Consultant-di-cosa-si-occupa.jpg";
	bodyformGroup: FormGroup;
	whatsappMessage: string = "";

	constructor(eventManager: EventManagerService, private fb: FormBuilder) {
		super(eventManager);
		this.createForm();
	}

	ngOnInit() { }

	createForm() {
		this.bodyformGroup = this.fb.group({
			name: new FormControl("", Validators.required),
			surname: new FormControl("", Validators.required),
			birthDate: new FormControl("", Validators.required),
			email: new FormControl("", [
				Validators.required,
				Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
			]),
		});
	}

	sendFormData() {
		this.whatsappMessage = `Nome: *${this.bodyformGroup.value.name}* Cognome: *${this.bodyformGroup.value.surname}* Data di nascita: *${this.bodyformGroup.value.birthDate}*. E-mail: *${this.bodyformGroup.value.email}*`;
		let url = `https://wa.me/00393275360115/?text=${this.whatsappMessage}`;
		window.open(url, "_blank");
	}
}

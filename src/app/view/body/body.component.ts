import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { BaseComponent } from "src/app/util/base-view";
import { EventManagerService } from "src/app/service/base/event-manager.service";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

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

	constructor(
		eventManager: EventManagerService,
		private fb: FormBuilder,
		private toastr: ToastrService) {
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
		const { name, surname, birthDate, email } = this.bodyformGroup.value;
		if (this.bodyformGroup.invalid) {
			if (this.bodyformGroup.controls.email.invalid && (
				this.bodyformGroup.controls.name.valid &&
				this.bodyformGroup.controls.surname.valid &&
				this.bodyformGroup.controls.birthDate.valid
			)) {
				this.toastr.error('La mail inserita non è valida', 'Error');
				return;
			}
			this.toastr.error('Tutti i campi sono obbligatori', 'Error');
			return;
		} else {
			this.toastr.success('La tua richiesta verrà presa in carico tra qualche secondo', 'Success');
			setTimeout(() => {
				this.whatsappMessage = `Nome: *${name}* Cognome: *${surname}* Data di nascita: *${moment(new Date(birthDate).toISOString()).format('DD/MM/YYYY')}*. E-mail: *${email}*`;
				let url = `https://wa.me/00393275360115/?text=${this.whatsappMessage}`;
				window.open(url, "_blank");
			}, 4000);
		}
	}
}

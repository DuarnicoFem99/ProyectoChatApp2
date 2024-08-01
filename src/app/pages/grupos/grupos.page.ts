import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage implements OnInit {
mensajes: any;
enviarMensaje() {
throw new Error('Method not implemented.');
}
  grupoTitulo!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const grupoId = params['id'];
      this.grupoTitulo = `Grupo ${grupoId}`;
    });
  }
}







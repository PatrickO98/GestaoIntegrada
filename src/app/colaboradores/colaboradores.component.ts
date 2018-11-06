import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../colaborador';
import { COLABORADORES } from '../colaboradores';
import { ColaboradorService } from '../colaborador.service';
import { FolhaService } from '../folha.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  todosColaboradores: Colaborador[];
  colaboradores: Colaborador[];

  constructor(private colaboradorService: ColaboradorService , private folhaService: FolhaService) { }

  getColaboradores(): void {
    this.colaboradorService.getColaboradores()
      .subscribe(colaboradores => {
        this.colaboradores = colaboradores;
        this.todosColaboradores = colaboradores;
        document.getElementById('load').style.display = "none";
      },
    error => {
      //alert("Erro ao buscar colaboradores.");
    });
  }

  delete(colaborador: Colaborador): void {
    this.colaboradores = this.colaboradores.filter(c => c !== colaborador);
    this.colaboradorService.deleteColaborador(colaborador.id).subscribe();
  }

  ngOnInit() {
    this.getColaboradores();
  }

  filtraFuncionarios(event: KeyboardEvent, param: string): void {
    console.log(this.colaboradores);
    this.colaboradores = this.todosColaboradores.filter(e => e.nome.includes(param));
  }

  calcularSalario(colaborador: Colaborador): number {
    const modal = document.getElementById('modal-'+colaborador.id);

    document.getElementById('salario-'+colaborador.id).style.display = "block";
    this.folhaService.calculoFolhaColaborador(colaborador)
      .subscribe(
        data => {
          data.SalarioBruto = parseFloat(data.SalarioBruto).toFixed(2);
          data.Inss = parseFloat(data.Inss).toFixed(2);
          data.Irrf = parseFloat(data.Irrf).toFixed(2);
          data.AdicionalPericulosidade = parseFloat(data.AdicionalPericulosidade).toFixed(2);
          data.SalarioLiquido = parseFloat(data.SalarioLiquido).toFixed(2);
          document.getElementById('salario-'+colaborador.id).innerHTML =  "Salário Calculado: R$" + data.SalarioBruto.replace('.',',');
          modal.style.display = "block";
          modal.querySelector('.salario-bruto').innerHTML = data.SalarioBruto.replace('.',',');
          modal.querySelector('.inss').innerHTML = data.Inss.replace('.',',');
          modal.querySelector('.irrf').innerHTML = data.Irrf.replace('.',',');
          modal.querySelector('.adicional').innerHTML = data.AdicionalPericulosidade.replace('.',',');
          modal.querySelector('.salario-liq').innerHTML = data.SalarioLiquido.replace('.',',');
        }
      );
    return null;  
  }

  fecharModal(id: number) {
    document.getElementById('modal-'+id).style.display = "none";
  }

}

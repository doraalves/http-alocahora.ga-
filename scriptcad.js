class Professores{
    constructor(){
        this.id = 1;
        this.arrayProf = [];
    }

    salvar(){
        let prof = this.lerDados();

        if(this.validaCampo(prof)){
            this.adicionar(prof);
        }

        this.listaTabela();
        this.excluir();
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProf.length; i++){
            let tr = tbody.insertRow();

            let td_nome = tr.insertCell();
            let td_disc = tr.insertCell();

            td_nome.innerText = this.arrayProf[i].nomeProf;
            td_disc.innerText = this.arrayProf[i].discProf;
        }
    }

    adicionar(prof){
        this.arrayProf.push(prof);
        this.id++;
    }

    lerDados(){ 
        let prof = {}

        prof.nomeProf = document.getElementById('nome').value;
        prof.discProf = document.getElementById('disc').value;

        return prof;
    }

    validaCampo(prof){
        let msg = '';

        if(prof.nomeProf == ''){
            msg += '- Informe o nome do professor \n'
        }
        if(prof.discProf == ''){
            msg += '- Informe a disciplina que ele lecionará \n'
        }
        if(msg != ''){
            alert(msg);
            return false
        }

        return true;
    }

    excluir(){
        document.getElementById('nome').value = '';
        document.getElementById('disc').value = '';
    }
}

var prof = new Professores();
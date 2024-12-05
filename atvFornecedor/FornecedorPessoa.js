import Fornecedor from './Fornecedor.js';

class FornecedorPessoa extends Fornecedor{
    constructor(nome="Sem nome",fone= '(00)-0000-0000', rg="12.345.678-9", cpf='123.456.789.00'){
            super(nome,fone);
            this.rg = rg
            this.cpf = cpf
    }

    setRg(){
        this.rg=rg
    }

    getRg(){
        return this.rg
    }

    setCpf(){
        this.cpf=cpf
    }

    getCpf(){
        return this.cpf
    }
    
}
export default FornecedorPessoa;

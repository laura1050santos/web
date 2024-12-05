import FornecedorPessoa from "./FornecedorPessoa.js";
import Fornecedor from "./Fornecedor.js";


const fornecedor= new Fornecedor("Pedro","(11)-1234-5678");

console.log(`Dados do Fornecedor: Nome: ${fornecedor.getNome()}
Fone:${fornecedor.getFone()}`);

const fornecedorPessoa =  new FornecedorPessoa("Ana Marçal", "(11)-1234-5678", "11.234.344-03", "123.456.234.-01")
console.log("\n Dados da Pessoa")
console.log(`Nome: ${fornecedorPessoa.getNome()} \n Telefone ${fornecedorPessoa.getFone()}\n CPF: ${fornecedorPessoa.getCpf()} \n RG: ${fornecedorPessoa.getRg()}`)

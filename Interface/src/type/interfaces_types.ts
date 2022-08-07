
// Interfaces

interface Post{
  title: string;
}

interface Conteudo{
  descricao: string;
}

// Extend | interseção

interface PostBlog extends Post, Conteudo{

}

// Funcoes dentro da interface

interface getCategorias {
  (id: string): void;
}

// <<<<<<<<<<   Diferenças   >>>>>>>>>>

//interface userID extends string | number {}

// Tuplas nao vao ser tipadas
interface Tupla{
  0: number;
  1: number;
}

[1, 2, 15 ] as Tupla;

// Interface pode ter multiplas declaraçoes e ela une do mesmo nome.

interface MinhaBiblioteca{
  prop1: string;
}


interface MinhaBiblioteca{
  prop2: string;
}

interface MinhaBiblioteca{
  id: string | number;
}

const TesteBiblioteca: MinhaBiblioteca = {
 prop1: "TESTE1",
 prop2: "TESTE2",
 id: 1
}


// Type Alias

type Post2 = {
  title: string;
}

interface Conteudo2{
  descricao: string;
}

// Extend | interseção

type PostBlog2 = Post2 & Conteudo2;

// Funcoes dentro do type alias

type getCategorias2 = (id: string) => void;

// <<<<<<<<<<   Diferenças   >>>>>>>>>>

// Podemos declarar tipo primitivo
type userID2 = string | number;

// Tuplas com tipadas com TYPE
type Tupla2 = [number, number]

[1, 2] as Tupla2;


// Nao podemos ter multiplas declaraçoes com mesmo nome
// type MinhaBiblioteca2 = {
//   prop1: string;
// }


// type MinhaBiblioteca2 ={
//   prop2: string;
// }


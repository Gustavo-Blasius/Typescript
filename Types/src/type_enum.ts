enum StatusColor{
    backgroung = '#cececece',
    font = '#0000000'
}

enum userPermission{
    ADMIN,
    USER,
    SUPPORT
}

//São tipos imutáveis, que terão sempre o mesmo valor
// no caso do userPermission, se a gente não atribuir nenhum valor, segue uma sequencia numeral crescente;

console.log(userPermission.ADMIN)
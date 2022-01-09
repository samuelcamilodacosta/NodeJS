import pdf from 'html-pdf';
import ejs from 'ejs';

pdf.create("Gerando um PDF aleatório", { format: 'A4'}).toFile("./nome_do_arquivo.pdf", (err, res) => {
    if (err) throw err;
    else console.log(res);
})

const conteudo = "Conteúdo dinâmico";

const page_html = `
    <h1 style="color: green;"> Título do PDF </h1>
    <hr>
    <p> Conteúdo do PDF </p>
    <p> Conteúdo do PDF </p>
    <hr>
    <p> Conteúdo do PDF </p>
    <p> Conteúdo do PDF </p>
    <hr>
    <p> ${conteudo}</p>
    <p> ${conteudo}</p>
    <img src="https://i.pinimg.com/564x/52/74/0f/52740f7a75720a4576d1bd0613e3a3a1.jpg" />
`;

pdf.create(page_html, { format: 'A4'}).toFile("./renderizando_html.pdf", (err, res) => {
    if (err) throw err;
    else console.log(res);
});

ejs.renderFile("./page.ejs", {conteudo: conteudo}, (err, html) => {
    if (err) throw err;
    else {
        pdf.create(html, { format: 'A4'}).toFile("./renderizando_page_engine.pdf", (err, res) => {
            if (err) throw err;
            else console.log(res);
        });
    }
});
const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('Bem vindo ao Bot conversor 🤖💰');



async function robot() {
    const browser = await puppeteer.launch({ headless: false }); 
    const page = await browser.newPage(); 
    const moedaBase = readlineSync.question('Imforme uma moeda base: ') || 'dolar';
    const moedaFinal = readlineSync.question('informe a moeda desejada : ') || 'real';
    
    const url = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&source=lmns&bih=651&biw=1366&rlz=1C1VDKB_pt-PTBR1064BR1064&hl=pt-BR&sa=X&ved=2ahUKEwjss7vYvZiBAxV1rpUCHS44ByIQ0pQJKAB6BAgBEAI`
    await page.goto(url); 
    await page.screenshot({path: 'resultado.png'}); 

     

    const resultado = await page.evaluate(() => {
        return document.querySelector(".lWzCpb.a61j6").value 
    });

    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`)
    //await browser.close();
}

robot()
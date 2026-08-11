import {input, select} from "@inquirer/prompts"

async function main(){
    const nome = await input({
        message: "Qual é o seu nome?",
        required: true
    })

    console.log(`Olá ${nome}, Seja Bem Vindo Ao Sistema :)`)
}

main()